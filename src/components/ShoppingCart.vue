<template>
  <div class="big">
    <header>
      <div class="back" @click="$router.go(-1)">
        <img src="../assets/左灰.png" />
      </div>
      <div class="car-title">购物车(<span>10</span>)</div>
    </header>
    <div class="container">
      <div class="shop-item">
        <div class="foot-choose">
          <!-- 左面 -->
          <div class="col col-left">
            <!-- 圈 -->
            <div class="choose-circle"></div>
            <!-- 商店标 -->
            <div class="pic"><img src="../assets/cs.png" alt="" /></div>
            <!-- 商店名 -->
            <div class="shop">
              <div>正好旗舰店</div>
              <div class="right-arrow">
                <img src="../assets/箭头右.png" alt="" />
              </div>
            </div>
          </div>
          <!-- 右面 -->
          <div class="col coll">
            <div>领券</div>
            <div class="gray">|</div>
            <div>编辑</div>
          </div>
        </div>
        <!-- 下面 -->
        <div class="shop-bottom">
          <!-- 左面 -->
           <div class="col col-left">
            <!-- 圈 -->
            <div class="choose-circle"></div>
            <!-- 图片 -->
            <div  class="picture"><img :src="list[0].swiper[0]" alt=""></div>
          </div>
          <!-- 右面 -->
          <div class="col-right">
            <div class="col-right-top">{{list[0].info}}</div>
            <div  class="col-right-mid">限购100件</div>
            <div class="col-right-bottom">
              <div>￥</div>
              <dir class="price">{{this.money}}</dir>
              <div class="put">
                <div><img src="../assets/减号.png" alt=""></div>
                <div><input type="text" v-model="mes"></div>
                <div><img src="../assets/加号.png" alt=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="foot-top">
        <div class="foot-choose">
          <div class="col">
            <div class="choose-circle"></div>
            <div>全选</div>
          </div>
          <div class="col coll">
            <div class="col-money">合计:</div>
            <div class="money">
              ￥<span class="yuan">0.</span><span class="jiao">00</span>
            </div>
          </div>
        </div>
        <div class="foot-count">
          <div>结算(<span>0</span>)</div>
        </div>
      </div>
      <div class="foot-right">
        <div class="foot-every">
          <a href="https://main.m.taobao.com/index.html" class="foot-a">
            <div class="foot-pic">
              <img src="../assets/首页.png" alt />
            </div>
            <div class="foot-name">首页</div>
          </a>
        </div>
        <div class="foot-every">
          <a
            href="https://main.m.taobao.com/cart/index.html?cartFrom=taobao_client&spm=a215s.7406091.toolbar.i1"
            class="foot-a"
          >
            <div class="foot-pic">
              <img src="../assets/购物车.png" alt />
            </div>
            <div class="foot-name">购物车</div>
          </a>
        </div>
        <div class="foot-every">
          <a
            href="https://main.m.taobao.com/olist/index.html?spm=a21202.12579950.toolbar.i1"
            class="foot-a"
          >
            <div class="foot-pic">
              <img src="../assets/订单列表.png" alt />
            </div>
            <div class="foot-name">订单列表</div>
          </a>
        </div>
        <div class="foot-every">
          <a
            href="https://main.m.taobao.com/mytaobao/index.html?spm=a212db.index.toolbar.i1"
            class="foot-a"
          >
            <div class="foot-pic">
              <img src="../assets/我.png" alt />
            </div>
            <div class="foot-name">我</div>
          </a>
        </div>
        <div class="foot-every">
          <a
            href="https://h5.m.taobao.com/moreapp/index.html?pds=apply%23h%23taojia"
            class="foot-a"
          >
            <div class="foot-pic">
              <img src="../assets/省略号.png" alt />
            </div>
            <div class="foot-name">更多</div>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios"
import store from "../store/index.js"
export default {
  data(){
    return{
      list:[],
      mes:0
    }
  },
  created() {
    let that = this;
    let url = "http://127.0.0.1:5500/src/data/detail.json";
    axios
      .get(url)
      .then(function (response) {
        that.list = response.data.response;
        console.log(that.list);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  computed:{
    money(){
      return this.$store.state.money
    }
  }
};
</script>

<style scoped>
.col-right-bottom input{
  border: 0;
  text-align: center;
  color: #8a8a8a;
  font-size: 18px;
}
.price{
  flex-grow: 1;
  font-size: 16px;
}
.put input{
  width: 50px;
}
.put{
  display: flex;
  align-items: center;
}
.col-right-bottom{
  /* color: #ff6700; */
  display: flex;
  justify-content: space-between;
  color: #ff6700;
  align-items: center;
}
.col-right-mid{
  font-size: 13px;
  color: #ff6700;
}
.col-right{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.shop-bottom{
  padding: 10px 0;
  /* background: red; */
  display: flex;
}
.picture{
  width:80px;
  height: 80px;
}
.picture img{
  width: 100%;
  height: 100%;
}
.right-arrow,
.pic {
  display: flex;
  justify-content: center;
  align-items: center;
}
.gray {
  color: #ccc;
}
.shop-item .coll div {
  margin-right: 10px;
}
.foot-choose img {
  width: 20px;
  height: 20px;
  
}
.foot-choose{
   border-bottom: 1px solid #e7e7e7;
}
.container .col-left {
  padding: 0 15px;
}
.shop-item .col {
  font-size: 14px;
}
.shop-item{
  background: #fff;
  margin-top: 10px;
}
.shop {
  display: flex;
  margin:0 5px;
}

.yuan {
  font-size: 14px;
}
.money {
  color: #ff6700;
  font-size: 12px;
}
.col-money {
  margin-right: 5px;
  font-size: 16px;
}
.foot-choose .coll {
  justify-content: flex-end;
  align-items: center;
  /* background-color: red; */
}
.col {
  display: flex;
  /* justify-content: start; */
  align-items: center;
  padding: 15px 0 8px 0;
  font-size: 16px;
  /* background: rgb(247, 0, 255); */
}
.choose-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #999;
  margin-right: 10px;
}

.foot-choose {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
}
.foot-count {
  background: #ff6700;
  padding: 15px 30px;
  color: #fff;
  font-size: 16px;
  white-space: nowrap;
}
.foot-top {
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #ccc;
  /* margin-bottom: 5px; */
}
.foot-a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.foot-right {
  display: flex;
  justify-content: space-between;
  padding-bottom: 3px;
}
.foot-name {
  font-size: 12px;
  color: rgb(93, 101, 107);
}
.foot-right img {
  width: 100%;
  height: 100%;
}
.foot-pic {
  width: 20px;
  height: 20px;
  margin: 4px 0 2px 0;
}

.foot-every {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
}
.car-title {
  flex-grow: 1;
  text-align: center;
  height: 100%;
}
.back img {
  width: 20px;
  height: 20px;
}
.back {
  display: flex;
  align-items: center;
  height: 100%;
}
footer {
  flex-shrink: 0;
  /* height: 6%; */
}
header {
  flex-shrink: 0;
  width: 100%;
  /* height: 5%; */
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  /* margin-bottom: 10px; */
}

.container {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  background: rgb(238, 238, 238);
  font-size: 14px;
  color: #333;
  overflow: auto;
}
a {
  text-decoration: none;
}
.big {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>