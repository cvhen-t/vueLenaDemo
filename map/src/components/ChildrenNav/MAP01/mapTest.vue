<template>
    <div style="height:700px;width:100%;">
        <div style="margin-bottom: 10px;display: flex; align-items: center; ">
            <div class="maginten">
                <el-button size="mini"
                           @click="fltToOrientation">重置 </el-button>
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
                        width="200"
                        trigger="click">
                <div>
                    <el-button size="mini"
                               @click="fltToOrientation">重置 </el-button>
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
import { linePlan } from './comm/geoJson';
import mapboxgl from 'mapbox-gl';
import mapBoxApi from './comm/mapApi';
let mmapBoxApiObj = null;
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
            activeCoror: '#ec1877'
        };
    },
    mounted() {
        this.init();
        this.initprovinceList();
    },
    methods: {
        provinceChange(e) {
            let obj = this.provincelist.find((item) => item.value == e);
            if (obj) {
                if (map.getLayer(`${this.previousPro}`)) {
                    map.removeLayer(`${this.previousPro}`);
                    map.removeSource(`${this.previousPro}`);
                    mmapBoxApiObj.addRoutelayer(`${e}`, obj, { color: this.activeCoror, width: 1, opacity: 1 });
                    mmapBoxApiObj.flyToCenten(obj, 4);
                } else {
                    mmapBoxApiObj.addRoutelayer(`${e}`, obj, { color: this.activeCoror, width: 1, opacity: 1 });
                    mmapBoxApiObj.flyToCenten(obj, 4);
                }
                this.previousPro = e;
            }
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
        // 初始化
        init() {
            let that = this;
            mapboxgl.accessToken = 'pk.eyJ1Ijoid3V5YW5nd2VuIiwiYSI6ImNrcWZ5MmhwcDE5eTkyeG56ZXVyY3VsZ3EifQ.90L3IQF1bIUc1qTShDlq-A';
            window.map = new mapboxgl.Map({
                container: this.$refs.basicMapbox, // container id 绑定的组件的id
                style: 'mapbox://styles/wuyangwen/ckqfzjrds36ch18prcds22idm/draft', // style URL
                center: [106.02806614743885, 33.26824423858698], // starting position [lng, lat]
                zoom: 3 // starting zoom
            });
            mmapBoxApiObj = new mapBoxApi(map);
            map.on('load', (e) => {});
            map.on('click', (e) => {});
        },
        //定位
        fltToOrientation() {
            this.cleacarLayers();
            mmapBoxApiObj.flyToCenten(this.routeGeoJson, 3);
        },
        //导航
        lineToPlan() {
            let res = {
                type: 'FeatureCollection',
                features: []
            };
            for (const key in linePlan) {
                if (Object.hasOwnProperty.call(linePlan, key)) {
                    res.features.push(linePlan[key].features[0]);
                }
            }
            if (map.getLayer('lineToPlan')) {
                this.cleacarLayers();
                return;
            }
            mmapBoxApiObj.addRoutelayer('lineToPlan', res, { color: '#077692', width: 5, opacity: 0.3 });
            mmapBoxApiObj.test('lineToPlan');
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

