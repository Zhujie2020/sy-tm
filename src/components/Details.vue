<template>
  <div class="container" v-if="list[id]">
    <!-- 图片和上面的标题  -->
    <div class="title">
      <div class="title-top">
        <div class="pic">
          <img src="../assets/左白.png" />
        </div>
        <div class="three">
          <div>商品</div>
          <div class="active">评论</div>
          <div>详情</div>
        </div>
        <div class="pic">
          <img src="../assets/车白.png" />
        </div>
      </div>
      <div class="photo">
        <swiper v-if="list[id]" ref="mySwiper2" :options="swiperOptions" class="swiper-one">
          <swiper-slide class="swiper-two" v-for="item in list[id].swiper" :key="item.id">
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
          <span class="money">{{list[id].price}}</span>
        </div>
        <div class="price-small">
          <div class="noprice">
            ￥
            <span>{{list[id].noprice}}</span>
          </div>
          <div class="sale">9件已售</div>
        </div>
      </div>
      <div class="price-right">
        <div>距结束剩余</div>
        <div class="time">
          <div class="component-wrapper">{{hou}}:</div>
          <div class="component-wrapper">{{min}}:</div>
          <div class="component-wrapper">{{sec}}:</div>
          <div class="component-wrapper">0{{ssec}}</div>
        </div>
        <div class="triangle"></div>
      </div>
    </div>
    <!--介绍-->
    <div class="info">
      <div class="info-pro" v-if="list[id]">
        <div class="info-item">{{list[id].info}}</div>
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
    <div class="comment">
      <div class="comment-top">
        <div class="shop-comment">
          <div class="comment-left">商品评价(1033)</div>
            <div class="arrow-right comment-right">
              <div class="all">查看全部</div>
              <img src="../assets/右粉.png" alt />
            </div>
          </div>
        <div class="person">
          <div class="touxiang"><img src="//wwc.alicdn.com/avatar/getAvatar.do?userIdStr=vGNuOHcWv88YXF-HPmvbMGx4PG8bXF--OHlHOFkSvmNSMFNuMG7eMG*eMmlIXmHS&width=40&height=40&type=sns" alt=""></div>
          <div class="name">君**3</div>
        </div>
        <!-- <div class="commen-self">{{list[id][comment-one]}}</div> -->
        <div class="content">2020-09-18 颜色分类：A83149638 紫红 女；鞋码：38</div>
      </div>
      <div class="comment-ask">
         <div class="shop-comment">
          <div class="comment-left">问大家(143)</div>
            <div class="arrow-right comment-right">
              <div class="all">打开APp查看全部</div>
              <img src="../assets/右粉.png" alt />
            </div>
          </div>
      </div>
    </div>
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
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        }, // Some Swiper option/callback...
      },
    };
  },
  methods: {
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
.comment-ask{
  margin-top: 5px;
}
.content{
  font-size: 10px;
  padding: 8px 0 0 0;
  border-bottom: 1px slid #ccc;
}
.commen-self{
  font-size: 13px;
  padding: 8px 0 0 0;
}
.name{
font-size: 12px;
}
.touxiang img{
  width: 100%;
}
.touxiang{
  margin-right: 10px;
  border-radius: 50%;
  overflow: hidden;
  width:25px;
  height: 25px;
}
.person{
  justify-content: start;
  display: flex;
  align-items: center;
}
.comment-right{
  color: #FF0036;
}
.all{
  margin-right: 5px;
}
.shop-comment {
  display: flex;
   font-size: 14px;
  /* flex-direction: column; */
  justify-content: space-between;
}
.comment-top {
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;

}
.comment {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
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
  padding: 10px;
}
.arrow-right img {
  width: 20px;
}
.arrow-right {
  display: flex;
  align-items: center;
}
.dot {
  display: flex;
  align-items: center;
  justify-content: center;
}
.service div {
  margin-right: 8px;
}
.service {
  display: flex;
  padding: 5px 0;
  font-size: 14px;
  margin-bottom: 5px;

  align-items: center;
  /* justify-content: space-between; */
}
.module-scene-item {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
.calculate img {
  width: 30%;
  /* padding: 10px 0 5px 10px; */
}
.discount {
  display: flex;
  /* margin-bottom: 5px; */
  flex-direction: column;
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
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
  /* padding: 5px 0; */
}
.promotion {
  padding: 10px;
  display: flex;
  /* flex-direction: column; */
  justify-content: start;
  margin: 10px 0;
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
  /* background: green; */
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
  width: 20%;
  color: rgb(213, 28, 81);
  display: flex;
  align-items: center;
  font-size: 12px;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
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
.price {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
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
}
.active {
  border-bottom: 2px solid rgb(255, 0, 54);
}
.pic img {
  width: 30%;
  background: rgba(135, 135, 135, 0.5);
  border-radius: 50%;
  margin: 0 10px;
  padding: 2px;
}
.pic {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.three div {
  padding: 10px;
}
.three {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
  /* font-size: 14px; */
  color: rgb(153, 153, 153);
  /* flex-shrink: 1; */
}
.title-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  overflow: hidden;
}
.container {
  overflow: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(250, 250, 250);
  /* color: rgba(153, 153, 153,0.5); */
  font-size: 1.2rem/1.5;
  color: #333;
}
</style>