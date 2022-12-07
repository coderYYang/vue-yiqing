<template>
  <div class="navigation">
    <div class="navigation-item" @click="$router.push('/riskArea')">
      <img src="../../../assets/images/navigation/1.png" alt="免费问诊">
      <div class="text">风险地区</div>
    </div>
    <div class="navigation-item" @click="$router.push('/hesuan')">
      <img src="../../../assets/images/navigation/2.png" alt="核酸检测">
      <div class="text">核酸检测</div>
    </div>
    <div class="navigation-item" @click="$router.push('/prevention')">
      <img src="../../../assets/images/navigation/3.png" alt="防疫物资">
      <div class="text">防疫物资</div>
    </div>
    <div class="navigation-item" @click="$router.push('/travel')">
      <img src="../../../assets/images/navigation/4.png" alt="出行政策">
      <div class="text">出行政策</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style lang="less" scoped>
.navigation {
  display: flex;
  align-items: center;
  background: #fff;
  position: relative;
  padding: 10px 0;

  .navigation-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 42px;
      height: 42px;
    }

    .text {
      padding-top: 2px;
    }
  }

  &:before {
    position: absolute;
    width: 100%;
    display: block;
    height: 1px;
    background: #ebebeb;
    top: 0;
    -webkit-transform: scaleY(.5);
    content: "";
  }
}
</style>
