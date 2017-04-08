//var Edit = Vue.extend({
//    template: '#edit'
//})


//注册组件实例
var Edit = Vue.extend({
    template: '#edit',
    data:
            function ()
            {
//              var questionList = [
//                  {
//                      "title": "这是文本标题",
//                      "type": "Text",
//                       "options":[],
//                      "answer": ""
//                  },
//                  {
//                      "title": "这是单选题标题",
//                      "type": "SingleSelect",
//                      "options":[],
//                      "answer": ""
//                  },
//                  {
//                      "title": "这是多选题标题",
//                      "type": "MultiSelect",
//                       "options":[],
//                      "answer": ""
//                  },
//                  {
//                      "title": "这是分值题标题",
//                      "type": "Score",
//                      "options":[],
//                      "answer": ""
//                  }
//              ];

//              var questionnaire = {
//                  "id": "问卷ID1",
//                  "title": "问卷标题1",
//                  "starter": "开始问候语1",
//                  "ending": "结束问候语1",
//                  "state": "Created", //问卷状态
//                  "questionList": questionList, //问题列表
//                  "createDate": "创建日期1"
//              };




              

                var questionList=[];
                
                var id = "questionnaire_" + new Date().getTime(); //生成唯一id
                
                var date = new Date();
				    var seperator1 = "-";
				    var seperator2 = ":";
				    var month = date.getMonth() + 1;
				    var strDate = date.getDate();
				    if (month >= 1 && month <= 9) {
				        month = "0" + month;
				    }
				    if (strDate >= 0 && strDate <= 9) {
				        strDate = "0" + strDate;
				    }
				    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
				            + " " + date.getHours() + seperator2 + date.getMinutes()
				            + seperator2 + date.getSeconds();
                var questionnaire = {
                    "id": id,
                    "title": "问卷标题",
                    "starter": "开始问候语",
                    "ending": "结束问候语",
                    "state": "Created", //问卷状态
                    "questionList": questionList, //问题列表
                    "createDate": currentdate
                };


                return {
                    questionnaire: questionnaire
                }
            }
    ,
    events:{
        addQuestion:function(questionType)
        {
         this.questionnaire.questionList.push({
                        "title": "",
                        "type": questionType,
                        "options":[],
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


