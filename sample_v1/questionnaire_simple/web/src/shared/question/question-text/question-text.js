
//注册组件实例

var QuestionText = Vue.extend({
     props:['editable','question'],
    template: "#question_text",
    data:
            function ()
            {            
                return {
                   
                }
            }
    ,
    methods: {
        onSave: function ()
        {
        	console.log(this.question.title);
           alert("保存成功！");
        },
         onCancel: function ()
        {
        	this.question.title="";
        }
        
    }
});

Vue.component('question-text', QuestionText);






