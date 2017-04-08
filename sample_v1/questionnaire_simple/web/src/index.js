
//var Login = Vue.extend({
//    template:'<h1>This is the login page</h1>'
//});





//创建根组件
var App = Vue.extend({
    
});
var router = new VueRouter();
router.map({
	'/':{
        component: Login       
    },
    '/main':{
        component:Main,
//        children:[   //v2.0
               subRoutes:{  
                '/home':{
                    component:Home
                },'/center':{
                    component:Center
                },
                '/about':{
                    component:About
                },
                '/edit':{
                    component:Edit
                }
               }
    },
    '/published/:id':{
    	 name:'published',  //具名路由，即给路由取名字，这里必须使用
    	 component:Published
    }
    

});

router.start(App,'#app');