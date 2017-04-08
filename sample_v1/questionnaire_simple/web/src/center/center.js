
var Center = Vue.extend({
    template: '#center',
        data:
            function ()
            {
                var questionnaires=[];
                var selectedQuestionnaire={};
                
                var questionnairesStr = sessionStorage.getItem("questionnaires");
                if(questionnairesStr!=null&&questionnairesStr!="")
                {
                	questionnaires = JSON.parse(questionnairesStr);
                	selectedQuestionnaire = questionnaires[0];
                }
                
                return {
                  "questionnaires":questionnaires,
                  "selectedQuestionnaire":selectedQuestionnaire,
                  "selectedIndex":0
                }
            }
      ,events:{
        deleteQuestionnaire:function()
        {
               this.questionnaires.splice(this.selectedIndex,1);
               
               sessionStorage.setItem("questionnaires", JSON.stringify(this.questionnaires)) ;
        },publishQuestionnaire:function()
        {
        	this.selectedQuestionnaire.state="Published";
        	
        	 this.questionnaires[this.selectedIndex] = Object.assign({}, this.selectedQuestionnaire);
        	
        }
    },methods: {
			onSelect: function(questionnaire, index) {
			    this.selectedQuestionnaire = questionnaire;
		         this.selectedIndex = index;
			}
		}
});
Vue.component('center', Center);
