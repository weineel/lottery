import LotteryMarqueeSample from "./lottery-marquee-sample";

const LibraryModule = {
  LotteryMarqueeSample,

  install(Vue) {
    // Register components with vue
    Vue.component("lottery-marquee-sample", LotteryMarqueeSample);
  }
};

// Export library
export default LibraryModule;

// Export components
export { LotteryMarqueeSample };
