<template>
  <!-- 2022出行防疫政策指南 -->
  <div class="travel">
    <div class="header">
      <div class="title">疫情期间出行防疫政策</div>
      <button class="btn" @click="$router.push('/')">返回疫情动态</button>
    </div>
    <!-- 出发城市 -->
    <van-field v-model="goCity" is-link readonly label="出发城市" placeholder="请选择出发城市" @click="goShow = true"/>
    <van-popup v-model="goShow" round position="bottom">
      <van-cascader v-model="goValue" title="请选择出发城市" :options="options" @close="goShow = false"
                    @finish="isGoFinish"/>
    </van-popup>
    <!-- 到达城市 -->
    <van-field v-model="toCity" is-link readonly label="到达城市" placeholder="请选择到达城市" @click="toShow = true"/>
    <van-popup v-model="toShow" round position="bottom">
      <van-cascader v-model="toValue" title="请选择到达城市" :options="options" @close="toShow = false"
                    @finish="isToFinish"/>
    </van-popup>
    <!-- 搜索按钮 -->
    <div class="search">
      <van-button type="info" block @click="isSearch">查询政策</van-button>
    </div>
    <!-- 政策查询结果 -->
    <div class="content" v-show="showFromTo">
      <div class="title">出发城市：{{ fromInfo.province_name }} - {{ fromInfo.city_name }}</div>
      <div style="margin: 0 30px">
        <div style="color:#f00; font-size: 18px">外出政策：</div>
        {{ fromInfo.low_in_desc }}
      </div>
      <div style="margin: 0 30px">
        <div style="color:#f00; font-size: 18px">进入政策：</div>
        {{ fromInfo.out_desc }}
      </div>
      <div class="title">到达城市：{{ toInfo.province_name }} - {{ toInfo.city_name }}</div>
      <div style="margin: 0 30px">
        <div style="color:#f00; font-size: 18px">外出政策：</div>
        {{ toInfo.low_in_desc }}
      </div>
      <div style="margin: 0 30px">
        <div style="color:#f00; font-size: 18px">进入政策：</div>
        {{ toInfo.out_desc }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Travel",
  data() {
    return {
      goShow: false,
      toShow: false,
      goCity: '',
      toCity: '',
      goValue: '',
      toValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [],
      from: '',
      to: '',
      fromInfo: {},
      toInfo: {},
      showFromTo: false
    }
  },
  created() {
    this.getTravelData();
  },
  methods: {
    // 出发的城市
    isGoFinish(val) {
      this.goShow = false;
      this.from = val.value;
      this.goCity = val.selectedOptions.map((option) => option.text).join('/');
    },
    // 到达的城市
    isToFinish(val) {
      this.toShow = false;
      this.to = val.value;
      this.toCity = val.selectedOptions.map((option) => option.text).join('/');
    },
    // 获取城市数据
    getTravelData() {
      axios({
        method: 'get',
        url: '/api/springTravel/citys',
        params: {
          key: '41e2880d0818915c7b11a5e73a6c1f34'
        }
      }).then(res => {
        if (res.data.error_code === 0) {
          let result = res.data.result;
          let arr = []
          result.forEach(val => {
            let obj = {};
            obj.text = val.province;
            obj.value = val.province_id;
            obj.children = []; // 二级区域
            val.citys.forEach(item => {
              let child = {};
              child.text = item.city;
              child.value = item.city_id;
              obj.children.push(child);
            })
            arr.push(obj);
          })
          this.options = arr;
        }
      })
    },
    // 查询
    isSearch() {
      axios({
        method: 'get',
        url: '/api/springTravel/query',
        params: {
          key: '41e2880d0818915c7b11a5e73a6c1f34',
          from: this.from,
          to: this.to
        }
      }).then(res => {
        this.showFromTo = true
        if (res.data.error_code === 0) {
          this.fromInfo = res.data.result.from_info;
          this.toInfo = res.data.result.to_info;
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>
.travel {
  padding: 10px;
}

.header {
  height: 45px;
}

.search {
  margin: 0.2rem;
}
</style>
