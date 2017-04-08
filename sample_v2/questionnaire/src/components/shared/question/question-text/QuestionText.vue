<template>
    <div>
    		<div v-if="!editable">
		  <p>{{question.title}}</p>
		  <input placeholder="请输入问题的答案" class="form-control" v-model="question.answer" />
		</div>
		
		<div v-if="editable">
		  <input placeholder="请输入问题" class="form-control" :value="question.title" required @blur="updateQuestionTitle($event.target.value)"/>
		  <div class="btns">
		    <button @click="onSave" class="btn">保存</button>
		    <button @click="onCancel" class= "btn">取消</button>
		  </div>
		</div>
    </div>
</template>

<script>
import * as types from '../../../../vuex/mutation-type'
export default{
   props:['editable','questionIndex','question'],
  name: 'questionText',
  data () {
    return {
      userKey: 'listen'
    }
  },
      methods: {
        onSave: function ()
        {
        	console.log(this.question.title);
           alert("保存成功！");
        },
         onCancel: function ()
        {
        	this.question.title="";
        },
        updateQuestionTitle(title)
        {
          let params={
            questionIndex:this.questionIndex,
            title:title
          };
          this.$store.commit(types.UPDATE_QUESTION_TITLE,params);

        }
        
    }
}
</script>
