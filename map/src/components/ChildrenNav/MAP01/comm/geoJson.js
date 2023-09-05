let bjToZtPlanA = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { id: 'bjToZtPlanA' },
            geometry: {
                coordinates: [
                    [116.36663290676319, 39.902845282438136],
                    [108.95793928268256, 34.36336802107151],
                    [103.71550057317057, 27.332146937222717]
                ],
                type: 'LineString'
            }
        }
    ]
};

let bjToZtPlanB = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: {
                id: 'bjToZtPlanB'
            },
            geometry: {
                coordinates: [
                    [116.36663290676319, 39.902845282438136],
                    [103.9280034356326, 36.02247609176638],
                    [103.71480709037507, 27.374441322797608]
                ],
                type: 'LineString'
            }
        }
    ]
};

let bjToZtPlanC = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: {
                id: 'bjToZtPlanC'
            },
            geometry: {
                coordinates: [
                    [116.31360578974648, 39.90687584614031],
                    [112.19688370806671, 31.947145160344775],
                    [111.78592929762516, 28.93691272603479],
                    [103.62488635942265, 27.328882146323792]
                ],
                type: 'LineString'
            }
        }
    ]
};
let linePlan = {
    bjToZtPlanA,
    bjToZtPlanB,
    bjToZtPlanC
};

export { linePlan };

// "circle-color": [
//     "case",
//     ["boolean", ["feature-state", "hover"], false],
//     "#ccdeff",
//     "#ffffff"
//   ],
