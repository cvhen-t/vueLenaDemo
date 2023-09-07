import * as turf from '@turf/turf';
class mapBoxApi {
    map = null;
    constructor(map) {
        this.map = map;
    }

    //添加图层
    addRoutelayer(id, data, paintOpt = { color: '#14dbf5', width: 1, opacity: 1 }) {
        if (this.map.getLayer(id)) return;
        let obj = {
            'line-width': paintOpt.width || 1,
            'line-opacity': paintOpt.opacity,
            'line-color': ['case', ['boolean', ['feature-state', 'hover'], false], '#0b4975', paintOpt.color]
            // 'line-color': ['', ['get', 'status'], 'active', '#FF0000', paintOpt.color]
        };
        if (paintOpt.dasharray) obj['line-dasharray'] = paintOpt.dasharray;
        this.map.addLayer({
            id: id,
            type: 'line',
            source:
                typeof data === 'string'
                    ? data
                    : {
                          type: 'geojson',
                          lineMetrics: true,
                          // generateId: true,
                          data
                      },
            paint: obj
        });
    }

    //定位
    flyToCenten(data, zoom, centerList = []) {
        const centerObj = turf.centerOfMass(data);
        let center = centerObj.geometry.coordinates;
        map.flyTo({
            center: centerList.length > 0 ? centerList : center,
            zoom,
            speed: 2,
            curve: 1
        });
    }
    // 设置地图事件方法
    onSetMapEvent(callBack, type = 'click', LayerId = '') {
        let that = this;
        if (!LayerId) {
            that.map.on(type, callBack);
        } else {
            that.map.on(type, LayerId, callBack);
        }
    }

    // 取消设置地图事件方法
    offSetMapEvent(callBack, type = 'click', LayerId = '') {
        let that = this;
        if (!LayerId) {
            that.map.off(type, callBack);
        } else {
            that.map.off(type, LayerId, callBack);
        }
    }
}
export default mapBoxApi;
