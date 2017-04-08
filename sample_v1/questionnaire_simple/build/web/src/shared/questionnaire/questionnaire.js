
//注册组件实例

var Questionnaire = Vue.extend({
    props:['questionnaire'],
    template: "#questionnaire",
    data:
            function ()
            {
                var editable  = false;
                editable=this.questionnaire && this.questionnaire.state == "Created";
                alert(editable);
                return {
                  "editable":editable
                }
            }
    ,
    methods: {
        questionClick: function (event)
        {

        }
    }
});

Vue.component('questionnaire', Questionnaire);





