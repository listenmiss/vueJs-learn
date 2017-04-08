//注册组件实例

var QuestionnaireItem = Vue.extend({
	props: ['questionnaire'],
	template: "#questionnaire_item",
	data: function() {
			var stateClass = "";
			var stateText="";
	
			if(this.questionnaire.state === "Created") {
				stateText = '已创建';
				stateClass = 'label-warning';
			} else if(this.questionnaire.state === "Published") {
				stateText = '回收中';
				stateClass = 'label-info';
			} else if(this.questionnaire.state === "Finished") {
				stateText = '已结束';
				stateClass = 'label-success';
			}
			
		
		return {
			"stateClass": stateClass,
			"stateText": stateText
		}
		
	}
	

});

Vue.component('questionnaire-item', QuestionnaireItem);