<template>
  <!-- 病毒信息 -->
  <div class="cov-info">
    <div class="cov">
      <div class="title">病毒信息</div>
      <p v-for="(item, index) in covInfoDate.notes">{{ item }}</p>
      <p v-for="(item, index) in covInfoDate.remarks">{{ item }}</p>
    </div>
    <div class="hot">
      <div class="title">
        <img src="../../../assets/images/hot.png" style="width: 60px;" alt="hot">
      </div>
      <ul class="list">
        <li class="list-item" v-for="item in news" :key="item.pubDate">
          <div class="new">
            <span>最新</span>
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CovInfo",
  props: {
    covInfoDate: {
      type: Object,
      default() {
        return {}
      }
    },
    news: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.cov-info {
  padding: 0.2rem;
  .more {
    color: #4169e2;
    align-items: center;
    display: flex;
  }

  p {
    line-height: 0.5rem;
    color: #666;
  }

  .font-img {
    width: 15px;
  }

  .list {
    .list-item {
      padding-bottom: 15px;

      .new {
        font-size: 0.32rem;
        word-break: break-all;

        span {
          background-color: #f74c31;
          color: #fff;
          border-radius: 4px;
          padding: 1px;

        }
      }
    }
  }
}
</style>
