//注册组件实例

var QuestionnaireControls = Vue.extend({
	props: ['questionnaire'],
	template: "#questionnaire_controls",
	methods:{
		onPreview:function()
		{
			var id = this.questionnaire.id;
			this.$router.go({name:"published",params:{id:id},query:{type:"preview"}});//小心这里是this.$router  rrrrrrrr
		},
		onEdit:function()
		{
			
		},
		onPublish:function()
		{
			//this.questionnaire.state="Published";
			this.$dispatch("publishQuestionnaire");
		},
		onDelete:function()
		{
			this.$dispatch("deleteQuestionnaire");
		},
	}
});

Vue.component('questionnaire-controls', QuestionnaireControls);