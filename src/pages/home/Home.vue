<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>
<script>
import HomeHeader from "./components/Header.vue";
import HomeSwiper from "./components/Swiper.vue";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper
  },
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
