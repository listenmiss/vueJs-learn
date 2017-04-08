<template>
    <div>
    	{{questionnaire.title}}
			<span class="label" v-bind:class="stateClass">{{stateText}}</span>
			<span class="pull-right">{{questionnaire.createDate}}</span>
    </div>
</template>

<script>
import * as types from '../../../../vuex/mutation-type'
export default{
  props:['questionnaire'],
  name: 'questionnaireItem',
  data: function() {
			var stateClass = "";
			var stateText="";
	
			if(this.questionnaire.state === "Created") {
				stateText = '已创建';
				stateClass = 'label-warning';
			} else if(this.questionnaire.state === "Published") {
				stateText = '回收中';
				stateClass = 'label-info';
			} else if(this.questionnaire.state === "Finished") {
				stateText = '已结束';
				stateClass = 'label-success';
			}
			
		
		return {
			"stateClass": stateClass,
			"stateText": stateText,
      "userKey":"listen"
		}
		
	},
   methods: {

  }
}
</script>
