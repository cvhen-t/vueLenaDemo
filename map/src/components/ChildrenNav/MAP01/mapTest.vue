<template>
    <div style="height:700px;width:100%;">
        <div style="margin-bottom: 10px;display: flex; align-items: center; ">
            <div class="maginten">
                <el-button size="mini"
                           @click="fltToOrientation">重置 </el-button>
            </div>

            <div class="maginten">
                <span class="fontSize">绘制开关：</span>
                <el-switch v-model="openDrawLine"
                           @change="drawLinechange"
                           active-color="#13ce66"
                           inactive-color="#909399">
                </el-switch>
            </div>

            <div class="maginten">
                <span class="fontSize">选择省份：</span>
                <el-select size="mini"
                           v-model="provinceValue"
                           @change="provinceChange"
                           placeholder="请选择">
                    <el-option v-for="item in provincelist"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                </el-select>
            </div>

            <el-popover placement="bottom"
                        title="地图操作"
                        width="400"
                        trigger="click">
                <div style="margin-bottom: 10px;display: flex; align-items: center; ">
                    <!-- <el-button size="mini"
                               @click="drawLine">绘制路线 </el-button> -->
                    <el-button size="mini"
                               @click="cleaDrawLine">清除/取消路线 </el-button>

                    <el-button size="mini"
                               @click="toHome">老家 </el-button>
                </div>
                <el-button size="mini"
                           slot="reference">工具</el-button>
            </el-popover>

            <div class="maginten">
                <el-button size="mini"
                           @click="lineToPlan">导航 </el-button>
            </div>
        </div>

        <div style="height:100%;width:100%;text-align:left;">
            <div style="height: 100%; width: 100%;"
                 ref="basicMapbox"></div>
        </div>
    </div>

