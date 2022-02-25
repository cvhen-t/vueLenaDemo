<template>
  <baidu-map
    :center="center"
    :zoom="zoom"
    @ready="handler"
    style="height: 100%; width: 60%"
    @click="getClickInfo"
    :scroll-wheel-zoom="true"
  >
  <!-- 操作 -->
  <div>
      <button @click="getMycity('南昌')">获取位置信息</button>
  </div>
  </baidu-map>

  

<!-- 操作 -->

  
</template>

<script>
export default {
  data() {
    return {
      // 地图中心的
      center: { lng: 109.45744048529967, lat: 36.49771311230842 },
      // 地图缩放级别/
      zoom: 13,
      map: "",
      BMap:""
    };
  },
  mounted() {



  },
  methods: {
    handler({ BMap, map }) {
      window.map = map;
      window.BMap = BMap;
      const point = new BMap.Point(109.49926175379778, 36.60449676862417);
      map.centerAndZoom(point, 13);
      const marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      const circle = new BMap.Circle(point, 6, {
        strokeColor: "Red",
        strokeWeight: 6,
        strokeOpacity: 1,
        Color: "Red",
        fillColor: "#f03",
      });
      map.addOverlay(circle);
    },
    getClickInfo(e) {
      console.log(e.point.lng);
      console.log(e.point.lat);
      var marker = new BMap.Marker(e.point); // 创建标注
      this.map.addOverlay(marker); // 将标注添加到地图中
      // 修改地图中心点
      // this.center.lng = e.point.lng;
      // this.center.lat = e.point.lat;
    },

    getMycity(){
        function myFun(result){
        var cityName =  result.name;;
        map.setCenter(cityName);
        alert("当前定位城市:" + cityName);
    }
      const myCity = new BMap.LocalCity();  
      myCity.get(myFun); 
    }
  },
};
</script>

<style></style>
