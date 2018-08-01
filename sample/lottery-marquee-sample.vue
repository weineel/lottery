<template>
  <div class="lottery-marquee-sample">
    <lottery-marquee class="marquee--body">
      <lottery-marquee-item v-for="i in 4" :key="i">
        <div slot-scope="{ status }" class="marquee--item">{{ status }}</div>
      </lottery-marquee-item>
      <lottery-marquee-start :auto="false" @start="start" @stop="stop">
        <div class="marquee--item" slot="progress" slot-scope="{ status }">{{ status }}</div>
        <div class="marquee--item" slot="stopped" slot-scope="{ status }">{{ status }}</div>
      </lottery-marquee-start>
      <lottery-marquee-item v-for="i in [5, 6, 7, 8]" :key="i">
        <div slot-scope="{ status }" class="marquee--item">{{ status }}</div>
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
    start() {
      console.log(1, "start");
    },
    stop() {
      console.log(1, "stop");
    }
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
