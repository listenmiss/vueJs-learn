<template>
    <div>
			<p>分值题</p>
			
			<div v-if="!editable">
			  <p>{{question.title}}</p>
			  <p class="range-field">
			      <label>分值：{{question.answer}}</label>
			      <input type="range" v-model="question.answer" min="0" max="100" />
			  </p>
			</div>
			
			<div v-else>
			  <input placeholder="请输入问题" class="form-control" :value="question.title" required required @blur="updateQuestionTitle($event.target.value)"/>
			  <div class="btns">
			    <button v-on:click="onSave" class="btn">保存</button>
			    <button v-on:click="onCancel" class= "btn">取消</button>
			  </div>
			</div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import * as types from '../../../../vuex/mutation-type'
export default{
   props:['editable','questionIndex','question'],
  name: 'questionScore',
  data () {
    return {
      userKey: 'listen'
    }
  },
      methods: {
         onSave:function()
        {
        	alert("save");
        },
        onCancel:function()
        {
        	
        },
         updateQuestionTitle(title)
        {
          let params={
            questionIndex:this.questionIndex,
            title:title
          };
          this.$store.commit(types.UPDATE_QUESTION_TITLE,params);

        },
        ...mapActions([
          'addQuestionOption',
          'delQuestionOption'
        ])
    }
}
</script>
