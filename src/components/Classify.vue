<template>
  <div class="classify">
    <div class="title">
      <p>全部分类</p>
    </div>
    <div class="container">
      <div class="container-left">
        <div :class="{}" v-for="item in leftList" :key="item.key" @click="changePage">
          <p class="container-left-item" @click="changePage">{{item.name}}</p>
        </div>
      </div>
      <div class="container-right">
        <component :is="pageName"></component>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      list:[],
      leftList:[],
      pageName:""
    }
  },
  
  methods:{
    changePage(){

    }
  },

  created(){
    let that=this;
    let url="http://127.0.0.1:5500/src/data/classify.json";
    axios
    .get(url)
    .then(function (response) {
      console.log(response);
      that.list=response.data.response
      that.leftList=response.data.productsList
    })
    .catch(function (error) {
      console.log(error);
    })
  },

}
</script>

<style>
.classify{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.title{
  width: 100%;
  height:6%;
  background: olive;
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
  background: gainsboro;
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
.container-right{
  width: 77%;
  height: 100%;
  overflow: auto;
  background: rgb(191, 185, 250);
}
.container-left-item{
  width: 100%;
  height:60px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
}
</style>