<template>
  <div class="cov-number">
    <div class="content">
      <div class="time">截至北京时间 {{ covNumberData.modifyTime  | getTime }}</div>
      <ul class="wrap">
        <li>
          <span>较昨日 <i class="yesterday">{{ covNumberData.currentConfirmedIncr | number }}</i></span>
          <div class="strong">{{ covNumberData.currentConfirmedCount | division }}</div>
          <strong>现存确诊</strong>
        </li>
        <li>
          <span>较昨日 <i class="yesterday">{{ covNumberData.suspectedIncr | number }}</i></span>
          <div class="strong">{{ covNumberData.suspectedCount | division }}</div>
          <strong>境外输入</strong>
        </li>
        <li>
          <span>较昨日 <i class="yesterday">{{ covNumberData.seriousIncr | number }}</i></span>
          <div class="strong">{{ covNumberData.seriousCount | division }}</div>
          <strong>现存无症状</strong>
        </li>
        <li>
          <span>较昨日 <i class="yesterday">{{ covNumberData.confirmedIncr | number }}</i></span>
          <div class="strong">{{ covNumberData.confirmedCount | division }}</div>
          <strong>累计确诊</strong>
        </li>
        <li>
          <span>较昨日 <i class="yesterday">{{ covNumberData.deadIncr }}</i></span>
          <div class="strong">{{ covNumberData.deadCount | division }}</div>
          <strong>累计死亡</strong>
        </li>
        <li>
          <span>较昨日 <i class="yesterday">{{ covNumberData.curedIncr | number }}</i></span>
          <div class="strong">{{ covNumberData.curedCount | division }}</div>
          <strong>累计治愈</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CovNumber",
  props: ['covNumberData'],
  filters: {
    // 新增增加 +
    number(val) {
      return val > 0 ? '+' + val : val;
    },
    // 处理时间
    getTime(time) {
      let date = new Date(time);
      return date.toLocaleString('chinese', {hour12: false})
    },
    // 每三位加逗号
    division(val) {
      if (val == undefined) return '';
      return val.toLocaleString();
    }
  }
}
</script>

<style lang="less" scoped>
.cov-number {
  background: #f5f5f5;
  padding-top: 0.3rem;

  .content {
    background: #fff;
    height: 2rem;
    border-radius: 0.2rem 0.2rem 0 0;
    padding: 0.3rem;
    height: 100%;

    .time {
      color: #666;
      margin-bottom: 0.2rem;
    }

    .wrap {
      display: flex;
      flex-wrap: wrap;
      padding-top: 0.2rem;
      border-radius: 0.1rem;
      box-shadow: 0 0 3px 2px rgba(194, 192, 192, .2);

      li {
        width: 33.333333%;
        text-align: center;
        margin-bottom: 0.2rem;
        color: #666;

        strong {
          color: #333;
        }
      }

      .strong {
        font-weight: bold;
      }

      li:nth-child(1) .strong,
      li:nth-child(1) .yesterday {
        color: rgb(247, 76, 49);
      }

      li:nth-child(2) .strong,
      li:nth-child(2) .yesterday {
        color: rgb(247, 130, 7);
      }

      li:nth-child(3) .strong,
      li:nth-child(3) .yesterday {
        color: rgb(162, 90, 78);
      }

      li:nth-child(4) .strong,
      li:nth-child(4) .yesterday {
        color: rgb(174, 33, 44);
      }

      li:nth-child(5) .strong,
      li:nth-child(5) .yesterday {
        color: rgb(93, 112, 146);
      }

      li:nth-child(6) .strong,
      li:nth-child(6) .yesterday {
        color: rgb(40, 183, 163);
      }
      i {
        font-style:normal
      }
    }
  }
}
</style>
