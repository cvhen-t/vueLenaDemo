// let a = {
//     checkIndices: [
//         {
//             checkClassCode: 11012,
//             checkClassNmae: '有数无图',
//             checkIndex: 0,
//             checkIndexCompare: '',
//             orgId: '111'
//         }
//     ],
//     checkItems: [
//         {
//             checkClassCode: 11012,
//             checkItemCode: 11000,
//             orgId: '111',
//             checkCount: 0,
//             checkCountCompare: '',
//             passRate: 0,
//             passRateCompare: '',
//             questionCount: 0,
//             questionCountCompare: ''
//         },
//         {
//             checkClassCode: 11013,
//             checkItemCode: 11013,
//             orgId: '111',
//             checkCount: 0,
//             checkCountCompare: '',
//             passRate: 0,
//             passRateCompare: '',
//             questionCount: 0,
//             questionCountCompare: ''
//         },
//         {
//             checkClassCode: 11012,
//             checkItemCode: 11012,
//             orgId: '222',
//             checkCount: 0,
//             checkCountCompare: '',
//             passRate: 0,
//             passRateCompare: '',
//             questionCount: 0,
//             questionCountCompare: ''
//         }
//     ],
//     orgs: [
//         {
//             batchId: 0,
//             checkIndex: 0,
//             checkIndexCompare: '',
//             checkTime: '',
//             displayOrder: 0,
//             orgId: '111',
//             orgName: '北京',
//             orgShortName: '',
//             orgType: 0,
//             provinceBatchId: 0,
//             provinceId: '',
//             pushTime: ''
//         },
//         {
//             batchId: 0,
//             checkIndex: 0,
//             checkIndexCompare: '',
//             checkTime: '',
//             displayOrder: 0,
//             orgId: '222',
//             orgName: '江苏',
//             orgShortName: '',
//             orgType: 0,
//             provinceBatchId: 0,
//             provinceId: '',
//             pushTime: ''
//         },
//         {
//             batchId: 0,
//             checkIndex: 0,
//             checkIndexCompare: '',
//             checkTime: '',
//             displayOrder: 0,
//             orgId: '444',
//             orgName: '江西',
//             orgShortName: '',
//             orgType: 0,
//             provinceBatchId: 0,
//             provinceId: '',
//             pushTime: ''
//         }
//     ]
// };

// let b = [
//     {
//         ruleId: 1,
//         ruleCode: 11012,
//         ruleName: '图数一致性',
//         displayOrder: 1,
//         childrenRules: [
//             {
//                 ruleId: 6,
//                 ruleCode: 101,
//                 ruleName: '有图无数',
//                 displayOrder: 1,
//                 childrenRules: []
//             },
//             {
//                 ruleId: 7,
//                 ruleCode: 102,
//                 ruleName: '有数无图',
//                 displayOrder: 2,
//                 childrenRules: []
//             },
//             {
//                 ruleId: 8,
//                 ruleCode: 103,
//                 ruleName: '一数多图',
//                 displayOrder: 3,
//                 childrenRules: []
//             },
//             {
//                 ruleId: 9,
//                 ruleCode: 104,
//                 ruleName: '设备图数所属容器不一致',
//                 displayOrder: 4,
//                 childrenRules: []
//             },
//             {
//                 ruleId: 10,
//                 ruleCode: 105,
//                 ruleName: '设备图数电压等级不一致',
//                 displayOrder: 5,
//                 childrenRules: []
//             }
//         ]
//     },
//     {
//         ruleId: 2,
//         ruleCode: 20,
//         ruleName: '台账完整性',
//         displayOrder: 2,
//         childrenRules: [
//             {
//                 ruleId: 11,
//                 ruleCode: 201,
//                 ruleName: '台账关键属性空值',
//                 displayOrder: 1,
//                 childrenRules: []
//             },
//             {
//                 ruleId: 12,
//                 ruleCode: 201,
//                 ruleName: '台账关键属性空值',
//                 displayOrder: 2,
//                 childrenRules: []
//             }
//         ]
//     },
//     {
//         ruleId: 3,
//         ruleCode: 30,
//         ruleName: '台账规范性',
//         displayOrder: 3,
//         childrenRules: [
//             {
//                 ruleId: 13,
//                 ruleCode: 301,
//                 ruleName: '台账关键属性码值错误',
//                 displayOrder: 1,
//                 childrenRules: []
//             },
//             {
//                 ruleId: 14,
//                 ruleCode: 301,
//                 ruleName: '台账关键属性码值错误',
//                 displayOrder: 2,
//                 childrenRules: []
//             }
//         ]
//     },
//     {
//         ruleId: 4,
//         ruleCode: 40,
//         ruleName: '图形规范性',
//         displayOrder: 4,
//         childrenRules: [
//             {
//                 ruleId: 15,
//                 ruleCode: 401,
//                 ruleName: '线段超长',
//                 displayOrder: 1,
//                 childrenRules: []
//             },
//             {
//                 ruleId: 16,
//                 ruleCode: 402,
//                 ruleName: '图形坐标空值',
//                 displayOrder: 2,
//                 childrenRules: []
//             },
//             {
//                 ruleId: 17,
//                 ruleCode: 403,
//                 ruleName: '图形坐标值异常(仅南瑞有)',
//                 displayOrder: 3,
//                 childrenRules: []
//             },
//             {
//                 ruleId: 18,
//                 ruleCode: 404,
//                 ruleName: '运行杆无物理杆',
//                 displayOrder: 4,
//                 childrenRules: []
//             }
//         ]
//     },
//     {
//         ruleId: 5,
//         ruleCode: 50,
//         ruleName: '拓扑连通性',
//         displayOrder: 5,
//         childrenRules: []
//     }
// ];

