
//注册组件实例

var QuestionScore = Vue.extend({
      props:['editable','question'],
    template: "#question_score",
    data:
            function ()
            {
                return {

                }
            }
    ,
    methods: {
         onSave:function()
        {
        	alert("save");
        },
        onCancel:function()
        {
        	
        }
    }
});

Vue.component('question-score', QuestionScore);








