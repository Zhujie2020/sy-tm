<template>
  <div class="big">
    <header>
      <div class="back" @click="$router.go(-1)">
        <img src="../assets/左灰.png" />
      </div>
      <div class="car-title">
        购物车(
        <span>{{ number }}</span>)
      </div>
    </header>
    <div class="container">
      <!-- 天猫超市的 绿的tm -->
      <div class="shop-item">
        <div class="foot-choose">
          <div class="col col-left">
            <!-- 店铺全选-->
            <div class="choose-circle" @click="borderBtn">
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
            <div>编辑</div>
          </div>
        </div>
        <div class="shop-bottom" v-for="(item, index) in getTm" :key="index">
          <div
            class="shopp"
            @touchmove="move(index,'tm')"
            @touchstart="start(index,'tm')"
            @touchend="over(index,'tm')"
            :style="{transform:'translateX('+item.x+'px)'}"
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
                <div>￥</div>
                <dir class="price">{{ item.price }}</dir>
                <div class="put">
                  <div>
                    <img src="../assets/减号.png" alt @click="minus(index, 'tm')" />
                  </div>
                  <div>
                    <input type="text" :value="item.num" disabled />
                  </div>
                  <div>
                    <img src="../assets/加号.png" alt @click="add(index, 'tm')" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="delete" @click="del(index,'tm')">删除</div>
        </div>
      </div>
      <!--红的 tb-->
      <div class="shop-item">
        <div class="foot-choose">
          <div class="col col-left">
            <!-- 店铺全选-->
            <div class="choose-circle">
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
            <div>编辑</div>
          </div>
        </div>
        <!-- 下面 -->
        <div class="shop-bottom" v-for="(item, index) in getTb" :key="index">
          <!-- 左面 -->
           <div
            class="shopp"
            @touchmove="move(index,'tb')"
            @touchstart="start(index,'tb')"
            @touchend="over(index,'tb')"
            :style="{transform:'translateX('+item.x+'px)'}"
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
                <div>￥</div>
                <dir class="price">{{ item.price }}</dir>
                <div class="put">
                  <div>
                    <img src="../assets/减号.png" alt @click="minus(index, 'tb')" />
                  </div>
                  <div>
                    <input type="text" :value="item.num" disabled />
                  </div>
                  <div>
                    <img src="../assets/加号.png" alt @click="add(index, 'tb')" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="delete" @click="del(index,'tb')">删除</div>
        </div>
      </div>
    </div>
    <footer>
      <div class="foot-top">
        <div class="foot-choose">
          <div class="col">
            <div class="choose-circle">
              <img src="../assets/对号.png" alt />
            </div>
            <div>全选</div>
          </div>
          <div class="col coll">
            <div class="col-money">合计:</div>
            <div class="money">
              ￥
              <span class="yuan">0.</span>
              <span class="jiao">00</span>
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      noborder: false,
      begin: 0,
      mid: 0,
      x: 0
    };
  },
  created() {
    let that = this;
    let url = "http://127.0.0.1:5500/src/data/detail.json";
    axios
      .get(url)
      .then(function(response) {
        that.list = response.data.response;
        console.log(that.list);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(this.number);
  },
  methods: {
    goMe() {
      this.router.push({
        path: "/me"
      });
    },
    borderBtn() {
      this.noborder = !this.noborder;
    },
    minus(index, a) {
      this.$store.commit("minus", {
        index: index,
        a: a
      });
    },
    add(index, a) {
      this.$store.commit("add", {
        index: index,
        a: a
      });
    },
    changeBorder(index, a) {
      this.$store.commit("changeBorder", {
        index: index,
        a: a
      });
    },
    move(index,a) {
      if(a=='tm'){
        this.$store.state.tm[index].mid = event.changedTouches[0].clientX;
        this.$store.state.tm[index].x = this.getTm[index].mid - this.getTm[index].begin;
      }else{
        this.$store.state.tb[index].mid = event.changedTouches[0].clientX;
        this.$store.state.tb[index].x = this.getTb[index].mid - this.getTb[index].begin;
      }
    },
    start(index,a) {
      if(a=='tm'){
        this.$store.state.tm[index].begin = event.changedTouches[0].clientX;
      }else{
        this.$store.state.tb[index].begin = event.changedTouches[0].clientX;
      }
    },
    over(index,a) {
      if(a=="tm"){
        if (this.getTm[index].x <= -50) {
          this.$store.state.tm[index].x = -68;
        } else {
          this.getTm[index].x = 0;
        }
      }else{
         if (this.getTb[index].x <= -50) {
          this.$store.state.tb[index].x = -68;
        } else {
          this.getTb[index].x = 0;
        }
      }
    },
    del(index,a){
     this.$store.commit("delItem",{
       index:index,
       a:a
     })
    }
  },
  computed: {
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
    }
  }
};
</script>

<style scoped>

.delete {
  position: absolute;
  background: #ff6700;
  color: #fff;
  right:0;
  width:68px;
  height: 100%;
  line-height: 100%;
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
}
.shop-bottom {
  /* padding: 10px 10px 10px 0; */
  display: flex;
 position: relative;
  margin:10px 0;

}
.container .shopp{
   display: flex;
  width: 100%;
  background-color: #fff;
  z-index: 2;
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
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>