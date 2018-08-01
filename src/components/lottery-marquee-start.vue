<template>
  <div class="lottery-marquee-start" @click="toggle">
    <div v-if="status === statusEnum.stopping || status === statusEnum.progress">
      <slot name="progress" :status="status">{{ status }}</slot>
    </div>
    <div v-if="status === statusEnum.stopped">
      <slot name="stopped" :status="status">{{ status }}</slot>
    </div>
  </div>
</template>

<script>
import { ProcessStatus as statusEnum } from "./constant";

export default {
  name: "lottery-marquee-start",

  components: {},

  props: {
    // 需要使用代码设置 stopping。。。不能通过点击触发
    auto: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      status: statusEnum.stopped,
      statusEnum
    };
  },

  computed: {},

  watch: {
    status(nv) {
      if (statusEnum.progress === nv) {
        this.$emit("start");
      } else if (statusEnum.stopping === nv) {
        this.$emit("stop");
      } else if (statusEnum.stopped === nv) {
        this.$emit("stopped");
      }
    }
  },

  methods: {
    // init() {
    // }
    toggle() {
      // 状态转换
      if (this.auto) {
        if (statusEnum.stopped === this.status) {
          this.status = statusEnum.progress;
        } else {
          console.warn("auto状态下，需要代码设置停止，不能通过按钮触发停止。");
        }
      } else {
        if (statusEnum.progress === this.status) {
          this.status = statusEnum.stopping;
        } else if (statusEnum.stopped === this.status) {
          this.status = statusEnum.progress;
        } else {
          console.warn("还有抽奖正在进行中，不能重新开始！请稍后再试。");
          this.$emit("processing"); // 进行中
        }
      }

      // else if (statusEnum.stopping === this.status) {
      // this.status = statusEnum.stopped;
      // do nothing...会自动停止 statusEnum.stopped。
      // }
    }
  }
};
</script>

<style lang="stylus">
  // @import "../../assets/css/variable"
  // .lottery-marquee-start
    // background-color white
</style>