// // 修改对象的键
// function modifiedObjKey(originalObject, type) {
//     const keyarr = [
//         'checkIndex',
//         'checkIndexCompare',
//         'checkCount',
//         'checkCountCompare',
//         'passRate',
//         'passRateCompare',
//         'questionCount',
//         'questionCountCompare'
//     ];
//     const modifiedObject = Object.entries(originalObject).reduce((acc, [key, value]) => {
//         const newKey = keyarr.includes(key) ? `${type}${key}` : key;
//         acc[newKey] = value;
//         return acc;
//     }, {});
//     return modifiedObject;
// }

// let checkIndices = [];
// a.checkIndices.forEach((item2) => {
//     checkIndices.push(modifiedObjKey(item2, `head${item2.checkClassCode}`));
// });

// let itemcode = [];
// a.checkItems.forEach((item2) => {
//     itemcode.push(modifiedObjKey(item2, `head${item2.checkItemCode}`));
// });

// a.orgs.forEach((item) => {
//     itemcode.forEach((item2) => {
//         if (item.orgId === item2.orgId) {
//             Object.assign(item, item2);
//         }
//     });
//     checkIndices.forEach((item2) => {
//         if (item.orgId === item2.orgId) {
//             Object.assign(item, item2);
//         }
//     });
// });
// // 表格数据
// // console.log(a.orgs);

// //处理对比值 和图表下拉
// let couvalue = {};
// let StatisticalMethod = [];
// function tocouvalue(list) {
//     list.forEach((item) => {
//         if (item.childrenRules !== undefined && item.childrenRules.length > 0) {
//             tocouvalue(item.childrenRules);
//         } else {
//             StatisticalMethod.push({ lable: item.ruleName, prop: item.ruleCode });
//             couvalue[`head${item.ruleCode}checkCount`] = `head${item.ruleCode}checkCountCompare`;
//             couvalue[`head${item.ruleCode}passRate`] = `head${item.ruleCode}passRateCompare`;
//             couvalue[`head${item.ruleCode}questionCount`] = `head${item.ruleCode}questionCountCompare`;
//         }
//     });
// }
// tocouvalue(b);
// // 处理分项指标
// a.checkIndices.forEach((item) => {
//     couvalue[`head${item.checkClassCode}checkIndex`] = `head${item.checkClassCode}checkIndexCompare`;
// });
// // 对比值维护
// // console.log(couvalue);

// function toHead(b) {
//     b.forEach((item) => {
//         if (item.childrenRules !== undefined && item.childrenRules.length > 0) {
//             item.childrenRules.push({ lable: `${item.ruleName}分项指标`, prop: `head${item.ruleCode}checkIndex` });
//             item.childrenRules.forEach((e) => {
//                 if (e.childrenRules !== undefined) {
//                     e['levelCode'] = 1;
//                     e.childrenRules.push({ lable: '总数', prop: `head${e.ruleCode}checkCount` });
//                     e.childrenRules.push({ lable: '问题数', prop: `head${e.ruleCode}passRate` });
//                     e.childrenRules.push({ lable: '通过率', prop: `head${e.ruleCode}questionCount` });
//                 }
//             });
//         } else {
//             item['levelCode'] = 1;
//             item.childrenRules.push({ lable: '总数', prop: `head${item.ruleCode}checkCount` });
//             item.childrenRules.push({ lable: '问题数', prop: `head${item.ruleCode}passRate` });
//             item.childrenRules.push({ lable: '通过率', prop: `head${item.ruleCode}questionCount` });
//         }
//     });
// }

