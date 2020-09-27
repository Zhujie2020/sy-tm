<template>
  <div class="big">
    <header>
      <div class="back" @click="$router.go(-1)">
        <img src="../assets/左灰.png" />
      </div>
      <div class="car-title">
        购物车(
        <span>{{ number }}</span
        >)
      </div>
    </header>
    <div class="container">
      <!-- 天猫超市的 绿的tm -->
      <div class="shop-item" v-if="getTm.length">
        <div class="foot-choose">
          <div class="col col-left">
            <!-- 店铺全选-->
            <div class="choose-circle" @click="borderBtn('tm')" :class="{ 'no-border': $store.state.check1 }">
              <img src="../assets/对号.png" alt />
            </div>
            <div class="pic">
              <img src="../assets/cs.png" alt />
            </div>
            <div class="shop">
              <div>天猫超市店</div>
              <div class="right-arrow">
                <img src="../assets/箭头右.png" alt />
              </div>
            </div>
          </div>
          <div class="col coll">
            <div>领券</div>
            <div class="gray">|</div>
            <div v-if="cut1" @click="changeCut('tm')">编辑</div>
            <div v-else @click="changeCut('tm')">完成</div>
          </div>
        </div>
        <div class="shop-bottom" v-for="(item, index) in getTm" :key="index">
         <transition name="cutout">
          <div
            class="shopp"
            @touchmove="move(index, 'tm')"
            @touchstart="start(index, 'tm')"
            @touchend="over(index, 'tm')"
            :style="{ transform: 'translateX(' + item.x + 'px)' }"
          >
            <div class="col col-left">
              <!-- 单选 -->
              <div
                class="choose-circle"
                @click="changeBorder(index, 'tm')"
                :class="{ 'no-border': item.checked }"
              >
                <img src="../assets/对号.png" alt />
              </div>
              <!-- 图片 -->
              <div class="picture">
                <img :src="item.img" alt />
              </div>
            </div>
            <!-- 右面 -->
            <div class="col-right">
              <div class="col-right-top">{{ item.info }}</div>
              <div class="col-right-mid">限购100件</div>
              <div class="col-right-bottom">
                <div class="rmb">￥</div>
                <dir class="price">{{ item.price }}</dir>
                <div class="put">
                  <div>
                    <img
                      src="../assets/减号.png"
                      alt
                      @click="minus(index, 'tm', item.num)"
                    />
                  </div>
                  <div>
                    <input type="text" :value="item.num" disabled />
                  </div>
                  <div>
                    <img
                      src="../assets/加号.png"
                      alt
                      @click="add(index, 'tm')"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </transition>
          
            <div class="delete" @click="confirms(index, 'tm')">删除</div>
        </div>
      </div>
      <!--红的 tb-->
      <div class="shop-item" v-if="getTb.length">
        <div class="foot-choose">
          <div class="col col-left">
            <!-- 店铺全选-->
            <div class="choose-circle" @click="borderBtn('tb')" :class="{ 'no-border':$store.state.check2 }">
              <img src="../assets/对号.png" alt />
            </div>
            <div class="pic">
              <img src="../assets/tm.png" alt />
            </div>
            <div class="shop">
              <div>正好旗舰店</div>
              <div class="right-arrow">
                <img src="../assets/箭头右.png" alt />
              </div>
            </div>
          </div>
          <!-- 右面 -->
          <div class="col coll">
            <div>领券</div>
            <div class="gray">|</div>
            <div v-if="cut2" @click="changeCut('tb')">编辑</div>
            <div v-else @click="changeCut('tb')">完成</div>
          </div>
        </div>
        <!-- 下面 -->
        <div class="shop-bottom" v-for="(item, index) in getTb" :key="index">
          <!-- 左面 -->
          <transition name="cutout">
          <div
            class="shopp"
            @touchmove="move(index, 'tb')"
            @touchstart="start(index, 'tb')"
            @touchend="over(index, 'tb')"
            :style="{ transform: 'translateX(' + item.x + 'px)' }"
          >
            <div class="col col-left">
              <!-- 单选 -->
              <div
                class="choose-circle"
                @click="changeBorder(index, 'tb')"
                :class="{ 'no-border': item.checked }"
              >
                <img src="../assets/对号.png" alt />
              </div>
              <!-- 图片 -->
              <div class="picture">
                <img :src="item.img" alt />
              </div>
            </div>
            
            <!-- 右面 -->
            <div class="col-right">
              <div class="col-right-top">{{ item.info }}</div>
              <div class="col-right-mid">限购100件</div>
              <div class="col-right-bottom">
                <div class="rmb">￥</div>
                <dir class="price">{{ item.price }}</dir>
                <div class="put">
                  <div>
                    <img
                      src="../assets/减号.png"
                      alt
                      @click="minus(index, 'tb', item.num)"
                    />
                  </div>
                  <div>
                    <input type="text" :value="item.num" disabled />
                  </div>
                  <div>
                    <img
                      src="../assets/加号.png"
                      alt
                      @click="add(index, 'tb')"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </transition>
            <div class="delete" @click="confirms(index, 'tb')">删除</div>
          
        </div>
      </div>
    </div>
    <footer>
      <div class="foot-top">
        <div class="foot-choose">
          <div class="col">
            <div
              class="choose-circle"
              @click="selectAll"
              :class="[check ? 'no-border' : '']"
            >
              <img src="../assets/对号.png" alt />
            </div>
            <div>全选</div>
          </div>
          <div class="col coll">
            <div class="col-money">合计:</div>
            <div class="money">
              ￥
              <span class="yuan">{{ countMoney }}</span>
              <span class="jiao"></span>
            </div>
          </div>
        </div>
        <div class="foot-count">
          <div>
            结算(
            <span>0</span>)
          </div>
        </div>
      </div>
      <div class="foot-right">
        <div class="foot-every">
          <a href="javascript:;" class="foot-a" @click="$router.push('/')">
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
        <div class="foot-every" @click="goMe">
          <a href class="foot-a">
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
    <!-- 减号 -->
    <transition>
      <div class="tips" v-if="tip">
        <div class="nomore">受不了了,宝贝不能再少了哦~</div>
      </div>
    </transition>
    <!-- 删除 -->
    <div class="tips" v-if="confirm">
      <div class="confirm-box">
        <div class="are-you-sure">确定要删除这个宝贝吗?</div>
        <div class="confirm-bottom">
          <div class="no" @click="cancel">取消</div>
          <div class="yes" @click="del">确定</div>
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
      noborder: false,

      tip: false,
      confirm: false,
      index: "",
      shop: "",
      cut1: true,
      cut2: true,
      check:false,

    };
  },
  created() {
    let that = this;
    let url = "http://127.0.0.1:5500/src/data/detail.json";
    axios
      .get(url)
      .then(function (response) {
        that.list = response.data.response;
        // console.log(that.list);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(this.number);
  },
  methods: {
    goMe() {
      this.router.push({
        path: "/me",
      });
    },
    // 商铺的全选
    borderBtn(a) {
      if (a == "tm") {
        this.$store.state.check1 = !this.$store.state.check1;
        this.$store.commit("borderBtn", {
          a: a,
          check: this.$store.state.check1,
        });
      } else {
        this.$store.state.check2 = !this.$store.state.check2;
        this.$store.commit("borderBtn", {
          a: a,
          check: this.$store.state.check2,
        });
      }
    },
    minus(index, a, num) {
      if (num == 1) {
        this.tip = true;
        setTimeout(() => {
          this.tip = false;
        }, 1000);
      }
      this.$store.commit("minus", {
        index: index,
        a: a,
      });
    },
    add(index, a) {
      this.$store.commit("add", {
        index: index,
        a: a,
      });
    },
    changeBorder(index, a) {
      this.$store.commit("changeBorder", {
        index: index,
        a: a,
      });
      if(a=='tm'){
        let flag = true;
        for(let i = 0; i < this.getTm.length; i++){
          if(this.getTm[i].checked==false){
            flag= false;
            break
          }
        }
        if(flag){
          this.$store.state.check1=true
        }else{
          this.$store.state.check1= false
        }

      }else{
        let flag = true;
        for(let i = 0; i < this.getTb.length; i++){
          if(this.getTb[i].checked==false){
            flag= false;
            break
          }
        }
        if(flag){
          this.$store.state.check2=true
        }else{
          this.$store.state.check2= false
        }
      }
    },
    move(index, a) {
      if (a == "tm") {
        this.$store.state.tm[index].mid = event.changedTouches[0].clientX;
        this.$store.state.tm[index].x =
          this.getTm[index].mid - this.getTm[index].begin;
      } else {
        this.$store.state.tb[index].mid = event.changedTouches[0].clientX;
        this.$store.state.tb[index].x =
          this.getTb[index].mid - this.getTb[index].begin;
      }
    },
    start(index, a) {
      if (a == "tm") {
        this.$store.state.tm[index].begin = event.changedTouches[0].clientX;
      } else {
        this.$store.state.tb[index].begin = event.changedTouches[0].clientX;
      }
    },
    over(index, a) {
      if (a == "tm") {
        if (this.getTm[index].x <= -50) {
          this.$store.state.tm[index].x = -68;
        } else {
          this.getTm[index].x = 0;
        }
      } else {
        if (this.getTb[index].x <= -50) {
          this.$store.state.tb[index].x = -68;
        } else {
          this.getTb[index].x = 0;
        }
      }
    },
    // 删除按钮
    del() {
      this.$store.commit("delItem", {
        index: this.index,
        a: this.shop,
      });
      this.confirm = false;
    },
    // 取消
    cancel() {
      this.confirm = false;
    },
    // 确认删除
    confirms(index, a) {
      this.confirm = true;
      this.index = index;
      this.shop = a;
    },
    // 编辑
    changeCut(a) {
      if (a == "tm") {
        this.cut1 = !this.cut1;
        this.$store.commit("changeCut", {
          a: a,
          cut: this.cut1,
        });
      } else {
        this.cut2 = !this.cut2;
        this.$store.commit("changeCut", {
          a: a,
          cut: this.cut2,
        });
      }
    },
    // 全选
    selectAll() {
      this.check = !this.check;
      this.$store.commit("selectAll");
    },
  },
  watch:{
    shopLength(newVal){
      if(newVal==0){
        this.$router.push({
          path:"/nothing"
        })
      }
    },
    check1(newVal){
      if(check1){
        this.check1=newVal
      }
    }
  },
  computed: {
    shopLength(){
      return this.getTm.length+this.getTb.length
    },

    money() {
      return this.$store.state.money;
    },
    id() {
      return this.$route.query.id;
    },
    getTm() {
      return this.$store.state.tm;
    },
    getTb() {
      return this.$store.state.tb;
    },
    number() {
      let mid = 0;
      if (this.getTb.length) {
        for (let i = 0; i < this.getTb.length; i++) {
          mid += this.getTb[i].num;
        }
      }
      if (this.getTm.length) {
        for (let i = 0; i < this.getTm.length; i++) {
          mid += this.getTm[i].num;
        }
      }
      return mid;
      // return this.getTb[0].num
    },
    countMoney() {
      let parseI = 0;
      let parseF = 0;
      let price = 0;
      if (this.getTb.length) {
        for (let i = 0; i < this.getTb.length; i++) {
          if (this.getTb[i].checked) {
            price += this.getTb[i].num * this.getTb[i].price;
          }
        }
      }
      if (this.getTm.length) {
        for (let i = 0; i < this.getTm.length; i++) {
          if (this.getTm[i].checked) {
            price += this.getTm[i].num * this.getTm[i].price;
          }
        }
      }
      return price;
    },
   check1(){
     return this.$store.state.check1
   },
    check2(){
     return this.$store.state.check2
   }
  },
};

</script>

<style scoped>
.cutout-enter {
  width: 68px;
}
.cutout-enter-active {
  transition: width 1s;
}
.are-you-sure {
  padding: 10px 50px;
  font-size: 14px;
}
.confirm-bottom div {
  text-align: center;
  color: #999;
  font-weight: 600;
}
.confirm-bottom {
  display: flex;
  padding-bottom: 10px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.confirm-box {
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #333;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-right: 10px;
}
.v-leave-to,
.v-enter {
  opacity: 0;
  height: 0;
}
.v-leave-active,
.v-enter-active {
  transition: all 2s;
}
.nomore {
  background: #333;
  padding: 10px;
  border-radius: 10px;
}
.tips {
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 10;
}
.rmb {
  flex-shrink: 0;
}
.delete {
  position: absolute;
  background: #ff6700;
  color: #fff;
  right: 0;
  width: 68px;
  height: 100%;
  line-height: 5;
  text-align: center;
}
.no-border {
  border: 0 !important;
  background: rgb(255, 85, 0);
}
.col-right-bottom input {
  border: 0;
  text-align: center;
  color: #8a8a8a;
  font-size: 18px;
}
.price {
  flex-grow: 1;
  font-size: 16px;
}
.put input {
  width: 50px;
}
.put {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-right: 10px;
}
.col-right-bottom {
  display: flex;
  justify-content: space-between;
  color: #ff6700;
  align-items: center;
}
.col-right-mid {
  font-size: 13px;
  color: #ff6700;
}
.col-right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
}
.shop-bottom {
  /* padding: 10px 10px 10px 0; */
  display: flex;
  position: relative;
  margin: 10px 0;
}
.container .shopp {
  display: flex;
  width: 100%;
  background-color: #fff;
  z-index: 2;
  transition-duration: 0.5s;
}
.picture {
  width: 80px;
  height: 80px;
}
.picture img {
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
.foot-choose {
  border-bottom: 1px solid #e7e7e7;
}
.container .col-left {
  padding: 0 15px;
}
.shop-item .col {
  font-size: 14px;
}
.shop-item {
  background: #fff;
  margin-top: 10px;
}
.shop {
  display: flex;
  margin: 0 5px;
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
  margin-right: 10px;
}
.col {
  display: flex;
  align-items: center;
  padding: 15px 0 8px 15px;
  font-size: 16px;
}
.choose-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #8a8a8a;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.choose-circle img {
  width: 10px;
  height: 10px;
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
a {
  text-decoration: none;
}
.big {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>