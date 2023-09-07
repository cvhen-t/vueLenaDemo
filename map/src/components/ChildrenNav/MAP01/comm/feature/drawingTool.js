import mapBoxApi from '../mapApi';
import { togeoJson, putStrNowDate, copyText } from '../util.js';

let drawLine = [];
let saveCompleteDrawLine = [];
//当前坐标
let clickPoint = [];
//预绘制图层递增id
let sourIndex = 1;
let isBeforDraw = true;
let mapBoxApiClass = null;
export default class DrawerUtil {
    mapBoxApiClass = null;
    //绘制保持的数据

    constructor(map, isBeforDraw = true) {
        mapBoxApiClass = new mapBoxApi(map);
        isBeforDraw = isBeforDraw;
    }
    start() {
        this.drawLinechange(true);
    }
    stop() {
        this.drawLinechange(false);
    }
    clear() {
        this.cleaLayerAndSourceToregex();
    }
    getCurrentGeoJSONData() {
        return saveCompleteDrawLine;
    }

    // 绘制开关
    drawLinechange(value) {
        if (!value) {
            mapBoxApiClass.offSetMapEvent(this.clickGetlngLat, 'click');
            mapBoxApiClass.offSetMapEvent(this.drawLineToclickGetlngLat.bind(this), 'contextmenu');
            drawLine = [];
            this.cleaLayerAndSourceToregex([/^draw|^source/, /^sours|^source/]);
            map.getCanvas().style.cursor = 'pointer';
            sourIndex = 1;
        } else {
            map.getCanvas().style.cursor = 'crosshair';
            mapBoxApiClass.onSetMapEvent(this.clickGetlngLat, 'click');
            mapBoxApiClass.onSetMapEvent(this.drawLineToclickGetlngLat.bind(this), 'contextmenu');
        }
    }

    //左键取点
    clickGetlngLat(e) {
        clickPoint = [[e.lngLat.lng, e.lngLat.lat]];
        drawLine.push([e.lngLat.lng, e.lngLat.lat]);
        mapBoxApiClass.onSetMapEvent(this.mousemoveGetlngLat, 'mousemove');

        if (isBeforDraw) {
            if (map.getSource(`sours${sourIndex}`)) {
                mapBoxApiClass.addRoutelayer(`sours${sourIndex}`, `sours${sourIndex}`, {
                    color: '#077692',
                    width: 1,
                    opacity: 1,
                    opacity: [2, 2]
                });
                sourIndex = sourIndex + 1;
            }
        }
    }
    //预绘制，根据鼠标移动画虚线
    mousemoveGetlngLat(e) {
        // 获取鼠标的坐标
        var coords = e.lngLat;
        // 创建虚线路径
        var lineCoordinates = [clickPoint[0]];
        lineCoordinates.push([coords.lng, coords.lat]);
        let res = togeoJson(lineCoordinates);
        // 清除之前的虚线图层（如果存在）
        if (map.getSource(`sours${sourIndex}`)) {
            map.getSource(`sours${sourIndex}`).setData(res);
        } else {
            mapBoxApiClass.addRoutelayer(`sours${sourIndex}`, res, { color: 'red', width: 1, opacity: 1, dasharray: [2, 2] });
        }
    }

    //绘制--根据鼠标右键点击获取的坐标绘制线路
    drawLineToclickGetlngLat(e) {
        if (!drawLine.length > 0) return;
        let res = togeoJson(drawLine);
        saveCompleteDrawLine = res;
        copyText(JSON.stringify(res), '路线geoJson数据复制成功');
        mapBoxApiClass.addRoutelayer(`draw${putStrNowDate()}`, res, { color: '#077692', width: 1, opacity: 1 });
        mapBoxApiClass.offSetMapEvent(this.mousemoveGetlngLat, 'mousemove');
        this.cleaLayerAndSourceToregex([/^sours|^source/]);
        drawLine = [];
        sourIndex = 1;
    }

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
        saveCompleteDrawLine = [];
        //绘制保持的数;
        drawLine = [];
        //当前坐;
        clickPoint = [];
        //预绘制图层递增i;
        sourIndex = 1;
    }
}
