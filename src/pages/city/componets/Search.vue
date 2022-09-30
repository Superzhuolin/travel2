<template>
  <div>
    <div class="search">
      <input class="search-input" placeholder="输入城市名或拼音" />
    </div>
  </div>
</template>
<script>
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