<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" 
      placeholder="输入城市名或拼音" />
    </div>
   <div class="search-content" ref="search" v-show="keyward">
      <ul>
        <li
          class="serch-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="serch-item border-bottom">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "CitySearch",
  props: {
    cities: Object,
  },
  data() {
    return {
      keyward: "",
      list: [], //存储包含城市关键词的项目
      timer: null,
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    },
  },
  methods:{
    handleCityClick(city){
      // this.$store.commit("changeCity",city);
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box
    width: 100%;
    height: .62rem
    padding: 0 .1rem
    line-height: .62rem
    text-align: center
    border-radius: .06rem
    color: #666
  }
}
</style>