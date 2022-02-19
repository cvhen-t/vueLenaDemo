<template>
  <div>
       <button @click="getData()">获取数据</button>
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
  },
};
</script>

<style>
</style>    