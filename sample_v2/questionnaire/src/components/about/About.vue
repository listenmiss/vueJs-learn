<template>
<div style="margin:5px">
                <div class="panel panel-success" v-for="(item,index) in aboutListData">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a class="accordion-toggle" href="" tabindex="0">
                                <span>{{item.title}}</span>
                            </a>
                        </h4>
                    </div>
                    <div class="panel-collapse collapse in" aria-expanded="true" aria-hidden="false" style="overflow: visible; height: auto; display: block;">
                        <div class="panel-body">
                            <div  class="row">
                                <div class="col-lg-3">
                                    <img  v-bind:src="item.img"  v-bind:alt="item.title">
                                </div>
                                <div  class="col-lg-9">
                                    问卷，共有三种创建问卷的方式让您来选择使用：创建空白问卷、选择问卷模板、文本编辑器，可根据自身的使用习惯，选择最合适的方式来快速创建一份问卷。
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
</div>
      
</template>

<script>
import { mapGetters} from 'vuex'
export default{
  name: 'about',
  data: function(){
    return {
    }
  },
  created:function(){
    this.$store.dispatch('getAboutList');
  },
  computed:{
      ...mapGetters([
        'aboutListData'
      ])
    
  }
}
</script>
