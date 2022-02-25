<template>
  <baidu-map
    :center="center"
    :zoom="zoom"
    @ready="handler"
    style="height: 100%"
    @click="getClickInfo"
    :scroll-wheel-zoom="true"
  ></baidu-map>
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
    };
  },
  mounted() {},
  methods: {
    handler({ BMap, map }) {
      this.map = map;
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
  },
};
</script>

<style></style>
