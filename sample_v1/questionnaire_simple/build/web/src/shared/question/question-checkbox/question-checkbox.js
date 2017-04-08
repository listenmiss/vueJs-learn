
//注册组件实例

var QuestionCheckbox = Vue.extend({
     props:['editable'],
    template: "#question_checkbox",
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

Vue.component('question-checkbox', QuestionCheckbox);








