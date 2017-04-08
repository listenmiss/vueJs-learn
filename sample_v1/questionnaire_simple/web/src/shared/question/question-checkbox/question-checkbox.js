
//注册组件实例

var QuestionCheckbox = Vue.extend({
     props:['editable','question'],
    template: "#question_checkbox",
    data:
            function ()
            {
                return {

                }
            }
    ,
    methods: {
        setSelectedValue: function (checked,value)
        {

        }, onDeleteOption: function (index)
        {
            if(this.question.options.length <= 1) {
		      return;
		    }
		
		    this.question.options.splice(index, 1);
        },onAddOption:function()
        {
        	var key=0;
        	if(this.question.options!=null&&this.question.options.length>0)
        	{
        		key=this.question.options.length
        	}
        	this.question.options.push(
        		{
        			"key": key, 
        			"value":'' }
        		);
        },onSave:function()
        {
        	alert("save");
        },
        onCancel:function()
        {
        	alert("onCancel");
        }
    }
});

Vue.component('question-checkbox', QuestionCheckbox);








