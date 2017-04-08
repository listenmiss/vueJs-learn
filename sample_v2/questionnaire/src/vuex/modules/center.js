import * as types from '../mutation-type'
import  services from '../../services/services'

const state = {
  questionnaires: []
}

const getters = {
  userQuestionnaireList: state => state.questionnaires,
  selectedQuestionnaire:state => state.selectedQuestionnaire
}

const actions = {
     /*
     * 获取首页列表
     * */
  getUserQuestionnaireList ({ commit },params) {
    let res = services.getUserQuestionnaireList(params.userKey);
    commit(types.CENTER_GET_QUESTIONNAIRE_LIST, res );
  },
  delQuestionnaire({ commit },params)
  {
    let res = services.delQuestionnaire(params.id);
    if(res)
    {
      commit(types.CENTER_DEL_QUESTIONNAIRE,params.id );
    }
    
  }
}

const mutations = {
  [types.CENTER_GET_QUESTIONNAIRE_LIST] (state,  res ) {
    state.questionnaires = res;
  },
  [types.CENTER_DEL_QUESTIONNAIRE] (state,  id ) {
    let questionnnaires = state.questionnaires;
       let index=-1;
                  $.each(questionnnaires,function(i,item){
                    if(item.id==id)
                    {
                          index=i;
                          return;
                    }
                  });
                     if(index!=-1)
                   {
                    state.questionnaires.splice(index,1);
                   }  
  }
}

export default{
  state,
  getters,
  actions,
  mutations
}
