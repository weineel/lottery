import { configure } from '@storybook/vue';
import Vue from 'vue';

// Import your custom components.
import ModuleLibrary from '@/index';
import ModuleSample from 'sample/index';

// Install this library
Vue.use(ModuleLibrary);
Vue.use(ModuleSample);

// Install Vue plugins
// ex: Vue.use(vuex)

// Load stories
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);