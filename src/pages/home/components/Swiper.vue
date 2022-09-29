<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- <swiper-slide v-for="item of list" :key="item.id"> -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  components: {},
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination", //轮播小白点
        loop: "true", //循环轮播
      },
      swiperList: [
        {
          id: "001",
          imgUrl:
            "https://imgs.qunarzz.com/vs_ceph_vcimg/e99689b007a63a3e9a1df56a4fc97131.jpeg",
        },
        {
          id: "002",
          imgUrl:
            "https://ad-dapp-osscp.qunarzz.com/ad_dapp_oss_oper/7603042338b1215e3e8c5a32fce67933.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="stylus" scoped>
.wrapper /deep/.swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
