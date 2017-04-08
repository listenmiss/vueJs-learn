<template>
    <div>
                <div  class="questionnaire-container">
                <div  class="questionnaire">
                	<h1 v-if="!editable" class="text-center">{{questionnaire.title}}</h1>
                    <h1  v-else class="text-center">
                        <input  class="form-control" placeholder="问卷标题" v-bind:value="questionnaire.title" @change="saveQuestionnaireTitle($event.target.value)">
                    </h1>
                    <p v-if="!editable" class="text-center">{{questionnaire.starter}}</p>
                    <p v-else class="text-center">
                        <input  class="form-control" placeholder="开头欢迎语" :value="questionnaire.starter"  @change="saveQuestionnaireStarter($event.target.value)">
                    </p>
                    <ul >
                        <li v-for="(q,i) in questionnaire.questionList">
                            <label>第{{i + 1}}题：</label>
                            <div v-if="q.type === 'Text' ">
                                <question-text v-bind:editable="editable" v-bind:question="q"  :questionIndex="i"></question-text>
                            </div>
                            <div v-if="q.type === 'SingleSelect'" >
                                <question-radio v-bind:editable="editable" v-bind:question="q" :questionIndex="i"></question-radio>
                            </div>
                            <div v-if="q.type === 'MultiSelect' ">
                                <question-checkbox v-bind:editable="editable" v-bind:question="q" :questionIndex="i"></question-checkbox>
                            </div>
                            <div v-if="q.type === 'Score' ">
                                <question-score v-bind:editable="editable" v-bind:question="q" :questionIndex="i"></question-score>
                            </div>
                        </li>

                    </ul>
			        <p v-if="!editable" class="text-center">{{questionnaire.ending}}</p>
			        <p v-else class="text-center">
			            <input placeholder="结尾感谢语" class="form-control" :value="questionnaire.ending" @change="saveQuestionnaireEnding($event.target.value)"/>
			        </p>
                </div>
            </div>
            <div  class="text-center"> 
                <button  class="btn btn-primary" type="button" v-bind:style="questionnaire.submitStyle" v-on:click="onSubmit">
                	{{isPreviewPage?"返回":"提交"}}
                </button>
            </div>
    </div>
</template>

<script>
import * as types from '../../../vuex/mutation-type'
import { mapMutations } from 'vuex'
import QuestionText from '../question/question-text/QuestionText.vue'
import QuestionRadio from '../question/question-radio/QuestionRadio.vue'
import QuestionCheckbox from '../question/question-checkbox/QuestionCheckbox.vue'
import QuestionScore from '../question/question-score/QuestionScore.vue'

export default{
  name: 'questionnaire',
  props:['questionnaire'],
  data:   function ()
     {
                var editable  = false;
                var submitStyle={
                	display:'none'
                };
                var isPreviewPage = false;
                
                editable=this.questionnaire && this.questionnaire.state == "Created";
                if(this.questionnaire && this.questionnaire.state == "Created")
                {
                	submitStyle.display='inline'
                }
                
                
                if(this.$route.query.type ==="preview")//小心这里是this.$route
                {
                	isPreviewPage=true;
                }
                return {
                  "editable":editable,
                  "isPreviewPage":isPreviewPage,
                  "submitStyle":submitStyle,
                   userKey:"listen"
                }
   },
  components: {
     questionText: QuestionText,
     questionRadio:QuestionRadio,
     questionCheckbox:QuestionCheckbox,
     questionScore:QuestionScore
    },
    methods:{

        saveQuestionnaireTitle(title)
        { 
            this.$store.commit(types.SAVE_QUESTIONNAIRE_TITLE,title)
        },
         saveQuestionnaireStarter(starter)
        { 
            this.$store.commit(types.SAVE_QUESTIONNAIRE_STARTER,starter)
        },saveQuestionnaireEnding(ending)
        { 
            this.$store.commit(types.SAVE_QUESTIONNAIRE_ENDING,ending)
        },onSubmit: function ()
        {
            if(!this.isPreviewPage)
            {
               let flag = this.$store.dispatch('createQuestionnaire',this.userKey);
               if(flag)
               {
                 alert("保存成功！");
               }else{
                  alert("保存失败！");
               }
              this.$router.push({path:"/mainView/center"});//小心这里是this.$router
            }else{
             this.$router.go(-1);
            }
            
           
        }
    }         
}
</script>
<style scoped src="../../../../static/css/questionnaire.css">

</style>
