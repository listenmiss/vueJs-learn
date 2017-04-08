<template>
	<div class="row" v-if="questionnaire">
		    <div class="col-lg-3">
		        <button type="button" class="btn btn-default btn-lg" @click="onPreview">
		            <span class="glyphicon glyphicon-search"></span>
		            <span class="control-text">预览</span>
		        </button>
		    </div>
		    <div class="col-lg-3" v-if="questionnaire.state==='Created'">
		        <button type="button" class="btn btn-default btn-lg" v-on:click="onEdit">
		            <span class="glyphicon glyphicon-pencil"></span>
		            <span class="control-text">编辑</span>
		        </button>
		    </div>
		    <div class="col-lg-3" v-if="questionnaire.state==='Created'">
		        <button type="button" class="btn btn-default btn-lg" @click="onPublish">
		            <span class="glyphicon glyphicon-plane"></span>
		            <span class="control-text">发布</span>
		        </button>
		    </div> 
		    <div class="col-lg-3" v-if="questionnaire.state==='Published'">
		        <button type="button" class="btn btn-default btn-lg">
		            <span class="glyphicon glyphicon-ok"></span>
		            <span class="control-text">结束</span>
		        </button>
		    </div>
		    <div class="col-lg-3">
		        <button type="button" class="btn btn-default btn-lg" v-on:click="onDelete">
		            <span class="glyphicon glyphicon-trash"></span>
		            <span class="control-text">删除</span>
		        </button>
		    </div>
		</div>
</template>

<script>
import * as types from '../../../../vuex/mutation-type'
export default{
  props:['questionnaire'],
  name: 'questionnaireControls',
  data: function() {
		return {
            "userKey":"listen"
		}
		
	},
   methods: {
    onPreview:function()
    {
	  var id = this.questionnaire.id;
	  this.$router.push({name:"published",params:{id:id},query:{type:"preview"}});//小心这里是this.$router  rrrrrrrr
		
    },
    onDelete:function()
    {
         this.$store.dispatch('delQuestionnaire',{'id':this.questionnaire.id});
         
    }
  }
}
</script>
