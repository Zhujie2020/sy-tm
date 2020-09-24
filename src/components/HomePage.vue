<template>
  <div class="box">
    <div class="titleBox" :style="'height:'+titleBoxH+'%'">
      <div class="titleTopBox">
        <div class="titleTop">
          <img src="../assets/home分类icon.png" class="icon" @click="goClassify" />

          <transition name="titleDis">
            <img
              src="http://gw.alicdn.com/tfs/TB1wQw8qamWBuNjy1XaXXXCbXXa-237-41.png_240x10000.jpg_.webp"
              class="titleTop-img"
            v-show="showTitle" />
          </transition>


          <span class="titleTop-login">登录</span>
        </div>
      </div>
  <transition name="searchMove">
      <div class="titleBottomBox" :style="'top:'+searchTop+'px;transform: scale('+searchScale+');'">
        <div class="titleBottom" @click="searchDetail">
          <img src="../assets/home放大镜.png" alt />
          <span>搜索商品、 品牌</span>
        </div>
      </div>
  </transition>

    </div>
    <!--顶部title-->
    <div class="appBottom" @scroll="scrollEvent">
      <div class="iconListBox">
        <a
          href="https://suning.m.tmall.com/?refer=https%3A%2F%2Fwww.tmall.com%2F%3Fali_trackid%3D2%3Amm_26632258_3504122_55934697%3A1600737499_104_1470935868%26clk1%3D5592bb01bd3bcfe7b4f10f662e0c216d%26upsid%3D5592bb01bd3bcfe7b4f10f662e0c216d%26bxsign%3Dtbk1600737499175f5c73ece20145898a104659583359544&pos=1&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547149173937_1699747&spm=a211ue.11501597.icon.1"
          class="iconList-item"
        >
          <img
            src="//gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"
          />
          <p>苏宁易购</p>
        </a>
        <a
          href="https://chaoshi.m.tmall.com/?pos=2&acm=201704071.1003.64.1699747&_ig=shoumao&scm=1003.64.201704071.OTHER_1545931209467_1699747&spm=a211ue.11501597.icon.2"
          class="iconList-item"
        >
          <img
            src="//gw.alicdn.com/tfs/TB1wSoFa5qAXuNjy1XdXXaYcVXa-196-196.png?avatar=1_110x10000.jpg_.webp"
            alt
          />
          <p>天猫超市</p>
        </a>
        <a
          href="https://pages.tmall.com/wow/jinkou/act/zhiyingchaoshi?from=zebra:offline"
          class="iconList-item"
        >
          <img
            src="//gw.alicdn.com/tfs/TB1Jc0fSFXXXXXTapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"
            alt
          />
          <p>天猫国际</p>
        </a>
        <a href="https://jhs.m.taobao.com/" class="iconList-item">
          <img
            src="//gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp"
            alt
          />
          <p>聚划算</p>
        </a>
        <a href class="iconList-item">
          <img
            src="//gw.alicdn.com/tfs/TB12CFXSFXXXXcpapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"
            alt
          />
          <p>分类</p>
        </a>
      </div>
      <!--搜索框下面的icon分类-->

      <swiper ref="mySwiper" :options="swiperOptions" class="swiperBox">
        <swiper-slide>
          <img
            src="//gw.alicdn.com/tfs/TB17emto4n1gK0jSZKPXXXvUXXa-1035-390.png_790x10000.jpg_.webp"
            class="swiperImg"
          />
        </swiper-slide>

        <swiper-slide>
          <img
            src="//img.alicdn.com/tps/i4///img.alicdn.com/tps/i4//TB1ZWfRVkT2gK0jSZFkSuwIQFXa.jpg_790x10000Q75.jpg_.webp"
            class="swiperImg"
          />
        </swiper-slide>

        <swiper-slide>
          <img
            src="//gw.alicdn.com/tps/i4/TB1KKaeKUz1gK0jSZLeSuv9kVXa.jpg_790x10000Q75.jpg_.webp"
            class="swiperImg"
          />
        </swiper-slide>

        <swiper-slide>
          <img
            src="//gw.alicdn.com/imgextra/i4/1450847/O1CN012SbcFB1I7y5dQMPBv_!!1450847-0-lubanu.jpg_790x10000Q75.jpg_.webp"
            class="swiperImg"
          />
        </swiper-slide>

        <swiper-slide>
          <img
            src="//gw.alicdn.com/imgextra/i3/1453939/O1CN01Lgt2bz1ey6j5KouAT_!!1453939-0-lubanu.jpg_790x10000Q75.jpg_.webp"
            class="swiperImg"
          />
        </swiper-slide>

        <swiper-slide>
          <img
            src="//gw.alicdn.com/imgextra/i2/1450847/O1CN01aM3TKr1I7y5i6X7Ad_!!1450847-0-lubanu.jpg_790x10000Q75.jpg_.webp"
            class="swiperImg"
          />
        </swiper-slide>

        <swiper-slide>
          <img
            src="//gw.alicdn.com/imgextra/i3/1450847/O1CN01U3rcpO1I7y5isyMue_!!1450847-0-lubanu.jpg_790x10000Q75.jpg_.webp"
            class="swiperImg"
          />
        </swiper-slide>

        <swiper-slide>
          <img
            src="//gw.alicdn.com/imgextra/i1/1453939/O1CN01jePyfg1ey6izvJhO7_!!1453939-0-lubanu.jpg_790x10000Q75.jpg_.webp"
            class="swiperImg"
          />
        </swiper-slide>

        <swiper-slide>
          <img
            src="//gw.alicdn.com/imgextra/i2/1453939/O1CN01IkPNQn1ey6jAkbouO_!!1453939-0-lubanu.jpg_790x10000Q75.jpg_.webp"
            class="swiperImg"
          />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <a
        href="https://pages.tmall.com/wow/mit/act/download?mmstat=tb_homepage&src=tb_homepage&pos=1&acm=201809173.1003.2.8467293&scm=1003.2.201809173.OTHER_1596879715822_8467293&spm=a211ue.11501597.newerBanner.0"
        class="redPackets"
      ></a>
      <!--天猫app新人的红包-->

      <div class="flashSale">
        <div class="flashSale-item">
          <span class="flashSale-item-titleL">限时特价</span>
          <span class="flashSale-item-titleR">为你精选</span>

          <a
            href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10002298903836,10002262006225&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1"
            class="flashSale-item-top timeShop"
          >
            <span>限时抢购</span>
            <div class="countdown">
              <span>{{hou}}</span>
              <i>:</i>
              <span>{{min}}</span>
              <i>:</i>
              <span>{{sec}}</span>
            </div>
          </a>
          <a
            href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10002298903836,10002262006225&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1"
            class="flashSale-item-bottom"
          >
            <img
              src="//gw.alicdn.com/i1/2930255252/O1CN01uVjImy1ofSiHBe4Sh_!!2-item_pic.png_170x10000.jpg_.webp"
              alt
            />
            <img
              src="//gw.alicdn.com/bao/upload/TB1CFE.f5cKOu4jSZKbXXc19XXa.png_170x10000.jpg_.webp"
              alt
            />
          </a>
        </div>
        <div class="flashSale-item">
          <span class="flashSale-item-titleL">温暖de家</span>
          <span class="flashSale-item-titleR">好货必买</span>

          <a
            href="https://pages.tmall.com/wow/fushi/act/hw2019-8?wh_biz=tm&wh_weex=true&itemId=625943685504,10008234286&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.5"
            class="flashSale-item-top"
          >
            <span>天猫好物</span>
          </a>
          <a
            href="https://pages.tmall.com/wow/fushi/act/hw2019-8?wh_biz=tm&wh_weex=true&itemId=625943685504,10008234286&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.5"
            class="flashSale-item-bottom"
          >
            <img
              src="//gw.alicdn.com/tps/i2/1105025069/TB2SkVjpS8YBeNkSnb4XXaevFXa_!!1105025069.png_170x10000.jpg_.webp"
              alt
            />
            <img
              src="//gw.alicdn.com/tps/bao/upload/TB12n6GEkL0gK0jSZFxXXXWHVXa.png_170x10000.jpg_.webp"
              alt
            />
          </a>
        </div>
        <div class="flashSale-item">
          <span class="flashSale-item-titleL">15天低价</span>
          <span class="flashSale-item-titleR titleR">满100元减10</span>

          <a href="https://jhs.m.taobao.com/" class="flashSale-item-top">
            <span>聚划算</span>
          </a>
          <a href="https://jhs.m.taobao.com/" class="flashSale-item-bottom">
            <img
              src="//gw.alicdn.com/tps/TB2vsJKz3aTBuNjSszfXXXgfpXa_!!17-2-luban.png_170x10000.jpg_.webp"
              alt
            />
            <img
              src="//gw.alicdn.com/tps/O1CN01mZGMrY1CVt4O6uW0t_!!87-2-lubanu.png_170x10000.jpg_.webp"
              alt
            />
          </a>
        </div>
        <div class="flashSale-item">
          <span class="flashSale-item-titleL">人气爆款</span>
          <span class="flashSale-item-titleR">大牌直降</span>

          <a
            href="https://market.m.taobao.com/app/tmall-wireless/tmsale/pages/home?wh_weex=true&wx_navbar_hidden=true&items=610417262837,601137725221&spm=a211ue.11501597.flash_sale.6#/main"
            class="flashSale-item-top"
          >
            <span>天猫闪降</span>
          </a>
          <a
            href="https://market.m.taobao.com/app/tmall-wireless/tmsale/pages/home?wh_weex=true&wx_navbar_hidden=true&items=610417262837,601137725221&spm=a211ue.11501597.flash_sale.6#/main"
            class="flashSale-item-bottom"
          >
            <img
              src="//gw.alicdn.com/tps/bao/upload/TB1EQ_CFqL7gK0jSZFBXXXZZpXa.png_170x10000.jpg_.webp"
              alt
            />
            <img
              src="//gw.alicdn.com/tps/i1/3465264485/O1CN01Ms35sO1j0AwEEXAs0_!!2-item_pic.png_170x10000.jpg_.webp"
              alt
            />
          </a>
        </div>
      </div>
      <!--限时抢购-->
      <div class="youLike">
        <p>猜你喜欢</p>
        <div class="youLike-bottom">
          <div class="youLike-item" v-for="item in list" :key="item.id" @click="goDetail(item.id)">
            <a href="javascript:void(0)" class="youLike-item-box">
              <span class="youLike-item-img">
                <img :src="item.img" alt />
              </span>
              <span class="productName">{{item.info}}</span>
              <span class="ReturnTag">
                <img
                  src="//gw.alicdn.com/tfs/TB1nYqRhX67gK0jSZPfXXahhFXa-209-42.png?getAvatar=1_140x10000.jpg_.webp"
                  alt
                />
              </span>
              <div>
                <span></span>
                <span></span>
              </div>
              <div class="youLike-item-box-bottom">
                <span class="price">￥{{item.price}}</span>
                <span class="findSimilar">看相似</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!--猜你喜欢-->
    </div>

    <img src="../assets/回顶部.jpg" alt="" class="goTop" v-if="goTopShow">
  
    <!-- 回顶部 -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: true,
      },
      hou: 0,
      min: 0,
      sec: 0,
      list: [],
      showTitle:true,
      searchTop:40,
      searchScale:1,
      goTopShow:false,
      titleBoxH:12
    };
  },
  created() {
    let that = this;
    that.time();
    let url = "http://127.0.0.1:5500/src/data/detail.json";
    axios
      .get(url)
      .then(function (response) {
        //  console.log(response);
        that.list = response.data.response;
        // console.log(that.list);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {

    searchDetail() {
      this.$router.push("./searchDetail");
    },

    goClassify() {
      this.$router.push("/classify");
    },
    goDetail(id) {
      this.$router.push({
        path:"/details",
        query:{
          id:id
        }
      })
    },

    scrollEvent(e){
      // console.log(e.target.scrollTop);
      if(e.target.scrollTop>50){
        this.showTitle=false,
        this.searchTop=2;
        this.searchScale=0.8,
        this.titleBoxH=6
      }else {
         this.showTitle=true,
          this.searchTop=40
          this.searchScale=1
          this.titleBoxH=12
      }
      if(e.target.scrollTop>200){
        this.goTopShow=true
      }else {
        this.goTopShow=false
      }
    },

    time() {
      var that = this;
      var interval = setInterval(function timestampToTime() {
        var date = new Date("2020-10-1") - new Date();
        if (date > 0) {
          let time = date / 1000;
          that.hou =
            parseInt((time % (60 * 60 * 24)) / 3600) < 10
              ? "0" + parseInt((time % (60 * 60 * 24)) / 3600)
              : parseInt((time % (60 * 60 * 24)) / 3600);
          that.min =
            parseInt(((time % (60 * 60 * 24)) % 3600) / 60) < 10
              ? "0" + parseInt(((time % (60 * 60 * 24)) % 3600) / 60)
              : parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          that.sec =
            parseInt(((time % (60 * 60 * 24)) % 3600) % 60) < 10
              ? "0" + parseInt(((time % (60 * 60 * 24)) % 3600) % 60)
              : parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
          that.ssec = parseInt(((date % (60 * 60 * 24)) % 3600) / 60) % 10;
        } else {
          //活动已结束，全部设置为'00'
          // console.log("aaa")
          (that.day = "00"),
            (that.hou = "00"),
            (that.min = "00"),
            (that.sec = "00");
        }
      }, 100);
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* 首页顶部 */
.icon {
  width: 30px;
}

a {
  color: black;
  text-decoration: none;
}

i {
  font-style: normal;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.titleBox {
  width: 100%;
  height: 12%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.appBottom {
  margin-top: 10px;
  width: 100%;
  height: 88%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titleTopBox {
  flex-shrink: 0;
  height: 47px;
  display: flex;
  justify-content: center;
  background-color: #ff0036;
}

.titleTop {
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.titleTop-img {
  width: 118.5px;
  height: 20.5px;
}

.titleTop-login {
  color: white;
  font-size: 14px;
  padding-right: 8px;
}

.titleBottomBox {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  background-color: #ff0036;
  padding: 20px 0 30px 0;
  z-index: 2;
  transition: all 0.3s;
}

.titleBottom {
  width: 96%;
  height: 36px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.titleBottom img {
  width: 20px;
  margin-left: 10px;
}

.titleBottom span {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.3);
  margin-left: 10px;
}

/* 搜索框下面的icon分类 */

.iconListBox {
  width: 95%;
  height: 88px;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
}

.iconList-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.iconList-item img {
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
}

.iconList-item p {
  font-size: 13px;
  color: black;
}

/* swiper */

.swiperBox {
  flex-shrink: 0;
  width: 95%;
}

.swiperImg {
  width: 100%;
  height: 100%;
}

.redPackets {
  flex-shrink: 0;
  width: 100%;
  height: 183px;
  background: url(//gw.alicdn.com/tfs/TB1qamdQEH1gK0jSZSyXXXtlpXa-750-367.png_790x10000.jpg_.webp)
    no-repeat;
  background-size: 100%;
}

/* 限时抢购 */

.flashSale {
  width: 95%;
  height: 272px;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.flashSale-item {
  background-color: rgb(247, 247, 247);
  width: 48%;
  height: 48%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  position: relative;
}

.timeShop {
  display: flex;
  justify-content: space-around;
}

.timeShop .countdown span {
  flex-shrink: 0;
  color: white;
  background-color: black;
  text-align: center;
  line-height: 20px;
  border-radius: 3px;
  font-weight: normal;
  font-size: 13px;
  padding: 0 2px;
}

.flashSale-item-titleL {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 10px;
  color: rgb(255, 0, 54);
  height: 14px;
  text-align: center;
  line-height: 13px;
  border: 1px solid black;
  background-color: rgb(255, 237, 241);
}

.flashSale-item-titleR {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 10px;
  height: 14px;
  text-align: center;
  line-height: 13px;
  border: 1px solid black;
  background-color: rgb(255, 237, 241);
}

.titleR {
  right: 10px;
}

.flashSale-item-top {
  flex-shrink: 0;
  width: 100%;
  height: 22%;
  display: flex;
  align-items: flex-end;
  padding-left: 10px;
}

.flashSale-item-top span {
  font-weight: bold;
  font-size: 16px;
}

.flashSale-item-bottom {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flashSale-item-bottom img {
  flex-shrink: 0;
  width: 47%;
}

/* 猜你喜欢 */
.youLike {
  width: 95%;
}
.youLike p {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: bold;
}
.youLike-bottom {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.youLike-item {
  width: 49%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-shrink: 0;
  border: 1px solid rgb(237, 237, 237);
  margin-bottom: 10px;
}
.youLike-item .youLike-item-box {
  width: 95%;
  margin-bottom: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.youLike-item-box .youLike-item-img {
  width: 100%;
  flex-shrink: 0;
  height: 150px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 15px;
}
.youLike-item-img img {
  width: 82%;
  height: 85%;
}
.productName {
  font-size: 14px;
  width: 80%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.youLike-item-box-bottom {
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.price {
  font-size: 16px;
  color: red;
  font-weight: bold;
}
.findSimilar {
  font-size: 12px;
  width: 50px;
  line-height: 20px;
  text-align: center;
  border-radius: 8px;
  background: rgb(255, 230, 235);
}
.ReturnTag {
  width: 80%;
}
.ReturnTag img {
  width: 70px;
}


.titleDis-enter-active,
.titleDis-leave-active{
  transition: all 0.3s;
}
.titleDis-enter{
  transform: scaleX(-4) translateY(-150px) ;
}
.titleDis-leave-to{
  transform: scaleX(-4) translateY(-150px) ;
}

.searchMove-enter-active,
.titleDis-leave-active{
  transition: all 0.3s;
}
.searchMove-enter{
  transform: scaleX(0.5)  ;
}
.searchMove-leave-to{
  transform: scaleX(0.5)  ;
}
.goTop{
  position: fixed;
  height: 44px;
  width: 44px;
  bottom: 40px;
  right: 5px;
  z-index: 10;
}
.goTop img{
  width: 44px;
  height: 44px;
}
</style>