// toHead(b);

// console.log(b);

// function modifiedObjKey(originalObject, type, keyarr) {
//     return Object.entries(originalObject).reduce((acc, [key, value]) => {
//         const newKey = keyarr.includes(key) ? `${type}${key}` : key;
//         acc[newKey] = value;
//         return acc;
//     }, {});
// }

// function processCheckIndices(checkIndices, a) {
//     const keyarr = ['checkIndex', 'checkIndexCompare'];
//     return checkIndices.map((item2) => modifiedObjKey(item2, `head${item2.checkClassCode}`, keyarr));
// }

// function processCheckItems(checkItems, a) {
//     const keyarr = ['checkCount', 'checkCountCompare', 'passRate', 'passRateCompare', 'questionCount', 'questionCountCompare'];
//     return checkItems.map((item2) => modifiedObjKey(item2, `head${item2.checkItemCode}`, keyarr));
// }

// function mergeData(orgs, itemcode, checkIndices) {
//     orgs.forEach((item) => {
//         itemcode.forEach((item2) => {
//             if (item.orgId === item2.orgId) Object.assign(item, item2);
//         });
//         checkIndices.forEach((item2) => {
//             if (item.orgId === item2.orgId) Object.assign(item, item2);
//         });
//     });
// }

// function processStatisticalMethod(b, couvalue) {
//     let StatisticalMethod = [];
//     function tocouvalue(list) {
//         list.forEach((item) => {
//             if (item.childrenRules && item.childrenRules.length > 0) tocouvalue(item.childrenRules);
//             else {
//                 StatisticalMethod.push({ lable: item.ruleName, prop: item.ruleCode });
//                 couvalue[`head${item.ruleCode}checkCount`] = `head${item.ruleCode}checkCountCompare`;
//                 couvalue[`head${item.ruleCode}passRate`] = `head${item.ruleCode}passRateCompare`;
//                 couvalue[`head${item.ruleCode}questionCount`] = `head${item.ruleCode}questionCountCompare`;
//             }
//         });
//     }
//     checkIndices.forEach((item) => {
//         couvalue[`head${item.checkClassCode}checkIndex`] = `head${item.checkClassCode}checkIndexCompare`;
//     });
//     tocouvalue(b);
//     return StatisticalMethod;
// }

// function toHead(b) {
//     b.forEach((item) => {
//         if (item.childrenRules && item.childrenRules.length > 0) {
//             item.childrenRules.push({ lable: `${item.ruleName}分项指标`, prop: `head${item.ruleCode}checkIndex` });
//             item.childrenRules.forEach((e) => {
//                 if (e.childrenRules) {
//                     e['levelCode'] = 1;
//                     e.childrenRules.push({ lable: '总数', prop: `head${e.ruleCode}checkCount` });
//                     e.childrenRules.push({ lable: '问题数', prop: `head${e.ruleCode}passRate` });
//                     e.childrenRules.push({ lable: '通过率', prop: `head${e.ruleCode}questionCount` });
//                 }
//             });
//         } else {
//             item['levelCode'] = 1;
//             item.childrenRules.push({ lable: '总数', prop: `head${item.ruleCode}checkCount` });
//             item.childrenRules.push({ lable: '问题数', prop: `head${item.ruleCode}passRate` });
//             item.childrenRules.push({ lable: '通过率', prop: `head${item.ruleCode}questionCount` });
//         }
//     });
// }

// let checkIndices = processCheckIndices(a.checkIndices, a);
// let itemcode = processCheckItems(a.checkItems, a);
// mergeData(a.orgs, itemcode, checkIndices);
// let couvalue = {};
// let StatisticalMethod = processStatisticalMethod(b, couvalue);
// toHead(b);

// console.log(a.orgs, couvalue, b);

// {
//     name: '图数一致性',
//     child: [
//         { name: '图数一致性分项指标', prop: 'zipbfb' },
//         {
//             name: '有图无数',
//             id: '2',
//             child: [
//                 { name: '考核数', prop: 'zip' },
//                 { name: '问题数', prop: 'zip' },
//                 { name: '通过率', prop: 'zip' }
//             ]
//         },
//         {
//             name: '有数无图',
//             id: '2',
//             child: [
//                 { name: '考核数', prop: 'zip' },
//                 { name: '问题数', prop: 'zip' },
//                 { name: '通过率', prop: 'zip' }
//             ]
//         }
//     ]
// },
// {
//     name: '台账规范性',

