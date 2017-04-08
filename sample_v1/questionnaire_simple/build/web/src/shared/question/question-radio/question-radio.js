
//注册组件实例

var QuestionRadio = Vue.extend({
     props:['editable'],
    template: "#question_radio",
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

Vue.component('question-radio', QuestionRadio);








