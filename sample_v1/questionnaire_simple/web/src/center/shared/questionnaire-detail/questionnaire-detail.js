//注册组件实例

var QuestionnaireDetail = Vue.extend({
	props: ['questionnaire'],
	template: "#questionnaire_detail",
});

Vue.component('questionnaire-detail', QuestionnaireDetail);