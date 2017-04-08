
//注册组件实例

var Questionnaire = Vue.extend({
    props:['questionnaire'],
    template: "#questionnaire",
    data:
            function ()
            {
                var editable  = false;
                var submitStyle={
                	display:'none'
                };
                var isPreviewPage = false;
                
                editable=this.questionnaire && this.questionnaire.state == "Created";
                if(this.questionnaire && this.questionnaire.state == "Created")
                {
                	submitStyle.display='inline'
                }
                
                
                if(this.$route.query.type ==="preview")//小心这里是this.$route
                {
                	isPreviewPage=true;
                }
                return {
                  "editable":editable,
                  "isPreviewPage":isPreviewPage,
                  "submitStyle":submitStyle
                }
            }
    ,
    methods: {
        onSubmit: function ()
        {
        	var questionnaires = [];
        	var questionnairesStr =sessionStorage.getItem("questionnaires");
        	if(questionnairesStr!=null&&questionnairesStr!=""){
        		questionnaires=JSON.parse(questionnairesStr);
        	}
        	questionnaires.push(this.questionnaire);
        	
           sessionStorage.setItem("questionnaires", JSON.stringify(questionnaires)) ;
           
//    方法一     this.$router.go("/main/center");
this.$router.go({path:"/main/center"});//小心这里是this.$router
           
        }
    }
});

Vue.component('questionnaire', Questionnaire);





