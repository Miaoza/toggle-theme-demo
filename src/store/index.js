import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const theme = localStorage.getItem('theme'); // 无后台暂存缓存

export default new Vuex.Store({
  state: {
    theme: theme==='undefined' ? 1: (+JSON.parse(theme) || 1)
  },
  mutations: {
    setTheme(state, payload = 1) {
      state.theme = payload
      localStorage.setItem('theme', JSON.stringify(state.theme))
    }
  },
  actions: {
    toggleTheme(context, payload=1) {
      context.commit('setTheme', payload)
    }
  },
  modules: {},
});
