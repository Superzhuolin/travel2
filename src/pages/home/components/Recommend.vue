<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img :src="item.imgUrl" class="item-img" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array,
  },
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "https://img1.qunarzz.com/sight/p0/2207/e7/e79856ef300cd229a3.water.jpg_256x160_cbd62780.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首都,浪漫的海洋主题公园",
        },
        {
          id: "0002",
          imgUrl:
            "https://img1.qunarzz.com/sight/p0/2207/e7/e79856ef300cd229a3.water.jpg_256x160_cbd62780.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首都,浪漫的海洋主题公园",
        },
        {
          id: "0003",
          imgUrl:
            "https://img1.qunarzz.com/sight/p0/2207/e7/e79856ef300cd229a3.water.jpg_256x160_cbd62780.jpg",
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
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

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

    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>