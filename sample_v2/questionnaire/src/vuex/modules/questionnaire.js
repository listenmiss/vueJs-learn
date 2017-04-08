
// import * as types from '../mutation-type';
import * as types from '../mutation-type'
import services from '../../services/services'
const state = {
    questionnaire: {
        "id": "",//问卷ID
        "title": "",//问卷标题
        "starter": "",//开始问候语
        "ending": "",//结束问候语
        "state": "Created", //问卷状态
        "questionList": [],  //问题列表
        "createDate": ""//创建日期
    }
}

const actions = {
  

    setQuestionnaireEmpty: function ({ commit }) {
        let nowTime = services.getNowTime();
        let newQuestionnaire = {
            "id": "",//问卷ID
            "title": "",//问卷标题
            "starter": "",//开始问候语
            "ending": "",//结束问候语
            "state": "Created", //问卷状态
            "questionList": [],  //问题列表
            "createDate": nowTime//创建日期
        }
        commit(types.SET_QUESTIONNAIRE, newQuestionnaire );
    },
    getQuestionnaireById: function (context, params) {
        let questionnaire = services.getQuestionnaireById(params.id);
         context.commit(types.RESET_QUESTIONNAIRE,  questionnaire );
        
    },
        createQuestionnaire: function (context, userKey) {
      
        let newQuestionnaire = services.createQuestionnaire(userKey,state.questionnaire);
        if (newQuestionnaire != null) {
            context.commit(types.CREATE_QUESTIONNAIRE,  newQuestionnaire );
            return true;
        } else {
            return false;
        }

    },
    questionSelectClick: function ({ commit }, questionType) {
        commit(types.ADD_QUESTION,  questionType );
    },
    addQuestionOption: function ({ commit }, questionIndex) {
        commit(types.ADD_QUESTION_OPTION,  questionIndex );
    },
    delQuestionOption: function ({ commit }, params) {
        commit(types.DEL_QUESTION_OPTION, params );
    }
    

}

const mutations = {
    [types.SAVE_QUESTIONNAIRE_TITLE](state, title) {
        state.questionnaire.title = title;
    },
     [types.SAVE_QUESTIONNAIRE_STARTER](state, starter) {
        state.questionnaire.starter = starter;
    },
    
    [types.CREATE_QUESTIONNAIRE](state, newQuestionnaire) {
        state.questionnaire = newQuestionnaire
    },
    [types.RESET_QUESTIONNAIRE](state, newQuestionnaire) {
        state.questionnaire = newQuestionnaire
    },
    
    [types.ADD_QUESTION](state, questionType) {
        state.questionnaire.questionList.push({
            "title": "",
            "type": questionType,
            "options": [],
            "answer": ""
        });
    },
    [types.SET_QUESTIONNAIRE](state, newQuestionnaire) {
        state.questionnaire = newQuestionnaire;
    },
     [types.SAVE_QUESTIONNAIRE_ENDING](state, ending) {
        state.questionnaire.ending = ending;
    },


    
    [types.ADD_QUESTION_OPTION](state, questionIndex) {
        state.questionnaire.questionList[questionIndex].options.push({
        			"key": state.questionnaire.questionList[questionIndex].options.length, 
        			"value":'' });
    },
     [types.DEL_QUESTION_OPTION](state, params) {
        state.questionnaire.questionList[params.questionIndex].options.splice(params.optionIndex,1);
    },
     [types.UPDATE_QUESTION_TITLE](state, params) {
        state.questionnaire.questionList[params.questionIndex].title=params.title;
    },
     [types.UPDATE_QUESTION_OPTION_VALUE](state, params) {
        state.questionnaire.questionList[params.questionIndex].options[params.optionIndex].value=params.value;
    }
    
    

    
}

const getters = {
    questionnaire: state => state.questionnaire
}

export default {
    state,
    actions,
    mutations,
    getters
}