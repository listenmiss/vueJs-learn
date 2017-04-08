import * as types from '../mutation-type'
import  services from '../../services/services'

const state = {
  aboutList: []
}

const getters = {
  aboutListData: state => state.aboutList
}

const actions = {
     /*
     * 获取首页列表
     * */
  getAboutList ({ commit }) {
    let res = services.getAboutList()
    commit(types.ABOUT_GET_LIST, { res })
  }
}

const mutations = {
  [types.ABOUT_GET_LIST] (state, { res }) {
    state.aboutList = res
  }

}

export default{
  state,
  getters,
  actions,
  mutations
}
