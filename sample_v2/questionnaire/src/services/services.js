

const questionnaireList = [];
export  default {

    /*
     * 获取帮助页列表信息
     * */
    getAboutList:function () {

        let aboutList=[];

        let about_first ={};
        about_first.img="../../../static/img/about/faq.jpg";
        about_first.content=" 使用问卷收集数据的基本流程是：创建问卷、编辑问卷、设置问卷、预览问卷、回收问卷、数据分析等几个步骤。问卷提供三种创建问卷方式，创建空白问卷、选择问卷模板、文本编辑器。可以灵活设置问卷的显示、回收条件，在线实时统计回收结果，并可以导出Excel和SPSS数据。详细操作指引请参照帮助中心”操作指引“部分。";
        about_first.title="常见FAQ ";
        aboutList.push(about_first);

                let about_two ={};
        about_two.img="../../../static/img/about/create.jpg";
        about_two.content="问卷，共有三种创建问卷的方式让您来选择使用：创建空白问卷、选择问卷模板、文本编辑器，可根据自身的使用习惯，选择最合适的方式来快速创建一份问卷。";
          about_two.title="创建问卷";
        aboutList.push(about_two);

                let about_three ={};
        about_three.img="../../../static/img/about/my.jpg";
        about_three.content="问卷编辑、预览完成后，一份在线问卷即完成，此时可以通过对问卷的复制、编辑、删除、发布、统计、导出、分享等功能，实现对问卷的全面管理";
          about_three.title="我的问卷";
        aboutList.push(about_three);
        return aboutList;
    },
    getNowTime:function()
    {
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
       return currentdate;
    },
    createQuestionnaire:function(userKey,questionnaire)
    {



            var questionnaires = [];
        	var questionnairesStr =sessionStorage.getItem("questionnaires");
        	if(questionnairesStr!=null&&questionnairesStr!=""){
        		questionnaires=JSON.parse(questionnairesStr);
        	}
            let newQuestionnaire = {};
            newQuestionnaire.userKey = userKey;
            newQuestionnaire.id = questionnaires.length;
            newQuestionnaire.title =questionnaire.title;
            newQuestionnaire.starter =questionnaire.starter;
            newQuestionnaire.ending =questionnaire.ending;
            newQuestionnaire.state =questionnaire.state;
             newQuestionnaire.questionList =questionnaire.questionList;
              newQuestionnaire.createDate =questionnaire.createDate;
        	questionnaires.push(newQuestionnaire);
        	
           sessionStorage.setItem("questionnaires", JSON.stringify(questionnaires)) ;

        return questionnaire;
    },
    getUserQuestionnaireList:function(userKey)
    {
                var questionnaires=[];
               
                
                var questionnairesStr = sessionStorage.getItem("questionnaires");
                if(questionnairesStr!=null&&questionnairesStr!="")
                {
                	questionnaires = JSON.parse(questionnairesStr);
                	
                }
           return questionnaires;
    },
    delQuestionnaire:function(id)
    {
                      var questionnaires=[];
               
                
                var questionnairesStr = sessionStorage.getItem("questionnaires");
                if(questionnairesStr!=null&&questionnairesStr!="")
                {
                	questionnaires = JSON.parse(questionnairesStr);
                
                 
                 let index=-1;
                  $.each(questionnaires,function(i,item){
                    if(item.id==id)
                    {
                        index = i;
                        return;
                    }
                  });
                   if(index!=-1)
                   {
                     questionnaires.splice(index,1);
                   }  
                 sessionStorage.setItem("questionnaires", JSON.stringify(questionnaires)) ;

                  return true;
                }else{
                    return false;
                }

   
    },
    getQuestionnaireById:function(id)
    {
                var questionnaires=[];
                var questionnairesStr = sessionStorage.getItem("questionnaires");
                if(questionnairesStr!=null&&questionnairesStr!="")
                {
                	questionnaires = JSON.parse(questionnairesStr);

                 let questionnaire=null;
                  $.each(questionnaires,function(i,item){
                    if(item.id==id)
                    {
                        questionnaire = item;
                        return ;
                    }
                  });
                return questionnaire;
                }else{
                    return null;
                }
    }

};