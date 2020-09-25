<template>
  <div class="classify">
    <div class="title">
      <p>全部分类</p>
    </div>
    <div class="container">
      
      <div class="container-left">
        <div v-for="(item,index) in list" :key="index">
          <p class="container-left-item" @click="changePage(index)" :class="index==num?'active':''">{{item}}</p>
        </div>
      </div>

    <component :is="comName" class="comPage"></component>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import vecommend from "./classify/Vecommend.vue"
import brand from "./classify/Branda.vue"
import tmallInternate from "./classify/TmallInternational.vue"
import wclothes from "./classify/WomenClothesa.vue"
import wshose from "./classify/WomenShoes.vue"

export default {
  components:{
        "vecommend":vecommend,
        "brand":brand,
        "tmall-internate":tmallInternate,
        "wclothes":wclothes,
        "wshose":wshose
      },
  data(){
    return{
      pageName:"",
      num:0,
      list:["为您推荐","国际大牌","天猫国际","女装","女鞋","男装","男鞋","内衣","母婴","手机","数码","家电","美妆","家纺"],
      rightPage:[],
      comName:"vecommend"
    }
  },
  
  methods:{
    changePage(index){
      // console.log(index);
      this.num=index;
      // if(index==0){
      //   this.comName="vecommend"
      // }else if (index==1) {
      //    this.comName="brand"
      // }
      switch (index) {
        case 0:
        this.comName="vecommend"
          break;

          case 1:
        this.comName="brand"
          break;

          case 2:
        this.comName="tmall-internate"
          break;

          case 3:
        this.comName="wclothes"
          break;

          case 4:
        this.comName="wshose"
          break;

        
      }
      // console.log(this.num);
    }
  },


}

</script>

<style scoped>
.active{
  background: white;
}
.classify{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.title{
  width: 100%;
  height:6%;
  display: flex;
  align-items: center;
  background: #EEE;
  flex-shrink: 0;
}
.title p {
  font-size: 14px;
  padding-left: 15px;
}
.container{
  width: 100%;
  height: 94%;
  flex-shrink: 0;
  overflow: auto;
  display: flex;
}
.container-left{
  width: 23%;
  height: 100%;
  overflow: auto;
  background: #EEE;
  display: flex;
  flex-direction:column ;
}

.comPage{
  display: flex;
  flex-direction: column;
  width: 77%;
  height: 100%;
  overflow: auto;
}
.container-left-item{
  width: 100%;
  height:60px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
}
.rightItem{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.rightTitle{
  width: 100%;
  height: 60px;
}
.rightTitle p{
  height: 60px;
  line-height: 60px;
  padding-left: 10px;
  font-size: 14px;
}
.rightContain{
  width: 100%;
  display: flex;

}

</style>