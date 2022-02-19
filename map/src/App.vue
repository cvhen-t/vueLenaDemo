<template>
  <el-container style="height: 900px; ">
    <div class="isShow">
      <!-- 导航部分 -->
      <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
        <!-- <div  class="Navphoto">
        <img v-if="!isCollapse" src="./assets/photo.png" alt="">
        <img v-else  src="./assets/photo.png" alt="" style="width: 63px;">
      </div> -->

 
        <el-submenu
          v-for="item in routes"
          :key="item.indexnum"
          :index="item.indexnum"
        >
          <template slot="title"
            ><i :class="item.icon " class="iconNav2"></i
            >{{ isCollapse ? "" : item.name }}</template
          >
          <el-menu-item-group>
            <div v-if="!!item.children">
            
              <el-menu-item
                v-for="(itemc, index) in item.children"
                :key="index"
                :index="itemc.indexnum"
                @click="goroute(itemc.path)"
                >
                  <i class="el-icon-guide   iconNav3" ></i>
                {{ itemc.name }}</el-menu-item
              >
            </div>
          </el-menu-item-group>
        </el-submenu>
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
    goroute(path) {
      if (path != this.$route.path) {
        this.$router.push({
          path,
          // query: {
          //   id: 1,
          // },
        });
      }
    },
    openNav() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style>
.isShow {
  z-index: 1000;
  box-shadow: 3px 0px 7px #888888;
}

.el-header {
  background-color: white;
  color: #333;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
}
.el-menu{
  color: rgb(51, 51, 51);
  font-weight: 600;
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
  border: 0px ;
}
.el-main {
  margin: 0px !important;
  padding: 0px !important;
  height: 100%;
  background-color: #ddd !important;
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
.iconNav2{
  padding-right: 5px;
  color: #5f8bd3 !important;
  font-size: 22px !important;

}
.iconNav3{
  color: #5f8bd3 !important;
  font-size:8px !important;

}
</style> 



