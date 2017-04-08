
//注册组件实例

var QuestionScore = Vue.extend({
     props:['editable'],
    template: "#question_score",
    data:
            function ()
            {
                return {

                }
            }
    ,
    methods: {
        questionClick: function (event)
        {

        }
    }
});

Vue.component('question-score', QuestionScore);








