import request from '@/axios/index';
// 获取网省容器数据
export const putProjectToServe = (formData) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };
    return request({
        url: 'http://121.4.20.238:20229/uploadFolder',
        method: 'post',
        formData,
        config
    });
};

// 查询手动校核列表
export const manualCheckList = (data) => {
    return request({
        url: '/pms-amap-check-service/DataVerificationProvinceController/manualCheckList',
        method: 'post',
        data
    });
};

// 查询手动校核列表
export const getGeoJson = (code) => {
    return request({
        url: `https://geo.datav.aliyun.com/areas_v3/bound/${code}_full.json`,
        method: 'get'
    });
};
