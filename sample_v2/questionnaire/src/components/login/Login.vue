<template>
            <div class="login_bg">
                <div class="signin">
                    <div class="signin-head"><img src="../../../static/img/login/test/head_120.png" alt="" class="img-circle"></div>
                    <form class="form-signin" role="form">
                        <input type="text" class="form-control" placeholder="用户名" required autofocus />
                        <input type="password" class="form-control" placeholder="密码" required />
                        <!--<a v-link="{ path:'/mainView/home'}" > <button class="btn btn-lg btn-warning btn-block" type="submit">登录</button></a> v1.0-->
                        <router-link to='/mainView/home' > <button class="btn btn-lg btn-warning btn-block" type="submit">登录</button></router-link>
                        <label class="checkbox">
                            <input type="checkbox" value="remember-me"> 记住我
                        </label>
                    </form>
                </div>
            </div>
</template>

export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
/*body {
        background:url(../img/login/login_bg_0.jpg) #f8f6e9;
}*/
.login_bg{
    width:100%;
    height:100%;
    position: absolute;
    /*background:url(../../../static/img/login/login_bg_0.jpg) #f8f6e9;*/
   background-color: rgba(107, 203, 185, 0.57);
}

.signin {
    width:477px;
    height:479px;
    background:url(../../../static/img/login/login_bg.png) no-repeat;
    margin:0 auto;

    position:absolute;
    top:50%;
    left:50%;
    margin-top:-239px;
    margin-left:-238px;
}
.signin-head {
    margin:0 auto;
    padding-top:30px;
    width:120px;
}
.form-signin {
    max-width: 330px;
    padding: 43px 15px 15px 15px;
    margin: 0 auto;
}
.form-signin .checkbox {
    margin-bottom: 10px;
}
.form-signin .checkbox {
    font-weight: normal;
}
.form-signin .form-control {
    position: relative;
    font-size: 16px;
    height: auto;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.form-signin .form-control:focus {
    z-index: 2;
}
.form-signin input[type="text"] {
    margin-bottom: 14px;
    border-radius: 0;
    background: url(../../../static/img/login/login_user.png) 0 0 #bdbdbd no-repeat;
    padding-left:60px;
    color:#FFFFFF;
}
.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-radius: 0;
    background: url(../../../static/img/login/login_pas.png) 0 0 #bdbdbd no-repeat;
    padding-left:60px;
    color:#FFFFFF;
}
.form-signin button {
    border-radius: 0;
}
</style>
