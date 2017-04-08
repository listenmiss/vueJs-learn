<template>
     <div>
            <div id="myCarousel" class="carousel slide">
                <!-- 轮播（Carousel）指标 -->
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>   
                <!-- 轮播（Carousel）项目 -->
                <div class="carousel-inner">
                    <div class="item active">
                        <img src="../../../static/img/home/banner_01.jpg" alt="First slide">
                        <div  class="carousel-caption">
                            <p >免费简约的问卷系统</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="../../../static/img/home/banner_02.jpg" alt="First slide">
                        <div  class="carousel-caption">
                            <p >简单 好用 在线调查网站</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="../../../static/img/home/banner_03.jpg" alt="First slide">
                        <div  class="carousel-caption">
                            <p >多方式创建编辑问卷</p>
                        </div>
                    </div>
                </div>
                <!-- Controls -->
                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>

            </div>
             <section >
                <h2  class="hero-title ">
                    <span >10,145,267</span>个用户正在使用
                   <router-link to='/mainView/edit'> <a class="btn btn-success btn-lg"  >创建新问卷</a></router-link>
                </h2>
            </section>
  </div>     
            
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../../../static/css/home.css">

</style>
