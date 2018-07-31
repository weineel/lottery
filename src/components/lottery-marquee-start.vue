<template>
  <div class="lottery-marquee-start" @click="toggle">
    <div v-if="this.status === statusEnum.starting">
      <slot name="starting">starting</slot>
    </div>
    <div v-if="this.status === statusEnum.stopping">
      <slot name="stopping">stoped</slot>
    </div>
  </div>
</template>

<script>
import { StartStatus as statusEnum } from "./constant";

export default {
  name: "lottery-marquee-start",

  components: {},

  props: {},

  data() {
    return {
      status: statusEnum.stopping,
      statusEnum
    };
  },

  computed: {},

  watch: {},

  methods: {
    // init() {
    // }
    toggle() {
      // 状态转换
      if (statusEnum.starting === this.status) {
        this.status = statusEnum.stopping;
      } else {
        this.status = statusEnum.starting;
      }
      this.$emit("toggle", this.status);
    }
  }
};
</script>

<style lang="stylus">
  // @import "../../assets/css/variable"
  // .lottery-marquee-start
    // background-color white
</style>
