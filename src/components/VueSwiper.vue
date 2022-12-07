<template>
  <div class="swiper">
    <!-- 轮播 -->
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in banner" :key="index" >
        <img style="width: 100%;" :src="item.image" :alt="item.title">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <ul class="list">
      <li class="item" :class="{'active': index === active}" v-for="(item, index) in banner" :key="index"
      @click="changeSwiper(index)">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "VueSwiper",
  data() {
    let that = this;
    return {
      active: 0,
      banner: [],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        on: {
          slideChangeTransitionStart() {
            // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            if (this.activeIndex === that.banner.length + 1) {
              that.active = 0;
            } else {
              that.active = this.activeIndex - 1
            }
          }
        }
      }
    }
  },
  created() {
    this.getBanner();
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.swiper.slideTo(1, 1000, false);
  },
  methods: {
    // 改变
    changeSwiper(index) {
      this.active = index;
      this.swiper.slideTo(index + 1, 1000, false);
    },
    getBanner() {
      axios({
        method: 'get',
        url: 'http://iwenwiki.com/wapicovid19/ncovimg.php'
      }).then(res => {
        if (res.data.status === 200) {
          this.banner = res.data.result
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  display: flex;

  .item {
    flex: 1;
    padding: 0.1rem;
    font-size: 0.24rem;
    line-height: 0.32rem;
    margin: 0.1rem;
    background: #eee;
    color: #666;
    text-align: center;
    display: flex;
    align-items: center;
  }

  .active {
    background: rgba(80, 166, 173, 1);
    color: #fff;
  }
}
</style>
