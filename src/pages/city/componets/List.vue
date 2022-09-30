<template>
  <div class="list" ref="wrapper">
    <div>
      <!-- 当前城市 -->
      <div class="area">
        <div class="title boder-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.currentCity }}</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title boder-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <!-- 字母区 -->
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title boder-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
import Bscroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String,
  },
  computed: {
    ...mapState({
      currentCity: "city",
    }),
  },
  methods: {
    //获取所点击的热门城市
    handleCityClick(city) {
      // 使用dispatch派发名字为changeCity的Actions,并传入参数city
      // this.$store.dispatch("changeCity", city);
      // 由于不是异步或者是批量同步操作
      //直接使用commit调用名字为changeCity的mutations,并传入参数city
      // this.$store.commit("changeCity", city);

      this.changeCity(city);
      //编程式导航跳转
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"]),
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        // console.log(element);
        this.scroll.scrollToElement(element);
      }
    },
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

/* 未实现 */
.border-top-bottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .border-bottom {
    &:before {
      border-color: #ccc;
    }
  }

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76 rem;
      padding-left: 0.2rem;
    }
  }
}
</style>