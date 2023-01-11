import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
// const app = createApp(App);
// app.use(router);
// app.mount('#app');
// import './public-path'; // 加载对乾坤public-path 的配置
// import { createApp } from 'vue';
// import App from './App.vue';
// import store from './store';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
// import '../public/common.scss';
// import '@/vendor/Blob.js';
// import '@/vendor/Export2Excel.js';
// import router from './router';
// import VueCookies from 'vue-cookies';

const isQiankun = window.__POWERED_BY_QIANKUN__;
//用于保存vue实例
let instance = null;
console.log('是否isQiankun：' + isQiankun);
console.log(
    ' CommonJS模块化:' + (typeof exports === 'object' && typeof module === 'object') ||
        (typeof define === 'function' && define.amd) ||
        typeof exports === 'object'
);

function render(props = {}) {
    const { container } = props;
    instance = createApp(App);
    // instance.provide('$cookies', VueCookies);
    instance
        // .use(store)
        .use(router)
        // .use(ElementPlus)
        .mount(container ? container.querySelector('#app') : '#app');
}

export async function bootstrap() {
    console.log('[客流] vue app bootstraped');
}

export async function mount(props) {
    console.log('[客流] props from main framework', props);
    // storeTest(props);
    render(props);
}

export async function unmount() {
    console.log('[客流] unmount');
    instance.unmount();
    instance._container.innerHTML = '';
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
    console.log('update props', props);
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}
// function storeTest(props) {
//     props.onGlobalStateChange &&
//         props.onGlobalStateChange((value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev), true);
//     props.setGlobalState &&
//         props.setGlobalState({
//             ignore: props.name,
//             user: {
//                 name: props.name
//             }
//         });
// }
