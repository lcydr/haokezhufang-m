import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage.js'

Vue.use(Vuex)

const TOKEN_KEY = 'TOKEN_USER'

export default new Vuex.Store({
  state: {
    // 一个对象，储存当前登录用户信息（token等数据）
    // user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
    // user: null
    user: getItem(TOKEN_KEY)
  },
  getters: {},
  mutations: {
    setUser(state, data) {
      state.user = data

      // 为了防止刷新丢失，我们需要把数据备份到本地存储
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
      setItem(TOKEN_KEY, state.user)
    }
  },
  actions: {},
  modules: {}
})
