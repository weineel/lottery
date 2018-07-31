<template>
  <div class="lottery-marquee-sample">
    <lottery-marquee class="marquee--body">
      <lottery-marquee-item v-for="i in 4" :key="i">
        <div class="marquee--item">lottery-marquee-item {{i}}</div>
      </lottery-marquee-item>
      <lottery-marquee-start>
        <div class="marquee--item" slot="starting">starting</div>
        <div class="marquee--item" slot="stopping">stopping</div>
      </lottery-marquee-start>
      <lottery-marquee-item v-for="i in [5, 6, 7, 8]" :key="i">
        <div class="marquee--item">lottery-marquee-item {{i}}</div>
      </lottery-marquee-item>
    </lottery-marquee>
  </div>
</template>

<script>
import LotteryMarquee from "../src/components/lottery-marquee";
export default {
  name: "lottery-marquee-sample",

  components: {
    LotteryMarquee
  },

  props: {},

  data() {
    return {};
  },

  computed: {},

  watch: {},

  // mounted() {
  // this.init()
  // },

  methods: {
    // init() {
    // }
  }
};
</script>

<style lang="stylus">
  // @import "../../assets/css/variable"
  // .lottery-marquee-sample
    // background-color white
  $w = 100px
  .marquee
    &--body
      width $w * 3
    &--item
      width $w
      height $w
</style>