//     child: [
//         {
//             name: '台账规范性分项指标',
//             prop: 'zipbfb',
//             id: '2',
//             child: [
//                 { name: '考核数', prop: 'zip' },
//                 { name: '问题数', prop: 'zip' },
//                 { name: '通过率', prop: 'zip' }
//             ]
//         },
//         {
//             name: '台账关键属性空值',
//             id: '2',
//             child: [
//                 { name: '考核数', prop: 'zip' },
//                 { name: '问题数', prop: 'zip' },
//                 { name: '通过率', prop: 'zip' }
//             ]
//         },
//         {
//             name: '台账关键属性码值错误',
//             id: '2',
//             child: [
//                 { name: '考核数', prop: 'zip' },
//                 { name: '问题数', prop: 'zip' },
//                 { name: '通过率', prop: 'zip' }
//             ]
//         }
//     ]
// },
// {
//     name: '拓扑连通性',
//     id: '2',
//     child: [
//         { name: '考核数', prop: 'zip' },
//         { name: '问题数', prop: 'zip' },
//         { name: '通过率', prop: 'zip' }
//     ]
// }

// let rule = {
//     code: 1000,
//     msg: '成功',
//     data: [
//         {
//             domainType: 2,
//             name: '输电数据质量总体情况',
//             displayOrder: 1
//         },
//         {
//             domainType: 1,
//             name: '变电数据质量总体情况',
//             displayOrder: 2
//         },
//         {
//             domainType: 3,
//             name: '配电数据质量总体情况',
//             displayOrder: 3
//         }
//     ]
// };

