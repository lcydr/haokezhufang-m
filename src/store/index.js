import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('HEIMA_TOUTIAO_TOKEN')) || {}
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      // token放在本地存储
      localStorage.setItem('HEIMA_TOUTIAO_TOKEN', JSON.stringify(payload))
    }
  }
})
