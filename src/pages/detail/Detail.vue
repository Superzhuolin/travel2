<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
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
      list: [{
        title:"成人票",
        children:[{
          title:"成人三馆连票",
          children:[{
            title:"成人三馆连票---某一连锁店销售"
          }]
        },{
          title:"成人五馆连票",
        },]
      },{
        title:"学生票"
      },{
        title:"儿童票"
      },{
        title:"特惠票"
      },],
    };
  },
};
</script>
<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>