// let res = {
//     code: 1000,
//     msg: '成功',
//     data: {
//         orgs: [
//             {
//                 orgId: '766-40D7-ACF4-FEA945102112-02711',
//                 orgName: '国网北京电力',
//                 orgShortName: '北京',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 1
//             },
//             {
//                 orgId: '8a812897493378a001495675eff36611',
//                 orgName: '国网天津电力',
//                 orgShortName: '天津',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 2
//             },
//             {
//                 orgId: '13B9B47F1E483324E05338297A0A0595',
//                 orgName: '国网河北电力',
//                 orgShortName: '河北',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 3
//             },
//             {
//                 orgId: '1100F3DE20806FADE050007F01006CBE',
//                 orgName: '国网冀北电力',
//                 orgShortName: '冀北',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 4
//             },
//             {
//                 orgId: '057252DF34F345E6E050007F01007437',
//                 orgName: '国网山西电力',
//                 orgShortName: '山西',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 5
//             },
//             {
//                 orgId: '8a1ea5c64bdebad1014bdebc4cbf0001',
//                 orgName: '国网山东电力',
//                 orgShortName: '山东',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 6
//             },
//             {
//                 orgId: '8a812897493378a00149567740676661',
//                 orgName: '国网上海电力',
//                 orgShortName: '上海',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 7
//             },
//             {
//                 orgId: 'ff80808149f52e24014a039871840007',
//                 orgName: '国网江苏电力',
//                 orgShortName: '江苏',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 8
//             },
//             {
//                 orgId: '8a812897493378a001495677ad086663',
//                 orgName: '国网浙江电力',
//                 orgShortName: '浙江',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 9
//             },
//             {
//                 orgId: '8a0a8b8c4cf9f689014cf9f6b9b50004',
//                 orgName: '国网安徽电力',
//                 orgShortName: '安徽',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 10
//             },
//             {
//                 orgId: '8a0f688f46db11f00146db1246450004',
//                 orgName: '国网福建电力',
//                 orgShortName: '福建',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 11
//             },
//             {
//                 orgId: 'D4FA8CE2B4414C6FAD8B481A2595FF66',
//                 orgName: '国网湖北电力',
//                 orgShortName: '湖北',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 12
//             },
//             {
//                 orgId: '02DC9D994CE579E4E053661EDF0AFC25',
//                 orgName: '国网湖南电力',
//                 orgShortName: '湖南',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 13
//             },
//             {
//                 orgId: '16810251A342C6DCE050E60A50273290',
//                 orgName: '国网河南电力',
//                 orgShortName: '河南',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 14
//             },
//             {
//                 orgId: '8a812897493378a00149567a136566e1',
//                 orgName: '国网江西电力',
//                 orgShortName: '江西',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 15
//             },
//             {
//                 orgId: '16F37FCEBB150ED1E0530100007F2F45',
//                 orgName: '国网四川电力',
//                 orgShortName: '四川',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 16
//             },
//             {
//                 orgId: '8a3983714c26a51f014c26a56b9b0010',
//                 orgName: '国网重庆电力',
//                 orgShortName: '重庆',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 17
//             },
//             {
//                 orgId: '14383AB1ACC0422DE0541CC1DE1077D5',
//                 orgName: '国网辽宁电力',
//                 orgShortName: '辽宁',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 18
//             },
//             {
//                 orgId: '154D491A3882859AE050007F01003EAF',
//                 orgName: '国网吉林电力',
//                 orgShortName: '吉林',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 19
//             },
//             {
//                 orgId: 'ff8080814d339ab7014d79c329bf1972',
//                 orgName: '国网黑龙江电力',
//                 orgShortName: '黑龙江',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 20
//             },
//             {
//                 orgId: '137DD53354DB32BCE0532902040A338E',
//                 orgName: '国网蒙东电力',
//                 orgShortName: '蒙东',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 21
//             },
//             {
//                 orgId: '8a8128974cb84e02014d425ee86b6df0',
//                 orgName: '国网陕西电力',
//                 orgShortName: '陕西',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 22
//             },
//             {
//                 orgId: '008df5db70319f73e0508eoabd9b0002',
//                 orgName: '国网甘肃电力',
//                 orgShortName: '甘肃',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 23
//             },
//             {
//                 orgId: '17863C81FC9A0719E05347F3D70AAC91',
//                 orgName: '国网青海电力',
//                 orgShortName: '青海',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 24
//             },
//             {
//                 orgId: '232AF1D001B65527E055000000000001',
//                 orgName: '国网宁夏电力',
//                 orgShortName: '宁夏',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 25
//             },
//             {
//                 orgId: '766-40D7-ACF4-FEA945102112-02703',
//                 orgName: '国网新疆电力',
//                 orgShortName: '新疆',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 26
//             },
//             {
//                 orgId: '1C377F9A21E86DC8E0530212B60A02E4',
//                 orgName: '国网西藏电力',
//                 orgShortName: '西藏',
//                 orgType: 1,
//                 checkTime: '2023-10-19',
//                 pushTime: '2023-10-19',
//                 displayOrder: 27
//             }
//         ],
//         devicePassRates: [
//             {
//                 orgId: '766-40D7-ACF4-FEA945102112-02711',
//                 domainType: '1',
//                 deviceCount: 1,
//                 deviceCountCompare: 1,
//                 questionCount: 1,
//                 questionCountCompare: 1,
//                 passRate: 1,
//                 passRateCompare: 1
//             },
//             {
//                 orgId: '766-40D7-ACF4-FEA945102112-02711',
//                 domainType: '2',
//                 deviceCount: 1,
//                 deviceCountCompare: 1,
//                 questionCount: 1,
//                 questionCountCompare: 1,
//                 passRate: 1,
//                 passRateCompare: 1
//             },
//             {
//                 orgId: '766-40D7-ACF4-FEA945102112-02711',
//                 domainType: '3',
//                 deviceCount: 1,
//                 deviceCountCompare: 1,
//                 questionCount: 1,
//                 questionCountCompare: 1,
//                 passRate: 1,
//                 passRateCompare: 1
//             },
//             {
//                 orgId: '8a812897493378a001495675eff36611',
//                 domainType: '1',
//                 deviceCount: 1,
//                 deviceCountCompare: 1,
//                 questionCount: 1,
//                 questionCountCompare: 1,
//                 passRate: 1,
//                 passRateCompare: 1
//             }
//         ]
//     }
// };
// let couvalue = {};
// rule.data.forEach((e, i) => {
//     couvalue[`head${e.domainType}deviceCount`] = `head${e.domainType}deviceCountCompare`;
//     couvalue[`head${e.domainType}questionCount`] = `head${e.domainType}questionCountCompare`;
//     couvalue[`head${e.domainType}passRate`] = `head${e.domainType}passRateCompare`;
// });
// // 表头处理
// let tableHeads = rule.data.map((item) => {
//     return {
//         lable: item.name,
//         prop: item.domainType,
//         child: [
//             { lable: '总数', prop: `head${item.domainType}deviceCount` },
//             { lable: '问题数', prop: `head${item.domainType}questionCount` },
//             { lable: '通过率', prop: `head${item.domainType}passRate` }
//         ]
//     };
// });

