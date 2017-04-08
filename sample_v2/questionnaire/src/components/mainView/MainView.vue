<template>
  <div id="mainView">
       <questionnaire-header></questionnaire-header>
       <router-view></router-view>
   </div>
</template>

<script>
import QuestionnaireHeader from '../shared/header/QuestionnaireHeader.vue'

export default {
  name: 'mainView',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    questionnaireHeader: QuestionnaireHeader
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
