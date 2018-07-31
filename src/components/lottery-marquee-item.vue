<template>
  <div class="lottery-marquee-item">
    <slot></slot>
    <span style="color: red">{{ status }}</span>
  </div>
</template>

<script>
import { ItemStatus as itemStatusEnum } from "./constant";

export default {
  name: "lottery-marquee-item",

  components: {},

  props: {},

  data() {
    return {
      status: itemStatusEnum.normal
    };
  },

  computed: {},

  watch: {
    status(nv) {
      if (nv === itemStatusEnum.highLight) {
        setTimeout(() => {
          this.status = itemStatusEnum.normal;
        }, 200);
      }
    }
  },

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
  // .lottery-marquee-item
    // background-color white
</style>
