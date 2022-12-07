<template>
  <div class="citys">
    <button class="btn" @click="$router.push('/')">返回疫情动态</button>
    <div class="title">城市名称：<strong>{{$route.params.citysName}}</strong></div>
    <div id="city" style="width: 100%;height: 400px;"></div>
  </div>
</template>

<script>
import { ChinaCitysMap } from "../api/api";

export default {
  name: "Citys",
  mounted() {
    let params = {
      provinceNames: this.$route.params.citysName
    }
    ChinaCitysMap(params).then(res => {
      let arr = [];
      let name = this.$route.params.citysName;
      if (res.status === 200) {
        res.data.forEach(val => {
          let obj = {}
          if (name == '北京' || name == '上海') {
            obj.name = val.cityName;
          } else {
            obj.name = val.cityName + '市';
          }
          obj.value = val.confirmedCount;
          arr.push(obj);
        })
        this.$myChart.cityMap('city',this.$route.params.citysName,arr)
      }
    })
  }
}
</script>

<style scoped>
.title {
  border-left: 0.1rem solid rgba(20, 49, 128);
  padding-left: 0.1rem;
  margin: 0.2rem;
  font-size: 20px;
}
</style>
