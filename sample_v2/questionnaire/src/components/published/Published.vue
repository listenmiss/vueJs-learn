<template>
	<div class = "published-container">
			    <questionnaire v-bind:questionnaire = "questionnaire"></questionnaire>
	</div>
</template>

<script>
import * as types from '../../vuex/mutation-type'
import Questionnaire from '../shared/questionnaire/Questionnaire.vue'
export default{
  name: 'published',
  data: function() {
    		var id = this.$route.params.id;
	    
	      this.$store.dispatch('getQuestionnaireById',{'id':id});
  
      return {
        "userKey":"listen",
        id:id
       
      };
	},
    components: {
    questionnaire: Questionnaire
    },
  computed:{
        questionnaire:function()
      {
          let questionnaire = this.$store.state.questionnaire;
          
         return questionnaire.questionnaire;
      } 
  },
   methods: {

  }
}
</script>
