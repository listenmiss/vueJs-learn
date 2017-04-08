//注册组件实例

var Published = Vue.extend({
	template: "#published",
	data:function()
	{
		
		var id = this.$route.params.id;
		var questionnaire = null;
		//更具id查询questionnaire,其实应该调用数据库查询方法或service
		   var questionnaires = [];
        	var questionnairesStr =sessionStorage.getItem("questionnaires");
        	if(questionnairesStr!=null&&questionnairesStr!=""){
        		questionnaires=JSON.parse(questionnairesStr);
        	}
        	
        	$.each(questionnaires, function(i,item) {
        		if(item.id==id)
        		{
        			questionnaire =item;
        		}
        	});
		
		return {
			id:id,
			questionnaire:questionnaire
		};
		
	}
});

Vue.component('published', Published);