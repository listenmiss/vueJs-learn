
//注册组件实例

var QuestionText = Vue.extend({
    props:['editable'],
    template: "<p>问答题</p>\n\
<div>\n\
<p>问题标题</p>\n\
<input class='form-control' disabled='disabled' placeholder='请输入问题的答案'>\n\
<div class='btns'></div>\n\
<button class='btn btn-default'>编辑</button>\n\
<button class='btn btn-default'>删除</button>\n\
</div>",
    data:
            function ()
            {            
                return {
                   
                }
            }
    ,
    methods: {
        questionClick: function (event)
        {
           
        }
    }
});

Vue.component('question-text', QuestionText);






