<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props: {
    list: Array,
  },
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "https://imgs.qunarzz.com/vs_ceph_vcimg/5be2601d1f921f166646b817459a2727.jpeg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首都,浪漫的海洋主题公园",
        },
        {
          id: "0002",
          imgUrl:
            "https://imgs.qunarzz.com/vs_ceph_vcimg/5be2601d1f921f166646b817459a2727.jpeg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首都,浪漫的海洋主题公园",
        },
        {
          id: "0003",
          imgUrl:
            "https://imgs.qunarzz.com/vs_ceph_vcimg/5be2601d1f921f166646b817459a2727.jpeg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首都,浪漫的海洋主题公园",
        },
      ],
    };
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
@import '~@/assets/styles/mixins.styl';

.title {
  line-height: 0.8rem;
  background: #ccc;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;

  .item-img {
    width: 100%;
  }
}

.item-info {
  paddin: 0.1rem;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    ellipis();
  }
}
</style>