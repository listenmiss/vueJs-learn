//var Edit = Vue.extend({
//    template: '#edit'
//})


//注册组件实例
var Edit = Vue.extend({
    template: '#edit',
    data:
            function ()
            {
                var questionList = [
                    {
                        "title": "这是文本标题",
                        "type": "Text",
                        "options": "",
                        "answer": ""
                    },
                    {
                        "title": "这是单选题标题",
                        "type": "SingleSelect",
                        "options": "",
                        "answer": ""
                    },
                    {
                        "title": "这是多选题标题",
                        "type": "MultiSelect",
                        "options": "",
                        "answer": ""
                    },
                    {
                        "title": "这是分值题标题",
                        "type": "Score",
                        "options": "",
                        "answer": ""
                    }
                ];



                var questionnaire = {
                    "id": "问卷ID1",
                    "title": "问卷标题1",
                    "starter": "开始问候语1",
                    "ending": "结束问候语1",
                    "state": "Created2", //问卷状态
                    "questionList": questionList, //问题列表
                    "createDate": "创建日期1"
                };


                return {
                    questionnaire: questionnaire
                }
            }
    ,
    events:{
        "addQuestion":function(questionType)
        {
         this.questionnaire.questionList.push({
                        "title": "",
                        "type": questionType,
                        "options": "",
                        "answer": ""
                    });
        }
    },
    methods: {
        questionClick: function (event)
        {

            alert(this.questionnaire.id);
        }
    }
    
});

Vue.component('edit', Edit);


