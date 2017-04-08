/**
 * Created by linhaifeng on 2016/10/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import about from './modules/about'
import questionnaire from './modules/questionnaire'
import center from './modules/center'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    center,
    about,
    questionnaire
  },
  strict: process.env.NODE_ENV !== 'production'  // 是否开启严格模式
})

export default store
