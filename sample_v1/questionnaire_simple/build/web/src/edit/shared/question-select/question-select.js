
//注册组件实例

var QuestionSelect = Vue.extend({
  
    template: "#question_select",
    data:
            function ()
            {
                return {

                }
            }
    ,
    methods: {
        questionSelectClick: function (questionSelectType)
        {
           this.$dispatch("addQuestion",questionSelectType);
        }
    }
});

Vue.component('question-select', QuestionSelect);





