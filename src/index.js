import HelloWorld from "./components/HelloWorld";
import LotteryMarquee from "./components/lottery-marquee";
import LotteryMarqueeItem from "./components/lottery-marquee-item";
import LotteryMarqueeStart from "./components/lottery-marquee-start";

const LibraryModule = {
  HelloWorld,
  LotteryMarquee,
  LotteryMarqueeItem,
  LotteryMarqueeStart,

  install(Vue) {
    // Register components with vue
    Vue.component("hello-world", HelloWorld);
    Vue.component("lottery-marquee", LotteryMarquee);
    Vue.component("lottery-marquee-item", LotteryMarqueeItem);
    Vue.component("lottery-marquee-start", LotteryMarqueeStart);
  }
};

// Export library
export default LibraryModule;

// Export components
export { HelloWorld, LotteryMarquee, LotteryMarqueeItem };
