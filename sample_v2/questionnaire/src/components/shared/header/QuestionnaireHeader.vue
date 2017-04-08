<template>
            <nav class="navbar navbar-inverse">
              <div class="container-fluid">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>

                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li> <router-link to='/mainView/home'>首页</router-link> </li>
                                <li> <router-link to='/mainView/center'>我的问卷</router-link> </li>
                                <li> <router-link to='/mainView/about'>帮助</router-link></li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                <li><router-link to='/mainView/edit'>创建新问卷</router-link></li>
                                <li> <router-link to='/'>注册</router-link></li>
                                <li> <router-link to='/'>登录</router-link></li>

                            </ul>
                        </div><!-- /.navbar-collapse -->
                </div>
            </nav>
</template>

<script>
export default{
  name: 'questionnaireHeader',
  data () {
    return {
      msg: 'header'
    }
  }
}
</script>
