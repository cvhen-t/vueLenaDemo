/*
 * @Author: cc ‘2327506380@qq.com’
 * @Date: 2023-01-10 18:07:15
 * @LastEditors: cc ‘2327506380@qq.com’
 * @LastEditTime: 2023-01-10 18:07:27
 * @FilePath: \qingKunVue3\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
const packageName = 'touristflow-default';
// const packageName = require('./package.json').name;
const port = 9002;
const prod = process.env.NODE_ENV === 'production';

const publicPath = prod ? '/touristflow-app/' : '/';
module.exports = {
    publicPath: publicPath,
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,
    filenameHashing: true,
    lintOnSave: false,
    runtimeCompiler: true,
    devServer: {
        port: port,
        hot: true,
        disableHostCheck: true,
        overlay: {
            warnings: false,
            errors: true
        },
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: {
            //配置跨域
            '/touristflow': {
                target: 'http://localhost:30080/touristflow', //这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true, //允许跨域
                pathRewrite: {
                    '^/touristflow': '' //请求的时候使用这个api就可以
                }
            }
        },
        headers: {
            'Access-Control-Allow-Origin': '*' // 重要
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "public/common.scss";`
            }
        }
    },
    // 自定义webpack配置
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        output: {
            // 把子应用打包成 umd 库格式
            library: `${packageName}`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${packageName}`
        }
    }
};
