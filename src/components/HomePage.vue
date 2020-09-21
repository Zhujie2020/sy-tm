<template>
  <div class="box">


    <div class="titleBox">
        <div class="titleTopBox">
            <div class="titleTop">
                <img src="../assets/home分类icon.png" class="icon">
                <img src="http://gw.alicdn.com/tfs/TB1wQw8qamWBuNjy1XaXXXCbXXa-237-41.png_240x10000.jpg_.webp" class="titleTop-img">
                <span class="titleTop-login">登录</span>
            </div>
        </div>

        <div class="titleBottomBox">
          <div class="titleBottom">
              <img src="../assets/home放大镜.png" alt="">
              <span>搜索商品、 品牌</span>
          </div>
        </div>
    </div>  <!--顶部title-->

    <div class="iconListBox">
        <div class="iconList-item">
            <img src="//gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp">
            <p>苏宁易购</p>
        </div>
        <div class="iconList-item">
            <img src="//gw.alicdn.com/tfs/TB1wSoFa5qAXuNjy1XdXXaYcVXa-196-196.png?avatar=1_110x10000.jpg_.webp" alt="">
            <p>天猫超市</p>
        </div>
        <div class="iconList-item">
            <img src="//gw.alicdn.com/tfs/TB1Jc0fSFXXXXXTapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp" alt="">
            <p>天猫国际</p>
        </div>
        <div class="iconList-item">
            <img src="//gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp" alt="">
            <p>聚划算</p>
        </div>
        <div class="iconList-item">
            <img src="//gw.alicdn.com/tfs/TB12CFXSFXXXXcpapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp" alt="">
            <p>分类</p>
        </div>
      
    </div><!--搜索框下面的icon分类-->




   
      <swiper ref="mySwiper" :options="swiperOptions" class="swiperBox">
        <swiper-slide>
          <img src="//gw.alicdn.com/tfs/TB17emto4n1gK0jSZKPXXXvUXXa-1035-390.png_790x10000.jpg_.webp" class="swiperImg">
        </swiper-slide>

        <swiper-slide>
          <img src="//img.alicdn.com/tps/i4///img.alicdn.com/tps/i4//TB1ZWfRVkT2gK0jSZFkSuwIQFXa.jpg_790x10000Q75.jpg_.webp" class="swiperImg">
        </swiper-slide>

        <swiper-slide>
          <img src="//gw.alicdn.com/tps/i4/TB1KKaeKUz1gK0jSZLeSuv9kVXa.jpg_790x10000Q75.jpg_.webp" class="swiperImg">
        </swiper-slide>

        <swiper-slide>
          <img src="//gw.alicdn.com/imgextra/i4/1450847/O1CN012SbcFB1I7y5dQMPBv_!!1450847-0-lubanu.jpg_790x10000Q75.jpg_.webp" class="swiperImg">
        </swiper-slide>

        <swiper-slide>
          <img src="//gw.alicdn.com/imgextra/i3/1453939/O1CN01Lgt2bz1ey6j5KouAT_!!1453939-0-lubanu.jpg_790x10000Q75.jpg_.webp" class="swiperImg">
        </swiper-slide>

        <swiper-slide>
          <img src="//gw.alicdn.com/imgextra/i2/1450847/O1CN01aM3TKr1I7y5i6X7Ad_!!1450847-0-lubanu.jpg_790x10000Q75.jpg_.webp" class="swiperImg">
        </swiper-slide>

        <swiper-slide>
          <img src="//gw.alicdn.com/imgextra/i3/1450847/O1CN01U3rcpO1I7y5isyMue_!!1450847-0-lubanu.jpg_790x10000Q75.jpg_.webp" class="swiperImg">
        </swiper-slide>

        <swiper-slide>
          <img src="//gw.alicdn.com/imgextra/i1/1453939/O1CN01jePyfg1ey6izvJhO7_!!1453939-0-lubanu.jpg_790x10000Q75.jpg_.webp" class="swiperImg">
        </swiper-slide>

        <swiper-slide>
          <img src="//gw.alicdn.com/imgextra/i2/1453939/O1CN01IkPNQn1ey6jAkbouO_!!1453939-0-lubanu.jpg_790x10000Q75.jpg_.webp" class="swiperImg">
        </swiper-slide>
        
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
   
  





    <div>天猫app新人的红包</div>   <!--天猫app新人的红包-->
    <div>限时抢购</div>   <!--限时抢购-->
    <div>猜你喜欢</div>   <!--猜你喜欢-->
  </div>
</template>

<script>
export default {
   data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
          loop:true,
          autoplay:true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* 首页顶部 */
.icon{
  width: 30px;
}
.box{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titleBox{
  width: 100%;
  display: flex;
  flex-direction:column;
  position: relative;
}
.titleTopBox{
  height: 44px;
  display: flex;
  justify-content: center;
  background-color:#FF0036;
}
.titleTop{
   width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.titleTop-img{
  width: 118.5px;
  height: 20.5px;
}
.titleTop-login{
  color: white;
  font-size: 14px;
  padding-right: 8px;
}
.titleBottomBox{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  background-color:#FF0036;
  padding: 20px 0 30px 0;
}
.titleBottom{
  width: 96%;
  height: 36px;
  background-color:white ;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
.titleBottom img{
  width: 20px;
  margin-left: 10px;
}
.titleBottom span{
  font-size: 14px;
  color: rgba(0, 0, 0,.3);
  margin-left: 10px;
}

/* 搜索框下面的icon分类 */

.iconListBox{
  width: 95%;
  height: 77px;
  display: flex;
  justify-content: space-between;
}
.iconList-item{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.iconList-item img{
width: 48px;
height: 48px;
}
.iconList-item p{
  font-size: 13px;
}

/* swiper */

  
.swiperBox{
  width: 95%;
  height: 132px;
  background-color: skyblue;
}
.swiperImg{
  width: 100%;
  height: 100%;
}




</style>
