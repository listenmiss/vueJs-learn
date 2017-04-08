<template>
            <ul  class="question-controls list-group">
                <li  @click="questionSelectClick('Text')" class="list-group-item">
                    <a   class="icon-text">文本问题</a>
                </li>
                <li @click="questionSelectClick('SingleSelect')" class="list-group-item">
                    <a   class="icon-radio">单选问题</a>
                </li>
                <li @click="questionSelectClick('MultiSelect')"  class="list-group-item">
                    <a   class="icon-checkbox">多选问题</a>
                </li>
                <li  @click="questionSelectClick('Score')" class="list-group-item">
                    <a   class="icon-star">分值问题</a>
                </li>

            </ul>
</template>

<script>
import { mapActions } from 'vuex'
export default{
  name: 'questionSelect',
  data () {
    return {
      msg: 'questionSelect'
    }
  },
  methods:{
      ...mapActions([
          'questionSelectClick'
      ])
  }
}
</script>
<style scoped src="../../../../../static/css/question_select.css">

</style>
