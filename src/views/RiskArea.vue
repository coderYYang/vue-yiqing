<template>
  <div class="risk-area">
    <img src="../assets/images/riskaArea.png" style="width: 100%;" alt="riskaArea">
    <button class="btn" @click="$router.push('/')">返回疫情动态</button>
    <div class="content">
      <h3 class="title">全国风险地区汇总 <span style="color:#f00; font-size: 20px">{{number}}个</span></h3>
      <template v-if="high.length > 0">
        <div class="high">
          <img src="../assets/images/high.png" style="width: 20px;height: 20px;" alt="high">
          <span>高风险区 {{ high.length }} 个</span>
        </div>
        <ul>
          <li class="info" v-for="(item, index) in high" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
      <template v-if="mid.length > 0">
        <div class="mid">
          <img src="../assets/images/mid.png" style="width: 20px;height: 20px;"  alt="mid">
          <span>中风险区 {{ mid.length }} 个</span>
        </div>
        <ul>
          <li class="info" v-for="(item, index) in mid" :key="index">
            {{ item}}
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RiskArea",
  data() {
    return {
      high: [],
      mid: []
    }
  },
  computed:  {
    number() {
      return this.high.length + this.mid.length;
    }
  },
  created() {
    this.getGetCovInfo();
  },
  methods: {
    // 查询风险疫情地区
    getGetCovInfo() {
      axios({
        method: 'get',
        url: 'http://api.tianapi.com/ncov/index',
        params: {
          key: '9c8dcbf15fc9f171eb38ed923ceeb540'
        }
      }).then(res => {
        if (res.data.code === 200) {
          this.high = res.data.newslist[0].riskarea.high;
          this.mid = res.data.newslist[0].riskarea.mid;
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.risk-area {
  position: relative;
  .content {
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    padding: 10px;
    background: #fff;
    border-radius: 10px;

    .high, .mid {
      display: flex;
      align-items: center;
      font-size: 0.3rem;
      color: #333;
      margin: 10px 0;

      img {
        width: 20px;
        height: 20px;
      }
    }
    .info {
      line-height: 30px;
      background: #eee;
      margin: 8px 0;
      padding: 0 4px;
      border-radius: 4px;
      color: #333;
    }
  }
}
</style>
