<template>
  <div class="china-map">
    <div class="map">国内疫情地图</div>
    <van-tabs v-model="active" animated swipeable title-active-color="#1890ff" color="#1890ff" @change="isChange">
      <van-tab title="累计确诊">
        <!-- 累计 -->
        <div id="main" style="width: 100%;height: 400px;"></div>
      </van-tab>
      <van-tab title="现存确诊">
        <!-- 现存 -->
        <div id="now" style="width: 100%;height: 400px;"></div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ChinaMap } from '../../../api/api'

export default {
  name: "ChinaMap",
  data() {
    return {
      active: 0,
      nowArr: []
    }
  },
  mounted() {
    ChinaMap().then(res => {
      if (res.status === 200) {
        let citys = res.data;
        let arr = [];
        let nowArr = [];
        citys.forEach(val => {
          let obj = {};
          obj.name = val.provinceName;
          obj.value = val.confirmedCount; // 累计确诊
          arr.push(obj);
          let now = {};
          now.name = val.provinceName;
          now.value = val.currentConfirmedCount; // 现存确诊
          nowArr.push(now);
        })
        this.nowArr = nowArr;
        this.$nextTick(() => {
          this.$myChart.chinaMap('main', arr);
        })
      }
    })
  },
  methods: {
    isChange(val) {
      if (val === 1) {
        this.$nextTick(() => {
          this.$myChart.chinaMap('now', this.nowArr);
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
#main, #now {
  background: #f5f5f5;
}
</style>
