<template>
  <el-container style="height: 100%">
    <div class="isShow">
      <!-- 导航部分 -->
      <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        router
        active-text-color="#5f8bd3"
      >
        <!-- <div  class="Navphoto">
        <img class="topImg" v-if="!isCollapse" src="./assets/backjpg.jpeg" alt="">
        <img v-else   alt="" style="width: 63px;">
      </div> -->
        <div v-for="item in routes" :key="item.indexnum">
          <el-submenu v-if="!!item.name" :index="item.path">
            <template slot="title"
              ><i :class="item.icon" class="iconNav2"></i
              >{{ isCollapse ? "" : item.name }}
            </template>
            <div v-if="!!item.children">
              <el-menu-item-group>
                <el-menu-item
                  v-for="itemc in item.children"
                  :key="itemc.indexnum"
                  :index="itemc.path"
                >
                  <i class="el-icon-guide iconNav3"></i>
                  {{ itemc.name }}</el-menu-item
                >
              </el-menu-item-group>
            </div>
          </el-submenu>
        </div>
      </el-menu>
      <!-- </el-aside> -->
    </div>

    <el-container>
      <!-- 顶部栏 -->

      <el-header style="text-align: right; font-size: 14px">
        <div style="position: absolute; width: 600px; height: 30px">
          <div @click="openNav()" class="openIcon">
            <i v-if="!isCollapse" class="el-icon-s-fold iconNav"></i>
            <i v-else class="el-icon-s-unfold iconNav"></i>
          </div>
        </div>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <!-- 内容 -->
      <el-main>
        <div class="mainstyle">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { routes } from "./route/route";
export default {
  name: "App",
  components: {},
  data() {
    return {
      routes,
      isCollapse: false,
    };
  },
  created() {
    // console.log(this.routes);
  },
  methods: {
    openNav() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style>
html,body{
  height: 100%;
}
.isShow {
  z-index: 1000;
  box-shadow: 3px 0px 7px #888888;
  background-image: url(../src/assets/backjpg.jpeg);
  height: 80% !important;
}
.el-menu-vertical-demo{

  
}

.el-header {
  background-color: white;
  color: #333;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
  /* box-shadow: 0px 0px 9px #888888 !important; */

  /* background-image: url(../src/assets/jpg.png); */
}
.el-menu {
  color: rgb(51, 51, 51);
  font-weight: 600;
  min-height: 0px !important;
  opacity: 0.93 !important;
}

.el-aside {
  color: white;
}
.Navphoto {
  padding-left: 22px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.mainstyle {
  height: 100%;
  padding: 15px;
  background-color: white;
  border: 0px;
}
.el-main {
  margin: 0px !important;
  padding: 0px !important;
  height: 100%;
  background-color: white !important;
}
.openIcon {
  text-align: center;
  width: 50px;
  height: 50px;
  position: relative;
  left: -21px;
  top: 2px;
  border-radius: 50%;
}

.iconNav {
  color: #5f8bd3;
  font-size: 23px !important;
  line-height: 50px;
}
.iconNav2 {
  padding-right: 5px;
  color: #5f8bd3 !important;
  font-size: 22px !important;
}
.iconNav3 {
  color: #5f8bd3 !important;
  font-size: 8px !important;
}

.topImg {
  width: 139px;
  height: 150px;
}
</style> 



