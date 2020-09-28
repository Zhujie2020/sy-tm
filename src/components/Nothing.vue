<template>
  <div class="big">
    <header>
      <div class="back" @click="$router.go(-1)">
        <img src="../assets/左灰.png" />
      </div>
      <div class="car-title">购物车</div>
    </header>
    <div class="container">
      <div class="bg">
        <div class="car"><img src="../assets/车白.png" /></div>
        <div class="hungry">购物车快饿瘪了T.T</div>
        <div class="choose">主人快给我挑点宝贝吧</div>
        <div class="btn" @click="goHome">去逛逛</div>
      </div>
      <div class="guss-you-like">
        <div class="guess-radial">
          <div class="line"></div>
          <div class="circle"><img src="../assets/点.png" alt="" /></div>
        </div>
        <div class="heart">
          <img src="../assets/爱心.png" alt="" />
          <div>你可能还喜欢</div>
        </div>
        <div class="guess-radial">
          <div class="circle"><img src="../assets/点.png" alt="" /></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="lazy">
        <div v-for="item in list" :key="item.buy" class="lazy-item">
          <div class="recommend-item"><img :src="item.img" alt="" /></div>
          <div class="recommend-title">{{ item.info }}</div>
          <div class="recommend-price-box">
            <div class="recommend-sign">￥</div>
            <div class="recommend-price">{{ item.price }}</div>
            <div class="recommend-buy">{{ item.buy }}人已购买</div>
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
    };
  },
  created() {
    let that = this;
    let url = "http://127.0.0.1:5500/src/data/shop.json";
    axios.get(url).then(function (response) {
      that.list = response.data.result;
      console.log(that.list);
    });
  },
  methods:{
    goHome(){
      this.$router.push({
        path:"/"
      })
    }
  }
};
</script>

<style scoped>
.recommend-buy{
  color: #999;
}
.recommend-price{
  font-size: 16px;
  margin:0 5px;
}
.recommend-price-box{
  display: flex;
  font-size: 10px;
  color: #ff6700 ;
  align-items: center;
}
.recommend-title {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin:5px 0;
  /* display:-webkit-box;
  -webkait-line-clamp:2;
  -webkit-box-orient: vertical; */
}
.recommend-item {
  width: 150px;
  height: 150px;
}
.recommend-item img {
  width: 100%;
  height: 100%;
}
.lazy-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  margin: 5px;
  background: #fff;
  border-radius: 10px;
  width: 47%;
}
.lazy {
  display: flex;
  flex-wrap: wrap;
}
.heart img {
  background: #ff6700;
  border-radius: 50%;
  padding: 2px;
  margin-right: 3px;
}
.heart {
  display: flex;
  justify-content: center;
  align-items: center;
}
.line {
  border: 1px solid #ff6700;
  border-bottom: 0;
  width: 15px;
}
.guess-radial {
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.guess-radial img {
  width: 10px;
  margin: 1px -3px;
}
.guss-you-like {
  margin: 5px 0;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #ff6700;
  /* background: rgb(0, 247, 255); */
}
.btn {
  text-align: center;
  border: 1px solid #999;
  padding: 3px;
  border-radius: 3px;
  width: 50%;
}
.choose {
  font-size: 14px;
  color: #999;
}
.hungry {
  font-weight: 600;
}
.car {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ccc;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
.car img {
  padding: 27px 0;
}
.bg > div {
  margin-top: 5px;
}
.bg {
  padding: 69px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background: chartreuse; */
}
.car-title {
  flex-grow: 1;
  text-align: center;
  height: 100%;
  color: #666;
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

header {
  flex-shrink: 0;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
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

.big {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>>