// // 修改对象的键
// function modifiedObjKey(originalObject, type) {
//     const keyarr = ['deviceCount', 'deviceCountCompare', 'questionCount', 'questionCountCompare', 'passRate', 'passRateCompare'];
//     const modifiedObject = Object.entries(originalObject).reduce((acc, [key, value]) => {
//         const newKey = keyarr.includes(key) ? `${type}${key}` : key;
//         acc[newKey] = value;
//         return acc;
//     }, {});
//     return modifiedObject;
// }
// let resarr = [];
// let resdevicePassRates = res.data.devicePassRates;
// resdevicePassRates.forEach((item) => {
//     resarr.push(modifiedObjKey(item, `head${item.domainType}`));
// });
// //将数据按照组织机构名称进行合并
// // 将数据按照组织机构名称进行合并
// res.data.orgs.forEach((item) => {
//     let correspondingItem = resarr.find((item2) => item.orgId === item2.orgId);
//     if (correspondingItem) {
//         Object.assign(item, correspondingItem);
//     }
// });
// console.log(res.data.orgs);

// let data = {
//     code: 1000,
//     msg: '成功',
//     data: [
//         {
//             id: '12',
//             groupName: '防雷装置',
//             remark: '',
//             displayOrder: 12
//         },
//         {
//             id: '1',
//             groupName: '输电线路',
//             remark: null,
//             displayOrder: 1
//         },
//         {
//             id: '2',
//             groupName: '输电运行杆',
//             remark: null,
//             displayOrder: 2
//         },
//         {
//             id: '3',
//             groupName: '输电物理杆',
//             remark: null,
//             displayOrder: 3
//         },
//         {
//             id: '4',
//             groupName: '导线',
//             remark: '导线（导线、直流导线）',
//             displayOrder: 4
//         },
//         {
//             id: '5',
//             groupName: '档距段',
//             remark: '档距段（高压档距段、直流档距）',
//             displayOrder: 5
//         },
//         {
//             id: '6',
//             groupName: '电缆',
//             remark: '',
//             displayOrder: 6
//         },
//         {
//             id: '7',
//             groupName: '电缆段',
//             remark: '',
//             displayOrder: 7
//         },
//         {
//             id: '8',
//             groupName: '电缆终端',
//             remark: '',
//             displayOrder: 8
//         },
//         {
//             id: '9',
//             groupName: '电缆接头',
//             remark: '',
//             displayOrder: 9
//         },
//         {
//             id: '10',
//             groupName: '电缆分支箱',
//             remark: '',
//             displayOrder: 10
//         },
//         {
//             id: '11',
//             groupName: '电缆接地箱',
//             remark: '',
//             displayOrder: 11
//         }
//     ]
// };

// let list = {
//     code: 1000,
//     msg: '成功',
//     data: {
//         orgs: [
//             {
//                 orgId: '766-40D7-ACF4-FEA945102112-02711',
//                 orgName: '国网北京电力',
//                 orgShortName: '北京',
//                 orgType: 1,
//                 checkTime: '2023-10-27 01:00:00',
//                 pushTime: '2023-10-27 01:34:48',
//                 displayOrder: 1
//             },
//             {
//                 orgId: '8a812897493378a001495675eff36611',
//                 orgName: '国网天津电力',
//                 orgShortName: '天津',
//                 orgType: 1,
//                 checkTime: '2023-10-27 01:00:00',
//                 pushTime: '2023-10-27 01:34:48',
//                 displayOrder: 2
//             }
//         ],
//         devicePassRates: [
//             {
//                 orgId: '8a812897493378a001495675eff36611',
//                 groupId: 1,
//                 deviceCount: 1,
//                 deviceCountCompare: 1,
//                 questionCount: 1,
//                 questionCountCompare: 1,
//                 passRate: 1,
//                 passRateCompare: 1
//             }
//         ],
//         questionCounts: [
//             { groupId: 1, count: 2 },
//             { groupId: 2, count: 2 }
//         ]
//     }
// };

let data = [
    { a: 1, type: [1, 2] },
    { a: 2, type: [3, 3] }
];
let value = [1];
let vauelist = [];
value.forEach((item) => {
    let datalist = data.find((item2) => item2.a === item).type;
    vauelist = [...vauelist, ...datalist];
});
console.log(vauelist);
