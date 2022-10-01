<template>
  <div class="container" @click="handleBannerClick">
    <div class="wrapper" >
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        //当swiper插件监听到元素dom结构发生变化时,会自动自我刷新一次
        observeParents: true, //解决宽度自我计算问题
        observer: true,
      },
    };
  },
  methods: {
    handleBannerClick(){
      this.$emit("close");
    }
  },
};
</script>
<style lang="stylus" scoped>
.container /deep/ .swiper-container {
  overflow: inherit;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;

  .wrapper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;

    .gallary-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>