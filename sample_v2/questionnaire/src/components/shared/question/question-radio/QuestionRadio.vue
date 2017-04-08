<template>
    <div>
      <p>单选题</p>
			<div v-if="!editable">
			    <p>{{question.title}}</p>
			    <div v-for="option in question.options" class="radio">
			        <label>
			            <input name="group" type="radio" :id="option.key">{{option.value}}
			        </label>
			    </div>
			</div>
			<div v-else>
			    <input placeholder="请输入问题" class="form-control" :value="question.title" required  @blur="updateQuestionTitle($event.target.value)" />
			    <div class="row pt-20" v-for="(option,i) in question.options">
			        <div class="col-lg-10">
			            <input placeholder="请填写选项" class="form-control" :value="option.value"  @blur="updateQuestionOptionVaule(i,$event.target.value)" type="text" />
			        </div>
			        <div class="col-lg-2">
			            <span  v-if="question.options.length > 0" class="del-icon" v-on:click="delQuestionOption(i)">X</span>
			        </div>
			    </div>
			   <div class="btns">
			    <button @click="onSave" class="btn btn-default">保存</button>
			     <button @click="addQuestionOption" class="btn btn-default">添加选项</button>
			    <button @click="onCancel" class= "btn btn-default">取消</button>
			  </div>
			</div>
    </div>
</template>

<script>
import * as types from '../../../../vuex/mutation-type'
export default{
   props:['editable','questionIndex','question'],
  name: 'questionRadio',
  data () {
    return {
      userKey: 'listen'
    }
  },
      methods: {
         updateQuestionTitle(title)
        {
          let params={
            questionIndex:this.questionIndex,
            title:title
          };
          this.$store.commit(types.UPDATE_QUESTION_TITLE,params);

        },
                updateQuestionOptionVaule(optionIndex,value)
        {
          let params={
            questionIndex:this.questionIndex,
            optionIndex:optionIndex,
            value:value
          };
          this.$store.commit(types.UPDATE_QUESTION_OPTION_VALUE,params);

        },
          addQuestionOption:function()
        {
           this.$store.dispatch('addQuestionOption',this.questionIndex);
        },
        delQuestionOption:function(i)
        {
           this.$store.dispatch('delQuestionOption',this.questionIndex,i);
        },
         onSave:function()
        {
        	alert("save");
        },
        onCancel:function()
        {
        	
        }
        

        


    }
}
</script>
