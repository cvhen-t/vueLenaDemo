<template>
    <div style="height:700px;width:100%;">
        <div class="felxBox">
            <div class="maginten">
                <el-button size="mini"
                           @click="fltToOrientation">重置 </el-button>
            </div>

            <div style="    margin: 0;"
                 class="maginten felxBox">
                <span class="fontSize">绘制开关：</span>
                <el-switch v-model="openDrawLine"
                           @change="drawLinechange"
                           active-color="#13ce66"
                           inactive-color="#909399">
                </el-switch>
                <div @click=" cleaLayerAndSourceToregex([/^draw|^source/, /^sours|^source/]) ,drawLine=[];"
                     v-show="openDrawLine"> <i style="font-size: 17px;color: red; margin: 0 10px; "
                       class="el-icon-delete"></i></div>

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
                <div class="felxBox">
                    <!-- <el-button size="mini"
                               @click="drawLine">绘制路线 </el-button> -->
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
import style from './comm/style/index.json';
import { zginit } from './comm/json/zgint';
import { linePlan, oldHome } from './comm/json/geoJson';
import mapboxgl from 'mapbox-gl';
import mapBoxApi from './comm/mapApi';
import { togeoJson, putStrNowDate, copyText } from './comm/util.js';
let mapBoxApiClass = null;
let isuseLocation = true;
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
            styleUrl: 'mapbox://styles/wuyangwen/ckqfzjrds36ch18prcds22idm',
            provincelist: [],
            provinceValue: '',
            previousPro: '',
            routeGeoJson: zginit,
            activeCoror: '#ec1877',
            openDrawLine: false,
            //绘制保持的数据
            drawLine: [],
            //当前坐标
            clickPoint: [],
            //预绘制图层递增id
            sourIndex: 1
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
                style: isuseLocation ? style : this.styleUrl, // style URL
                center: [106.02806614743885, 33.26824423858698], // starting position [lng, lat]
                zoom: 3 // starting zoom
            });
            // E:\demo/vueLenaDemo/map/src/components/ChildrenNav/MAP01/comm/style/index.json
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
        //取点--点击鼠标获取坐标
        clickGetlngLat(e) {
            this.clickPoint = [[e.lngLat.lng, e.lngLat.lat]];
            this.drawLine.push([e.lngLat.lng, e.lngLat.lat]);

            mapBoxApiClass.onSetMapEvent(this.mousemoveGetlngLat, 'mousemove');
            if (map.getSource(`sours${this.sourIndex}`)) {
                mapBoxApiClass.addRoutelayer(`sours${this.sourIndex}`, `sours${this.sourIndex}`, {
                    color: '#077692',
                    width: 1,
                    opacity: 1,
                    opacity: [2, 2]
                });
                this.sourIndex = this.sourIndex + 1;
            }
        },
        //预绘制，根据鼠标移动画虚线
        mousemoveGetlngLat(e) {
            // 获取鼠标的坐标
            var coords = e.lngLat;
            // 创建虚线路径
            var lineCoordinates = [this.clickPoint[0]];
            lineCoordinates.push([coords.lng, coords.lat]);
            let res = togeoJson(lineCoordinates);
            // 清除之前的虚线图层（如果存在）
            if (map.getSource(`sours${this.sourIndex}`)) {
                map.getSource(`sours${this.sourIndex}`).setData(res);
            } else {
                mapBoxApiClass.addRoutelayer(`sours${this.sourIndex}`, res, { color: 'red', width: 1, opacity: 1, dasharray: [2, 2] });
            }
        },
        //绘制--根据鼠标右键点击获取的坐标绘制线路
        drawLineToclickGetlngLat(e) {
            if (!this.drawLine.length > 0) return;
            let res = togeoJson(this.drawLine);
            copyText(JSON.stringify(res), '路线geoJson数据复制成功');
            mapBoxApiClass.addRoutelayer(`draw${putStrNowDate()}`, res, { color: '#077692', width: 1, opacity: 1 });
            mapBoxApiClass.offSetMapEvent(this.mousemoveGetlngLat, 'mousemove');
            this.cleaLayerAndSourceToregex([/^sours|^source/]);
            this.drawLine = [];
            this.sourIndex = 1;
        },
        // 绘制开关
        drawLinechange(value) {
            if (!value) {
                mapBoxApiClass.offSetMapEvent(this.clickGetlngLat, 'click');
                mapBoxApiClass.offSetMapEvent(this.drawLineToclickGetlngLat, 'contextmenu');
                this.drawLine = [];
                this.cleaLayerAndSourceToregex([/^draw|^source/, /^sours|^source/]);
                map.getCanvas().style.cursor = 'pointer';
                this.sourIndex = 1;
            } else {
                map.getCanvas().style.cursor = 'crosshair';
                mapBoxApiClass.onSetMapEvent(this.clickGetlngLat, 'click');
                mapBoxApiClass.onSetMapEvent(this.drawLineToclickGetlngLat, 'contextmenu');
            }
        },

        //重置
        fltToOrientation() {
            this.initVueData();
            this.drawLinechange();
            this.cleaLayerAndSourceToregex([/^draw|^source/, /^sours|^source/]);
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
            mapBoxApiClass.onSetMapEvent(
                (e) => {
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
                },
                'click',
                hoveredStateIds
            );
        },
        //清除绘制路线
        cleaLayerAndSourceToregex(regex = []) {
            regex.forEach((reg) => {
                // 获取地图中所有图层和源
                const allLayersAndSources = map.getStyle().layers.concat(map.getStyle().sources);
                // 遍历图层和源并移除匹配的项
                allLayersAndSources.forEach((layerOrSource) => {
                    if (layerOrSource && layerOrSource.id && layerOrSource.id.match(reg)) {
                        // 移除匹配的图层或源
                        map.removeLayer(layerOrSource.id);
                        map.removeSource(layerOrSource.id);
                    }
                });
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
        },
        //初始化vue数据
        initVueData() {
            this.openDrawLine = false;
            //绘制保持的数;
            this.drawLine = [];
            //当前坐;
            this.clickPoint = [];
            //预绘制图层递增i;
            this.sourIndex = 1;
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
.felxBox {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}
@import './comm/style/map.css';
</style>

