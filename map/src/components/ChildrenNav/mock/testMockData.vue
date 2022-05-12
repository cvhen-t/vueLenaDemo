<template>
  <div>
       <button @click="getData()">获取数据</button>
       
       <router-view></router-view>

  </div>
</template>


<script>
import axios from "axios"; // 引入axios
export default {
  data() {
    return {
      test: "1232131",
    };
  },

  methods: {
    getData() {
      axios.get("/user/list").then((res) => {
        console.log(res);
      });
    },
//数组深拷贝
    deepClone(obj) {
      var newObj = obj.constructor === Array ? [] : {};
      if (typeof obj !== "object") {
        return;
      } else {
        for (var i in obj) {
          newObj[i] =
            typeof obj[i] === "object" ? this.deepClone(obj[i]) : obj[i];
        }
      }
      return newObj;
    },

    // 对象深拷贝
    deepCloneObj(obj) {
      var newObj = obj.constructor === Array ? [] : {};
      if (typeof obj !== "object") {
        return;
      } else {
        for (var i in obj) {
          newObj[i] =
            typeof obj[i] === "object" ? this.deepCloneObj(obj[i]) : obj[i];
        }
      }
      return newObj;
    },

    // 数组深拷贝
    deepCloneArray(obj) {
      var newObj = obj.constructor === Array ? [] : {};
      if (typeof obj !== "object") {
        return;
      } else {
        for (var i in obj) {
          newObj[i] =
            typeof obj[i] === "object" ? this.deepCloneArray(obj[i]) : obj[i];
        }
      }
      return newObj;
    },

    datatoJson(data) {
      return JSON.stringify(data);
    },

  
  
  },
};
</script>

<style>
</style>    