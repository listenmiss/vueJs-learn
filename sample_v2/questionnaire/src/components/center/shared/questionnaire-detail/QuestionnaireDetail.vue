<template>
    <div>
			<!--判断变量是否为空-->
			<table v-if="questionnaire" class="table">
			    <tr>
			        <td>问卷标题：</td>
			        <td>{{questionnaire.title}}</td>
			    </tr>
			    <tr>
			        <td>问卷简介：</td>
			        <td>{{questionnaire.starter}}</td>
			    </tr>
			    <tr>
			        <td>问题总数：</td>
			        <td>{{questionnaire.questionList.length}}</td>
			    </tr>
			    <tr>
			        <td>创建时间：</td>
			        <td>{{questionnaire.createDate}}</td>
			    </tr>
	
			</table>
    </div>
</template>

<script>
import * as types from '../../../../vuex/mutation-type'
export default{
  props:['questionnaire'],
  name: 'questionnaireDetail'
}
</script>