</template>
<script>
import { zginit } from './comm/json/zgint';
import { linePlan, oldHome } from './comm/geoJson';
import mapboxgl from 'mapbox-gl';
import mapBoxApi from './comm/mapApi';
import { togeoJson, putStrNowDate, copyText } from './comm/util.js';
let mapBoxApiClass = null;
export default {
    props: {
        mapWidth: {
            type: String
        },
        mapHeight: {
            type: String
        }
    },
    data() {
        return {
            provincelist: [],
            provinceValue: '',
            previousPro: '',
            routeGeoJson: zginit,
            activeCoror: '#ec1877',
            openDrawLine: false,
            //绘制保持的数据
            drawLine: []
        };
    },
    mounted() {
        this.init();
        this.initprovinceList();
    },
    methods: {
        // 初始化
        init() {
            let that = this;
            mapboxgl.accessToken = 'pk.eyJ1Ijoid3V5YW5nd2VuIiwiYSI6ImNrcWZ5MmhwcDE5eTkyeG56ZXVyY3VsZ3EifQ.90L3IQF1bIUc1qTShDlq-A';
            window.map = new mapboxgl.Map({
                container: this.$refs.basicMapbox, // container id 绑定的组件的id
                style: 'mapbox://styles/wuyangwen/ckqfzjrds36ch18prcds22idm', // style URL
                center: [106.02806614743885, 33.26824423858698], // starting position [lng, lat]
                zoom: 3 // starting zoom
            });
            mapBoxApiClass = new mapBoxApi(map);
            map.on('load', (e) => {});
        },
        //初始化下拉省份
        initprovinceList() {
            this.provincelist = this.routeGeoJson.features.map((item) => {
                return {
                    label: item.properties.name,
                    value: item.properties.adcode,
                    ...item
                };
            });
        },
        //切换省份
        provinceChange(e) {
            let obj = this.provincelist.find((item) => item.value == e);
            if (obj) {
                if (map.getLayer(`${this.previousPro}`)) {
                    map.removeLayer(`${this.previousPro}`);
                    map.removeSource(`${this.previousPro}`);
                    mapBoxApiClass.addRoutelayer(`${e}`, obj, { color: this.activeCoror, width: 1, opacity: 1 });
                    mapBoxApiClass.flyToCenten(obj, 4);
                } else {
                    mapBoxApiClass.addRoutelayer(`${e}`, obj, { color: this.activeCoror, width: 1, opacity: 1 });
                    mapBoxApiClass.flyToCenten(obj, 4);
                }
                this.previousPro = e;
            }
        },
        // 绘制开关
        drawLinechange(value) {
            if (!value) {
                mapBoxApiClass.offSetMapEvent(this.clickGetlngLat, 'click');
                mapBoxApiClass.offSetMapEvent(this.drawLineToclickGetlngLat, 'contextmenu');
                this.drawLine = [];
                this.cleaDrawLine();
            } else {
                mapBoxApiClass.onSetMapEvent(this.clickGetlngLat, 'click');
                mapBoxApiClass.onSetMapEvent(this.drawLineToclickGetlngLat, 'contextmenu');
            }
        },
        //点击获取坐标
        clickGetlngLat(e) {
            this.drawLine.push([e.lngLat.lng, e.lngLat.lat]);
        },
        //根据点击获取的坐标绘制线路
        drawLineToclickGetlngLat(e) {
            let res = togeoJson(this.drawLine);
            copyText(JSON.stringify(res), '路线geoJson数据复制成功');
            mapBoxApiClass.addRoutelayer(`lay${putStrNowDate()}`, res, { color: '#077692', width: 1, opacity: 1 });
            this.drawLine = [];
        },

        //重置
        fltToOrientation() {
            this.cleacarLayers();
            mapBoxApiClass.flyToCenten(this.routeGeoJson, 3);
        },
        //toHome
        toHome() {
            if (map.getLayer('oldHome')) {
                mapBoxApiClass.flyToCenten(oldHome, 17);
                return;
            }
            mapBoxApiClass.addRoutelayer(`oldHome`, oldHome, { color: this.activeCoror, width: 2, opacity: 1 });
            mapBoxApiClass.flyToCenten(oldHome, 17);
        },

        //组装导航路线数据
        lineToPlan() {
            let res = {
                type: 'FeatureCollection',
                features: []
            };
            for (const key in linePlan) {
                if (Object.hasOwnProperty.call(linePlan, key)) {
                    const feature = linePlan[key].features[0];
                    feature.id = feature.properties.id;
                    res.features.push(feature);
                }
            }
            if (map.getLayer('lineToPlan')) {
                this.cleacarLayers();
                return;
            }
            mapBoxApiClass.addRoutelayer('lineToPlan', res, { color: '#077692', width: 14, opacity: 0.5 });
            this.changeLinePlan('lineToPlan');
        },
        //导航点击切换逻辑
        changeLinePlan(hoveredStateIds) {
            let hoveredStateId = null;
            let oldhoveredStateId = null;
            mapBoxApiClass.clickMap(hoveredStateIds, (e) => {
                map.getCanvas().style.cursor = 'pointer';
                if (e.features.length > 0) {
                    hoveredStateId = e.features[0].properties.id;
                    if (hoveredStateId) {
                        map.setFeatureState({ source: hoveredStateIds, id: hoveredStateId }, { hover: true });
                        if (oldhoveredStateId) {
                            map.setFeatureState({ source: hoveredStateIds, id: oldhoveredStateId }, { hover: false });
                        }
                        oldhoveredStateId = hoveredStateId;
                    }
                }
            });
        },
        //清除绘制路线
        cleaDrawLine() {
            const regex = /^lay|^source/;
            // 获取地图中所有图层和源
            const allLayersAndSources = map.getStyle().layers.concat(map.getStyle().sources);
            // 遍历图层和源并移除匹配的项
            allLayersAndSources.forEach((layerOrSource) => {
                if (layerOrSource && layerOrSource.id && layerOrSource.id.match(regex)) {
                    // 移除匹配的图层或源
                    map.removeLayer(layerOrSource.id);
                    map.removeSource(layerOrSource.id);
                }
            });
        },
        //清除图层
        cleacarLayers() {
            if (map.getLayer('lineToPlan')) {
                map.removeLayer('lineToPlan');
                map.removeSource('lineToPlan');
            }
            if (map.getLayer(`${this.previousPro}`)) {
                map.removeLayer(`${this.previousPro}`);
                map.removeSource(`${this.previousPro}`);
                this.previousPro = '';
            }
        }
    },
    computed: {
        mapSize() {
            let styleObj = {
                width: this.mapWidth,
                height: this.mapHeight
            };
            return styleObj;
        }
    }
};
</script>
<style>
.maginten {
    margin: 0 10px;
}
.fontSize {
    font-size: 13px;
}
@import url('https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css');
</style>

