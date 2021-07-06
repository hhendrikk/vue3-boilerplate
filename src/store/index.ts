import { createLogger, createStore } from 'vuex'

export default createStore({
  actions: {},
  getters: {},
  mutations: {},
  modules: {},
  devtools: import.meta.env.DEV,
  plugins: import.meta.env.DEV ? [createLogger()] : [],
  strict: import.meta.env.DEV,
})
