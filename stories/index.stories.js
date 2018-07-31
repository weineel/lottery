import { storiesOf } from "@storybook/vue";

// Add more stories here to live develop your components
storiesOf("HelloWorld", module).add("story as a template", () => ({
  template: `<hello-world></hello-world>`
}));

// 跑马灯
storiesOf("lottery-marquee", module).add("跑马灯1", () => ({
  template: `<lottery-marquee>
              <lottery-marquee-item v-for="i in 4" :key="i">lottery-marquee-item {{i}}</lottery-marquee-item>
              <lottery-marquee-start></lottery-marquee-start>
              <lottery-marquee-item v-for="i in [5, 6, 7, 8]" :key="i">lottery-marquee-item {{i}}</lottery-marquee-item>
            </lottery-marquee>`
}));
storiesOf("lottery-marquee", module).add("跑马灯2", () => ({
  template: `<lottery-marquee></lottery-marquee>`
}));

// 跑马灯示例
storiesOf("lottery-marquee-sample", module).add("跑马灯3", () => ({
  template: `<lottery-marquee-sample></lottery-marquee-sample>`
}));
