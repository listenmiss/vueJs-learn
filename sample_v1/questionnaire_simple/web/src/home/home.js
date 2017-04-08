var Home = Vue.extend({
    template: '#home',
    route:{
    	canActivate:function(transition)
    	{
    		console.log('canActivate');
    		transition.next();

//          alert("请先登录");
//          transition.abort();
    	}
    }
})

