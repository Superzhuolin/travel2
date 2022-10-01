<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
      />
      <div class="banner-info">
        <div class="banner-tittle">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "@/common/gallary/Gallary.vue"
import FadeAnimation from "@/common/fade/FadeAnimation.vue";
export default {
  name: "DetailBanner",
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array,
  },
  data() {
    return {
      showGallary: false,
      imgs: [
        "https://qimgs.qunarzz.com/piao_qsight_provider_piao_qsight_web/0106w120008j2a6hd9F60.jpg_1190x550_cf7d32c6.jpg",
        "https://qimgs.qunarzz.com/piao_qsight_provider_piao_qsight_web/0106w120008j2a6hd9F60.jpg_1190x550_cf7d32c6.jpg",
      ],
    };
  },
  methods: {
    handleBannerClick(){
      this.showGallary=true;
    },
    handleGallaryClose(){
      this.showGallary=false;
    }
  },
  components: {
    CommonGallary,
    FadeAnimation,
  },
};
</script>
<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  /* padding-bottom: 51%; // 图片不同更换 */
  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;

    // 渐变效果有效
    // background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    .banner-tittle {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem; // 为元素添加圆角边框
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>