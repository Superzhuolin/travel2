<template>
  <div>
    <detail-banner></detail-banner>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner.vue";
import DetailHeader from "./components/Header.vue";
import DetailList from "./components/List.vue";
import axios from "axios";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],  
      list: [],
    };
  },
};
</script>
<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>