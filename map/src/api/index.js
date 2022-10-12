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
