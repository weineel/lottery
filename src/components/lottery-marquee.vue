<template>
  <div class="lottery-marquee">
    <slot></slot>
  </div>
</template>

<script>
import {
  ItemStatus as itemStatus,
  ItemNum as itemNum,
  ProcessStatus as processStatus
} from "./constant";

// 子组件的下标遍历顺序
const traverseTabel = [0, 1, 2, 4, 7, 6, 5, 3];
// 形成一个循环链表，存在环形依赖（造成内存泄漏，需要显示delete）
const traverseTabelHeader = {
  index: traverseTabel[0]
};
let preObj = traverseTabelHeader;
for (let i = 1; i < traverseTabel.length; i++) {
  const currentObje = {
    index: traverseTabel[i]
  };
  preObj.next = currentObje;
  preObj = currentObje;
  if (i === traverseTabel.length - 1) {
    currentObje.next = traverseTabelHeader;
  }
}

function _sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

export default {
  name: "lottery-marquee",

  components: {},

  props: {
    resultIndex: {
      type: Number,
      default: 4
    }
  },

  data() {
    return {
      itemsEls: undefined,
      startEls: undefined,
      currentTableItem: traverseTabelHeader,
      status: processStatus.stopped // stopped, stopping, progress
    };
  },

  computed: {},

  watch: {},

  mounted() {
    this.init();
  },

  methods: {
    init() {
      if (
        this.$children.some(
          e =>
            e.$options.name !== "lottery-marquee-item" &&
            e.$options.name !== "lottery-marquee-start"
        )
      ) {
        throw new Error(
          "子组件只能是【lottery-marquee-item】或【lottery-marquee-start】"
        );
      }
      this.itemsEls = this.$children.filter(
        e => e.$options.name === "lottery-marquee-item"
      );
      if (this.itemsEls.length !== itemNum) {
        throw new Error(
          `子组件【lottery-marquee-item】的个数必须是 ${itemNum} 个`
        );
      }
      this.startEls = this.$children.find(
        e => e.$options.name === "lottery-marquee-start"
      );
      // start 组件的事件绑定
      if (this.startEls) {
        /**
         * 所有关于开始停止的状态都在 lottery-marquee-start 组件中处理。 this.status 用this.startEls.status代替
         */
        // 只监听 start和stop事件？
        this.startEls.$on("start", this.start);
      } else {
        throw new Error("需要一个 lottery-marquee-start 组件");
      }
      // 默认选中第一个
      this.itemsEls[0].status = itemStatus.selected;
    },
    async start() {
      let currentTableItem = this.currentTableItem;
      let time = 50;
      let stopTime = 0;
      let leaveNum = itemNum;
      do {
        this.itemsEls[currentTableItem.index].status = itemStatus.highLight;
        await _sleep(time);
        currentTableItem = currentTableItem.next;
        if (this.startEls.status === processStatus.stopping) {
          // 停止准备
          // 忽略第一次到达停止位置。
          if (stopTime === 1) {
            time += 50;
            // 再循环 itemNum 次
            leaveNum--;
          }
          if (currentTableItem.index === this.resultIndex && stopTime === 0) {
            stopTime++;
          }
        } else if (this.startEls.status === processStatus.stopped) {
          leaveNum = 0;
        }
      } while (!!leaveNum);
      this.itemsEls[currentTableItem.index].status = itemStatus.selected;
      this.currentTableItem = currentTableItem;
      if (this.startEls.status === processStatus.stopping) {
        this.startEls.status = processStatus.stopped;
      }
    }
    // ,
    // stop(index) {
    //   console.log("stop");
    //   this.status = processStatus.stopping;
    //   // 可以直接停止，这样没法指定在什么地方停止了。this.currentTableItem 可以获取实际停止的位置
    //   // this.status = processStatus.stopped;
    // }
  }
};
</script>

<style lang="stylus">
  .lottery-marquee
    display flex
    flex-wrap wrap
</style>
