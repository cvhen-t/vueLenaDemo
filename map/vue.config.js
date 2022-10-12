/*
 * @Author: Yo yo.lu@foxmail.com
 * @Date: 2022-08-22 10:14:32
 * @LastEditors: Yo yo.lu@foxmail.com
 * @LastEditTime: 2022-10-12 16:36:34
 * @FilePath: \map\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
};
