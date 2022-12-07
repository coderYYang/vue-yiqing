<template>
  <div class="prevention">
    <button class="btn" @click="$router.push('/')">返回疫情动态</button>
    <img src="../assets/images/prevention/title.png" alt="title">
    <van-tabs v-model="active" animated swipeable title-active-color="#1890ff" color="#1890ff">
      <van-tab :title="item.categoryName" v-for="(item, index) in goodsGuides" :key="index">
        <div class="prompt">
          <span class="icon">——</span>
          <span class="text">{{item.title}}</span>
          <span class="icon">——</span>
        </div>
        <img :src="itemImg" :alt="item.categoryName" v-for="(itemImg, indexImg) in item.contentImgUrls" :key="indexImg">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import {CovInfoData} from '../api/api'
export default {
  name: "Prevention",
  data() {
    return {
      active: 0,
      goodsGuides: []
    }
  },
  created() {
    this.getCovInfoData();
  },
  methods: {
    getCovInfoData() {
      CovInfoData().then(res => {
        if (res.status === 200) {
          this.goodsGuides = res.data.goodsGuides
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.prevention {
  position: relative;

  .prompt {
    margin: 10px;
    font-size: 20px;
    text-align: center;
    .icon {
      color: #999;
    }
    .text {
      padding: 0 15px;
    }
  }

  img {
    width: 100%;
  }
}
</style>
