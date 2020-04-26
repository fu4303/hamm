import Vue from "vue";
import Vuex from "vuex";
import marathon from './modules/marathon';
import page from './modules/page';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    marathon,
    page
  }
});
