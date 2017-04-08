<template>
            <div style="margin:5px">
                <div class="row">
                    <div class="col-md-7"  >
                        <div  class="panel panel-success">
                            <div  class="panel-heading">问卷列表</div>
                            <div  class="list-group">
			                <a class="list-group-item questionnaire-item" v-for=" (item,i) in userQuestionnaireList"
			                    @click="onSelect(item, i)" v-bind:class="{'active':item===selectedQuestionnaire}">
			                    <questionnaire-item v-bind:questionnaire="item"></questionnaire-item>
			                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">

                        <div  class="panel panel-success">
                            <div  class="panel-heading">问卷详情</div>
                            <div  class="panel-body">
                                <questionnaire-detail v-bind:questionnaire="selectedQuestionnaire"></questionnaire-detail>
                            </div>
                        </div>

                        <div  class="panel panel-warning">
                            <div  class="panel-heading">问卷管理</div>
                            <div  class="panel-body">
                              <questionnaire-controls v-bind:questionnaire="selectedQuestionnaire"></questionnaire-controls>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
</template>

<script>
import QuestionnaireItem from './shared/questionnaire-item/QuestionnaireItem.vue'
import QuestionnaireDetail from './shared/questionnaire-detail/QuestionnaireDetail.vue'
import QuestionnaireControls from './shared/questionnaire-controls/QuestionnaireControls.vue'
import { mapGetters } from 'vuex'
export default{
  name: 'center',
  data () {
    return {
      userKey: 'listen',
      selectedQuestionnaire:{}
    }
  },
  created () {
    
     this.$store.dispatch('getUserQuestionnaireList',{'userKey':this.userKey});
     this.selectedQuestionnaire = this.userQuestionnaireList[0];

  },
  components:{
    questionnaireItem:QuestionnaireItem,
    questionnaireDetail:QuestionnaireDetail,
    questionnaireControls:QuestionnaireControls
  },
  computed:{
    ...mapGetters([
      'userQuestionnaireList'
    ])
  },methods:{
			onSelect: function(questionnaire, index) {
			    this.selectedQuestionnaire = questionnaire;
		      this.selectedIndex = index;
			}
  }
}
</script>
