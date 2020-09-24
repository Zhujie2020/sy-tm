<template>
  <div class="big">
    <div class="title-fix" v-if="see">
      <div class="title-top-brand">
        <div class="pic" @click="$router.go(-1)">
          <img src="../assets/左白.png" />
        </div>
        <div class="pic" @click="goCar">
          <img src="../assets/车白.png" />
        </div>
      </div>
    </div>
    <div class="container" v-if="list[id]" @scroll="scrollEvent" ref="container">
      <!-- else -->
      <div class="title title-fix bgshite" v-if="bgwhite">
        <div class="title-top-brand title-top">
          <div class="pic" @click="$router.go(-1)">
            <img src="../assets/左灰.png" />
          </div>
          <div class="three">
            <div
              :class="{
                active: scrolltop > 0 && scrolltop <= firstTop,
              }"
              @click="changetop(0)"
              @scroll="scrollEvent"
            >
              商品
            </div>
            <div
              :class="{
                active:
                  scrolltop > firstTop &&
                  scrolltop <= secondTop,
              }"
              @click="changetop(firstTop)"
              @scroll="scrollEvent"
            >
              评价
            </div>
            <div
              :class="{ active: scrolltop > secondTop }"
              @click="changetop(secondTop)"
              @scroll="scrollEvent"
            >
              详情
            </div>
          </div>
          <div class="pic">
            <img src="../assets/车灰.png" />
          </div>
        </div>
      </div>
      <!-- 轮播  -->
      <div class="title title-pho">
        <div class="photo">
          <swiper
            v-if="list[id]"
            ref="mySwiper2"
            :options="swiperOptions"
            class="swiper-one"
          >
            <swiper-slide
              class="swiper-two"
              v-for="item in list[id].swiper"
              :key="item.id"
            >
              <img :src="item" alt />
            </swiper-slide>
          </swiper>
            <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- 价格 -->
      <div class="price">
        <div class="price-left" v-if="list[id]">
          <div class="price-big">
            ￥
            <span class="money">{{ list[id].price }}</span>
          </div>
          <div class="price-small">
            <div class="noprice">
              ￥
              <span>{{ list[id].noprice }}</span>
            </div>
            <div class="sale">9件已售</div>
          </div>
        </div>
        <div class="price-right">
          <div>距结束剩余</div>
          <div class="time">
            <div class="component-wrapper">{{ hou }}:</div>
            <div class="component-wrapper">{{ min }}:</div>
            <div class="component-wrapper">{{ sec }}:</div>
            <div class="component-wrapper">0{{ ssec }}</div>
          </div>
          <div class="triangle"></div>
        </div>
      </div>
      <!--介绍-->
      <div class="info">
        <div class="info-pro" v-if="list[id]">
          <div class="info-item">{{ list[id].info }}</div>
        </div>
        <div class="information">
          <div>运费:0.00</div>
          <div>月销量100+件</div>
          <div>广东江门</div>
        </div>
      </div>
      <!-- 促销 -->
      <div class="promotion">
        <div class="color-gary">促销</div>
        <div class="promotion-middle">
          <div class="promotion-middle-top">
            <div class="promotion-red">促销</div>
            <div class="promotion-black">满一件，打6折</div>
          </div>
          <div class="promotion-middle-top">
            <div class="promotion-red">积分</div>
            <div class="promotion-black">购买可得15积分</div>
          </div>
        </div>
        <div class="arrow-right">
          <img src="../assets/箭头右.png" alt />
        </div>
      </div>
      <!-- 优惠 -->
      <div class="discount">
        <div class="calculate">
          <img
            src="https://img.alicdn.com/tps/i3/TB1YGS.IVXXXXchaXXXKtyaIVXX-227-63.png_320x320Q50s50.jpg_.webp"
            alt
          />
        </div>
        <div class="module-scene-item">
          <div class="service">
            <div class="color-gary">服务</div>
            <div>假一赔四</div>
            <div class="dot">·</div>
            <div>破损包退</div>
            <div class="dot">·</div>
            <div>赠保价险</div>
            <div class="dot">·</div>
            <div>退货运费险</div>
          </div>
          <div class="arrow-right">
            <img src="../assets/箭头右.png" alt />
          </div>
        </div>
      </div>
      <!-- 配送 -->
      <div class="choose">
        <div class="choose-list">
          <div class="color-gary">选择</div>
          <div class="choose-desc">配送至：沧浪区，请选择颜色分类/鞋码</div>
          <div class="arrow-right">
            <img src="../assets/箭头右.png" alt />
          </div>
        </div>
        <div class="choose-list">
          <div class="color-gary">参数</div>
          <div class="choose-desc">品牌 功能...</div>
          <div class="arrow-right">
            <img src="../assets/箭头右.png" alt />
          </div>
        </div>
      </div>
      <!-- 评论 -->
      <div class="comment" ref="comment">
        <div class="comment-top">
          <div class="shop-comment">
            <div class="comment-left">商品评价(1033)</div>
            <div class="arrow-right comment-right">
              <div class="all">查看全部</div>
              <img src="../assets/右粉.png" alt />
            </div>
          </div>
          <div class="person">
            <div class="touxiang">
              <img
                src="//wwc.alicdn.com/avatar/getAvatar.do?userIdStr=vGNuOHcWv88YXF-HPmvbMGx4PG8bXF--OHlHOFkSvmNSMFNuMG7eMG*eMmlIXmHS&width=40&height=40&type=sns"
                alt
              />
            </div>
            <div class="name">君**3</div>
          </div>
          <div class="commen-self">{{ list[id].comments[0] }}</div>
          <div class="content">
            2020-09-18 颜色分类：A83149638 紫红 女；鞋码：38
          </div>
        </div>
        <div class="comment-ask">
          <div class="shop-comment">
            <div class="comment-left">问大家(143)</div>
            <div class="arrow-right comment-right">
              <div class="all">打开APP查看全部</div>
              <img src="../assets/右粉.png" alt />
            </div>
          </div>
          <div class="ask">
            <div class="ask-one">
              <div class="ask-one-left">
                <div>
                  <img src="../assets/问小.png" alt />
                </div>
                <div class="ask-que">ssk</div>
              </div>
              <div class="ask-one-right ask-que">3个回答</div>
            </div>
            <div class="ask-one">
              <div class="ask-one-left">
                <div>
                  <img src="../assets/问小.png" alt />
                </div>
                <div class="ask-que">ssk</div>
              </div>
              <div class="ask-one-right ask-que">3个回答</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 店铺 -->
      <div class="shop">
        <div class="shop-top">
          <div class="shop-top-left">
            <div>
              <img
                src="//img.alicdn.com/imgextra/i2/379092709/TB2UlcZcuySBuNjy1zdXXXPxFXa_!!379092709.jpg_120x120Q50s50.jpg_.webp"
                alt
              />
            </div>
          </div>
          <div class="shop-top-right">
            <div class="shop--right-top">骆驼服饰旗舰店</div>
            <div class="shop--right-top">
              <img
                src="//img.alicdn.com/tfs/TB1u5sBnlfH8KJjy1XbXXbLdXXa-198-36.png_120x120Q90s50.jpg_.webp?getAvatar=avatar"
                alt
              />
            </div>
          </div>
        </div>
        <div class="shop-mid">
          <div class="shop-mid-desc">
            <div class="baby-blue">
              宝贝描述
              <span>4.8</span>
              <img src="../assets/减号.png" />
            </div>
            <!-- <div class="sort">4.8<img src="../assets/减号.png"></div> -->
          </div>
          <div class="shop-mid-desc">
            <div class="baby-blue">
              宝贝描述
              <span>4.8</span>
              <img src="../assets/减号.png" />
            </div>
            <!-- <div class="sort"></div> -->
          </div>
          <div class="shop-mid-desc">
            <div class="baby-pink">
              宝贝描述
              <span>4.8</span>
              <img src="../assets/箭头上.png" />
            </div>
            <!-- <div class="sort"></div> -->
          </div>
        </div>
        <div class="shop-bottom">
          <div>全部商品</div>
          <div>进入店铺</div>
        </div>
      </div>
      <!--看了又看 -->
      <div class="look">
        <div class="look-top">看了又看</div>
        <div class="look-bottom">很抱歉，找不到相关商品</div>
      </div>
      <!-- 详情 -->
      <div class="details">
        <div class="nothing"></div>
        <div class="detail">详情</div>
        <div class="nothing"></div>
      </div>
      <!-- 介绍 -->
      <div class="intro">"磨砂牛皮 防滑耐磨 舒适徒步 吸汗透气"</div>
      <!-- 店铺推荐 -->
      <div class="store-recommendation">
        <div class="store-recommendation-top">店铺推荐</div>
        <div class="store-recommendation-bottom">
          <div class="shop-every">
            <div class="shop-pic">
              <img
                src="//img.alicdn.com/sns_album/i3/379092709/O1CN01JTTJqQ1VslYZytghL_!!0-item_pic.jpg_260x260.jpg"
                alt
              />
            </div>
            <div class="shop-desc">骆驼春夏季登</div>
            <div class="shop-price">￥ 489</div>
          </div>
          <div class="shop-every">
            <div class="shop-pic">
              <img
                src="//img.alicdn.com/sns_album/i1/379092709/O1CN019dJ3gO1VslYYm4Ymd_!!0-item_pic.jpg_260x260.jpg"
                alt
              />
            </div>
            <div class="shop-desc">骆驼登山鞋男</div>
            <div class="shop-price">￥489</div>
          </div>
          <div class="shop-every">
            <div class="shop-pic">
              <img
                src="//img.alicdn.com/sns_album/i1/379092709/O1CN019uyK0G1VslYXtSpXk_!!0-item_pic.jpg_260x260.jpg"
                alt
              />
            </div>
            <div class="shop-desc">骆驼户外登山</div>
            <div class="shop-price">￥468</div>
          </div>
          <div class="shop-every">
            <div class="shop-pic">
              <img
                src="//img.alicdn.com/sns_album/i4/379092709/O1CN01VKp7nW1VslYQ79LWP_!!0-item_pic.jpg_260x260.jpg"
                alt
              />
            </div>
            <div class="shop-desc">骆驼高帮登山</div>
            <div class="shop-price">￥628</div>
          </div>
          <div class="shop-every">
            <div class="shop-pic">
              <img
                src="//img.alicdn.com/sns_album/i2/379092709/O1CN01lF8rRv1VslYYPUjba_!!0-item_pic.jpg_260x260.jpg"
                alt
              />
            </div>
            <div class="shop-desc">骆驼户外冲锋</div>
            <div class="shop-price">￥1098</div>
          </div>
          <div class="shop-every">
            <div class="shop-pic">
              <img
                src="//img.alicdn.com/sns_album/i4/379092709/O1CN01kymsz81VslYQ77CN0_!!0-item_pic.jpg_260x260.jpg"
                alt
              />
            </div>
            <div class="shop-desc">骆驼202年</div>
            <div class="shop-price">￥998</div>
          </div>
        </div>
      </div>
      <!-- 一堆图片 -->
      <div v-for="item in list[id].detaiImg" :key="item.id" class="pics">
        <img :src="item" alt />
      </div>
    </div>
    <!-- 最下面  -->
    <footer>
      <div class="foot-left">
        <div class="foot-every">
          <div class="foot-pic">
            <img src="../assets/店铺.png" alt />
          </div>
          <div class="foot-name">店铺</div>
        </div>
        <div class="foot-every">
          <div class="foot-pic">
            <img src="../assets/客服.png" alt />
          </div>
          <div class="foot-name">客服</div>
        </div>
        <div class="foot-every">
          <div class="foot-pic">
            <img src="../assets/收藏.png" alt />
          </div>
          <div class="foot-name">收藏</div>
        </div>
      </div>
      <div class="foot-right">
        <div class="rob go-car" @click="goCar">加购物车</div>
        <div class="rob now">马上抢</div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      list: [],
      hou: 0,
      min: 0,
      sec: 0,
      ssec: 0,
      see: true,
      bgwhite: false,
      scrolltop: 0,
      firstTop: 0,
      secondTop: 0,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          observe: true,
        }, // Some Swiper option/callback...
      },
    };
  },
  watch: {
    firstTop(newVal) {
      this.firstTop = newVal;
    },
    secondTop(newVal) {
      this.secondTop = newVal;
    },
  },
  methods: {
    scrollEvent(e) {
      // console.log(this.$refs.comment.offsetTop);
      this.scrolltop = event.target.scrollTop;
      // console.log(e.target.scrollTop);
      if (e.target.scrollTop >= 100) {
        this.see = false;
        this.bgwhite = true;
      } else {
        this.bgwhite = false;
        this.see = true;
      }
      this.firstTop = this.$refs.comment.offsetTop;
      this.secondTop = document.querySelector(".pics").offsetTop;
      // console.log(e.target.scrollTop, this.firstTop, this.secondTop);
      // console.log(typeof(this.scrollTop))
      
    },
    changetop(n) {
      this.scrollTop = n+1;
      this.$refs.container.scrollTop=n+1
      // console.log(n)
    },
    goCar() {
      this.$router.push({
        path: "/shoppingcart",
      });
    },
    time() {
      var that = this;
      var interval = setInterval(function timestampToTime() {
        var date = new Date("2020-10-1") - new Date();
        //new Date当前的时间戳，也可以换成自定义的时间戳
        if (date > 0) {
          let time = date / 1000;
          // 获取时、分、秒,毫秒
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
  created() {
    let that = this;
    let url = "http://127.0.0.1:5500/src/data/detail.json";
    // 为给定 ID 的 user 创建请求
    axios
      .get(url)
      .then(function (response) {
        // console.log(response);
        that.list = response.data.response;
        console.log(that.list);
      })
      .catch(function (error) {
        console.log(error);
      });

    that.time();
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper2.$swiper;
    },
    id() {
      return this.$route.query.id;
    },
  },
};
</script>

<style scoped>
.rob {
  background: rgb(255, 149, 0);
  width: 100%;
  padding: 18px;
  text-align: center;
  white-space: nowrap;
}
.now {
  background: rgb(255, 0, 54);
}
.foot-right {
  width: 60%;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 15px;
}
.foot-name {
  font-size: 12px;
}
.foot-left img {
  width: 100%;
  height: 100%;
}
.foot-pic {
  width: 20px;
  height: 20px;
  margin-bottom: 2px;
}
.foot-every {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.foot-left {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
footer {
  flex-shrink: 0;
  display: flex;
  height: 6%;
  align-items: center;
}
.pics {
  width: 100%;
}
.container .pics {
  margin: -3px;
  padding: 0;
}
.pics img {
  width: 100%;
}
.shop-price {
  color: #ff0036;
}
.shop-pic img {
  width: 100%;
  height: 100%;
}
.shop-pic {
  width: 66px;
  height: 66px;
}
.shop-every {
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: start;
}
.store-recommendation-bottom {
  display: flex;
  width: 100%;
  flex: 1 1 0;
  height: auto;
}
.store-recommendation-top {
  border-left: 3px solid #ff0036;
  color: #666;
  padding: 6px 0 0 12px;
}
.container .store-recommendation {
  display: flex;
  flex-direction: column;
  padding: 0;
}
.intro {
  text-align: center;
  line-height: 28px;
  font-size: 16px;
}
.container .detail {
  color: #999;
  font-size: 12px;
}
.nothing {
  width: 20%;
  height: 0px;
  border: 1px solid #999;
  margin: 0 10px;
}
.container .details {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(245, 245, 245);
}
.look-bottom {
  text-align: center;
}
.look-top {
  padding: 10px;
}
.look {
  font-size: 12px;
  display: flex;
  flex-direction: column;
}
.shop-bottom div {
  color: #ff0036;
  border: 1px solid #ff0036;
  border-radius: 36px;
  margin-right: 15px;
  font-size: 13px;
  padding: 5px 15px;
}
.shop-bottom {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shop-mid-desc img {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.baby-pink span {
  color: rgb(213, 28, 81);
}
.baby-pink img {
  background: rgb(213, 28, 81);
}
.baby-blue img {
  background: rgb(17, 147, 206);
}
.baby-blue span {
  color: rgb(17, 147, 206);
  margin-right: 3px;
}
.baby-pink,
.baby-blue {
  display: flex;
  justify-content: center;
  align-items: center;
}
.shop-mid-desc {
  display: flex;
  justify-content: center;
}
.shop-mid {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  color: #999;
  font-size: 12px;
}
.shop--right-top img {
  width: 70%;
}
.shop-right-top {
  font-size: 16px;
  margin-bottom: 5px;
}
.shop-top-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.shop-top-left img {
  width: 100%;
}
.shop-top-left div {
  width: 54px;
  height: 54px;
  margin-right: 10px;
}
.shop-top {
  display: flex;
  justify-content: start;
}
.shop {
  display: flex;
  flex-direction: column;
  background: #fff;
}
.ask-one-right {
  color: #999;
  padding: 0 10px;
}
.ask-que {
  font-size: 13px;
  line-height: 25px;
}
.ask-one-left {
  display: flex;
  justify-content: start;
  align-items: center;
}
.ask-one-left img {
  width: 15px;
}
.ask-one {
  display: flex;
  justify-content: space-between;
}
.ask {
  display: flex;
  flex-direction: column;
}
.comment-ask {
  margin-top: 5px;
}
.content {
  font-size: 10px;
  padding: 8px 0 0 0;
  border-bottom: 1px slid #ccc;
  color: #999;
}
.commen-self {
  font-size: 13px;
  padding: 8px 8px 0 0;
  line-height: 20px;
}
.name {
  font-size: 12px;
  color: #999;
}
.touxiang img {
  width: 100%;
}
.touxiang {
  margin-right: 10px;
  border-radius: 50%;
  overflow: hidden;
  width: 25px;
  height: 25px;
}
.person {
  justify-content: start;
  display: flex;
  align-items: center;
}
.comment-right {
  color: #ff0036;
}
.all {
  margin-right: 5px;
}
.shop-comment {
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin: 10px 0;
}
.comment-top {
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  border-bottom: 1px solid #ddd;
}
.comment {
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
.choose-desc {
  flex-grow: 1;
  font-size: 14px;
}
.choose-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  margin-bottom: 5px;
}
.choose {
  background: #fff;
  display: flex;
  flex-direction: column;
}
.arrow-right img {
  width: 20px;
}
.arrow-right {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.dot {
  display: flex;
  align-items: center;
  justify-content: center;
}
.service div {
  margin-right: 3px;
  white-space: nowrap;
}
.service {
  display: flex;
  padding: 5px 0;
  font-size: 14px;
  align-items: center;
}
.module-scene-item {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.calculate img {
  width: 30%;
}
.discount {
  display: flex;
  flex-direction: column;
  background: #fff;
}
.promotion-red {
  color: #ff0036;
  background: #fee;
  margin-right: 5px;
}
.promotion-middle-top {
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 5px;
  font-size: 12px;
  flex-grow: 1;
}
.promotion-middle {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: start;
}
.color-gary {
  color: #999;
  margin-right: 10px;
}
.promotion {
  display: flex;
  justify-content: start;
  background-color: #fff;
}
.info-pro {
  margin: 5px 0;
}
.information {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
  margin-bottom: 5px;
}
.info {
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
.component-wrapper {
  background: #333;
  border-radius: 3px;
  color: #fff;
  margin: 0 2px;
}
.time {
  display: flex;
  margin-top: 5px;
}
.triangle {
  position: absolute;
  width: 0;
  height: 0;
  left: -67px;
  top: -2px;
  border: 34px solid transparent;
  border-right-color: rgb(253, 238, 127);
}
.price-right {
  background: rgb(253, 238, 127);
  position: relative;
  width: 22%;
  color: rgb(213, 28, 81);
  display: flex;
  align-items: center;
  font-size: 12px;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  padding-right: 8px;
}

.sale {
  background: rgb(213, 28, 81);
  padding: 3px;
}
.noprice {
  text-decoration: line-through;
  padding: 5px;
}
.price-small {
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
.money {
  font-size: 18px;
}
.price-big {
  padding: 20px 10px;
}
.price-left {
  display: flex;
  justify-content: start;
  align-items: center;
  color: #fff;
  background: rgb(250, 33, 95);
  flex-grow: 1;
}
.container .price {
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}
.swiper-pagination {
  position: absolute;
  color: #fff;
  background: rgba(135, 135, 135, 0.5);
  border-radius: 25px;
  width: 50px;
  margin-left: 85%;
  text-align: center;
}

.photo img {
  width: 100%;
}
.photo {
  position: relative;
  width:100%;
}
.active {
  border-bottom: 2px solid rgb(255, 0, 54);
}
.pic img {
  width: 30%;
  background: rgba(135, 135, 135, 0.5);
  border-radius: 50%;
  margin: 10px;
  padding: 2px;
}

.pic {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.three div {
  padding-bottom: 4px;
}
.three {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  flex-shrink: 0;
  align-items: center;
  color: rgb(153, 153, 153);
}

.bgshite,
.bgshite img {
  background: #fff;
}
.title-top {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.title-fix .title-top-brand {
  display: flex;
  justify-content: space-between;
  width:100%;
}
.title-fix {
  position: fixed;
  height: 5%;
  z-index: 5;
  padding: 0;
  width: 100%;
}
.title {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
}
.container .bgshite {
  margin: 0;
}
.container > div {
  background: #fff;
  padding: 10px;
  margin-top: 10px;
}
.big .container .title-pho {
  padding: 0;
  margin: 0;
  width: 100%;
  /* height: 53%; */
}
.container .bgshite {
  padding: 0;
}
.container {
  display: flex;
  flex-direction: column;
  background: rgb(250, 250, 250);
  font-size: 14px;
  color: #333;
  overflow: auto;
}
.big {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>