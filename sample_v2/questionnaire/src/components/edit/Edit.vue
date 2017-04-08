<template>
            <div style="margin:5px">
                <div class="row">
                    <div class="col-md-3"  >
                        <ul id="myTab" class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active">
                                <a href="#question-select" id="question-select-tab" role="tab" data-toggle="tab" aria-controls="question-select" aria-expanded="true">
                                    问题控件
                                </a>
                            </li>

                            <li role="presentation" >
                                <a href="#questionnaire-outline" id="questionnaire-outline-tab" role="tab" data-toggle="tab" aria-controls="questionnaire-outline" aria-expanded="false">
                                    问卷大纲
                                </a>
                            </li>
                        </ul>
                        <div id="myTabContent" class="tab-content">

                            <div role="tabpanel" class="tab-pane fade active in" id="question-select" aria-labelledby="question-select-tab">
                                <question-select></question-select>
                            </div> 

                            <div role="tabpanel" class="tab-pane fade  in" id="questionnaire-outline" aria-labelledby="questionnaire-outline-tab">
                                问卷大纲
                            </div> 
                        </div>
                    </div>
                    <div class="col-md-9 questionnaire-container">
                      <questionnaire v-bind:questionnaire="questionnaire"></questionnaire>
                    </div>
                </div>
            </div>
</template>

<script>
import QuestionSelect from './shared/question-select/QuestionSelect.vue'
import Questionnaire from '../shared/questionnaire/Questionnaire.vue'
import { mapActions } from 'vuex'
export default{
  name: 'edit',
  data () {
    return {
      userKey:"listen"
    }
  },
  created:function () {
    this.$store.dispatch('setQuestionnaireEmpty');
 },
  components: {
    questionSelect: QuestionSelect,
    questionnaire: Questionnaire
    },
  computed:{
      questionnaire:function()
      {
          let questionnaire = this.$store.state.questionnaire;
          
         return questionnaire.questionnaire;
      } 
  }
}
</script>
<style scoped src="../../../static/css/edit.css">

</style>
