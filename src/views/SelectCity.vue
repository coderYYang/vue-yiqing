<template>
  <div class="select-city">
    <h2 class="city">城市选择</h2>
    <button class="btn" @click="$router.push('/')">返回疫情动态</button>
    <div>
      <van-index-bar :index-list="indexList">
        <template v-for="(item, name) in cityList">
          <van-index-anchor :index="name" :key="name"/>
          <van-cell :title="ele.name" v-for="ele in item" :key="ele.id" @click="goCity"></van-cell>
        </template>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SelectCity",
  data() {
    return {
      cityList: {},
      indexList: []
    }
  },
  created() {
    this.getChinaCity();
  },
  methods: {
    // 获取城市名字信息
    getChinaCity() {
      axios({
        method: 'get',
        url: '/foo/aj/getcitycode'
      }).then(res => {
        if (res.data.errno === 0) {
          this.cityList = res.data.result.citylist;
          this.indexList = Object.keys(res.data.result.citylist);
        }
      })
    },
    // 前往指定城市
    goCity(e) {
      localStorage.setItem('city', e.target.innerText);
      this.$router.go(-1);
      // this.$router.push('/');
      // document.documentElement.scrollTop = 0;
    }
  }
}
</script>

<style lang="less" scoped>
.select-city {
  background: #f5f5f5;
  .city {
    margin: 0 0 0 10px;
    padding-top: 10px;
  }
}

</style>
