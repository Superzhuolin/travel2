<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLeterClick"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object,
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters; //['A','B','C'...]
    },
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLeterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        //函数节流:延迟16毫秒执行
        this.timer = setTimeout(() => {
          // 尺寸与视频不同,在此-24
          const touchY = e.touches[0].clientY - 24;
          const index = Math.floor((touchY - this.startY) / 20);
          // console.log(index);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58em;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>