import * as turf from '@turf/turf';
class mapBoxApi {
    map = null;
    constructor(map) {
        this.map = map;
    }

    //添加图层
    addRoutelayer(id, data, paintOpt = { color: '#14dbf5', width: 1, opacity: 1 }) {
        if (this.map.getLayer(id)) return;
        this.map.addLayer({
            id: id,
            type: 'line',
            source: {
                type: 'geojson',
                lineMetrics: true,
                data
            },
            paint: {
                'line-width': paintOpt.width,
                'line-opacity': paintOpt.opacity,
                // 'line-color': ['case', ['boolean', ['feature-state', 'hover'], false], '#ffffff', paintOpt.color],
                'line-color': ['match', ['get', 'status'], 'active', '#FF0000', paintOpt.color]
            }
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
    test(hoveredStateIds) {
        let that = this;
        let hoveredStateId = null;
        that.map.on('mouseenter', hoveredStateIds, function (e) {
            that.map.getCanvas().style.cursor = 'pointer';
            if (e.features.length > 0) {
                if (hoveredStateId) {
                    that.map.setFeatureState({ source: hoveredStateIds, id: hoveredStateId }, { status: 'active' });
                }
                hoveredStateId = e.features[0].properties.id;
                that.map.setFeatureState({ source: hoveredStateIds, id: hoveredStateId }, { status: 'active' });
            }
        });
        // that.map.on('mouseleave', hoveredStateIds, function (e) {
        //     that.map.getCanvas().style.cursor = '';
        //     if (hoveredStateId) {
        //         that.map.setFeatureState({ source: hoveredStateIds, id: hoveredStateId }, { hover: false });
        //     }
        //     hoveredStateId = null;
        // });
    }
}
export default mapBoxApi;
