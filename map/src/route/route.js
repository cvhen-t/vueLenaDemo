import VueRouter from "vue-router"

export const routes = [
    { path: '*', redirect: '/HellWord/hellPage' } ,
    {
        path: '/HellWord',
        name:'首页',
        indexnum:'1',
        icon:'el-icon-s-data',
        component: ()=>import("@/components/Navcomponents/HelloWorld"),
        children: [
          {
            path: '/HellWord/hellPage',
            name:'使用说明',
            indexnum:'1-1',
            component: ()=>import("../components/ChildrenNav/HellWord/hellPage.vue"),
          },
        ],
      },
      {
        path: '/MAP01',
        name:'地图',
        indexnum:'2',
        icon:'el-icon-picture',
        component: ()=>import("../components/Navcomponents/MAP01.vue"),
        children: [
          {
            path: '/HellWord/mapTest',
            name:'百度地图',
            indexnum:'2-1',
            component: ()=>import("../components/ChildrenNav/MAP01/mapTest.vue"),
          },
        ],
      },
      {
        path: '/mock',
        name:'数据部分',
        indexnum:'3',
        icon:'el-icon-upload',
        component: ()=>import("../components/Navcomponents/mock.vue"),
        children: [
          {
            path: '/mock/testMockData',
            name:'mock获取数据',
            indexnum:'3-1',
            component: ()=>import("../components/ChildrenNav/mock/testMockData.vue"),
            // children:[
            //   {
            //     path: 'a',
            //     name:'mock获取数据',
            //     indexnum:'3-1',
            //     component: ()=>import("../components/ChildrenNav/mock/testMockData.vue"),
               
            //   },
            // ]
          },
          {
            path: '/mock/Arrfun',
            name:'数组方法',
            indexnum:'3-2',
            component: ()=>import("../components/ChildrenNav/mock/Arrfun.vue"),
          },
          {
            path: '/mock/codeedit',
            name:'在线编辑器',
            indexnum:'3-3',
            component: ()=>import("../components/ChildrenNav/mock/codeedit.vue"),
          },
        ],
      },
      {
        path: '/Vuelearn',
        name:'组件案例',
        indexnum:'4',
        icon:'el-icon-menu',
        component: ()=>import("../components/Navcomponents/vueLean.vue"),
        children: [
          {
            path: '/Vuelearn/passdata',
            name:'组件传参',
            indexnum:'4-1',
            component: ()=>import("../components/ChildrenNav/vueLean/passdata.vue"),
          },
          {
            path: '/Vuelearn/Packcomponent',
            name:'可编辑表格',
            indexnum:'4-2',
            component:()=>import("../components/ChildrenNav/vueLean/Packcomponent.vue"),
          },
          {
            path: '/Vuelearn/checkFrom',
            name:'表单校验',
            indexnum:'4-3',
            component: ()=>import("../components/ChildrenNav/vueLean/checkFrom.vue"),
          },
          {
            path: '/Vuelearn/treeSelect',
            name:'树形下拉',
            indexnum:'4-4',
            component: ()=>import("../components/ChildrenNav/vueLean/treeSelect.vue"),
          },
        ],
      },  
  ]
  
  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

  export  default router
