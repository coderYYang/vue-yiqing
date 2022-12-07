<template>
  <div class="home">
    <!--    <button class="btn" @click="$router.push('/selectCity')">{{city}}</button>-->
    <!-- 疫情图片 -->
    <img src="../../assets/images/kv.5d3a3a1d.png" style="width: 100%;" alt="">
    <!-- 疫情信息 -->
    <CovInfo :covInfoDate="covInfoData" :news="news"/>
    <!-- 导航 -->
    <Navigation/>
    <!-- 数据统计 -->
    <CovNumber :covNumberData="covNumberData"/>
    <!-- 中国疫情地图 -->
    <ChinaMap/>
    <!-- 世界疫情地图 -->
    <WorldMap/>
    <!-- 轮播 -->
    <VueSwiper/>
  </div>
</template>

<script>
import CovInfo from "./children/CovInfo"
import Navigation from "./children/Navigation"
import CovNumber from "./children/CovNumber"
import ChinaMap from "./children/ChinaMap.vue"
import WorldMap from "./children/WorldMap"
import VueSwiper from '../../components/VueSwiper'
import { CovInfoData } from '../../api/api'

export default {
  name: "Home",
  data() {
    return {
      covInfoData: {},
      news: [],
      covNumberData: {},
      city: '国内疫情'
    }
  },
  components: {WorldMap, CovInfo, Navigation, CovNumber, ChinaMap, VueSwiper},
  created() {
    let city = localStorage.getItem('city');
    if (city) {
      this.city = city + '疫情';
    }
    this.getGetCovInfo();
  },
  methods: {
    // 请求疫情信息
    getGetCovInfo() {
      CovInfoData().then(res => {
        if (res.status === 200) {
          // 病毒介绍信息
          this.covInfoData = {
            notes: res.data.notes,
            remarks: res.data.remarks
          }
          // 疫情热点信息
          this.news = res.data.timelines;
          // 全球疫情统计数据
          let data = res.data.domesticStatistics
          this.covNumberData = {
            currentConfirmedCount: data.currentConfirmedCount, // 现存确诊
            confirmedCount: data.confirmedCount, // 累计确诊
            suspectedCount: data.suspectedCount, // 累计境外输入
            curedCount: data.curedCount, // 累计治愈
            deadCount: data.deadCount, // 累计死亡
            seriousCount: data.seriousCount, // 现存无症状感染者
            suspectedIncr: data.suspectedIncr, // 新增境外输入
            currentConfirmedIncr: data.currentConfirmedIncr, // 相比昨日现存确诊
            confirmedIncr: data.confirmedIncr, // 相比昨日累计确诊
            curedIncr: data.curedIncr, // 相比昨日新增治愈
            deadIncr: data.deadIncr, // 相比昨日新增死亡
            // seriousIncr: data.seriousIncr, // 相比昨日现存无症状
            seriousIncr: '字段缺失', // 相比昨日现存无症状
            modifyTime: res.data.modifyTime
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
