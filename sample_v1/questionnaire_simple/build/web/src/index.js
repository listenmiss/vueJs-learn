
//var Login = Vue.extend({
//    template:'<h1>This is the login page</h1>'
//});





//创建根组件
var App = Vue.extend({
    
});
var router = new VueRouter();
router.map({
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
    '/':{
        component: Login       
    }
});

router.start(App,'#app');