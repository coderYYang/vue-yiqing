<template>
  <div class="world-map">
    <div class="map">世界疫情地图</div>
    <div id="world" style="width: 100%;height: 400px;"></div>
  </div>
</template>

<script>
import { WorldMap } from "../../../api/api";

export default {
  name: "WorldMap",
  mounted() {
    WorldMap().then(res => {
      if (res.status === 200) {
        let world = res.data;
        let arr = [];
        world.forEach(val => {
          let obj = {};
          obj.name = val.countryName;
          obj.value = val.confirmedCount; // 全球
          arr.push(obj);
        })
        this.$myChart.worldMap('world', arr);
      }
    })
  }
}
</script>

<style lang="less" scoped>
#world {
  background: #f5f5f5;
}

.title {
  border-left: 0.1rem solid rgba(20, 49, 128);
  padding-left: 0.1rem;
  margin: 0.2rem;
}
</style>
