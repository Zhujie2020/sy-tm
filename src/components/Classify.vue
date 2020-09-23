<template>
  <div class="classify">
    <div class="title">
      <p>全部分类</p>
    </div>
    <div v-for="item in list" :key="item.key">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      list:[]
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
  height: 5.5%;
  background: olive;
  display: flex;
  align-items: center;
  background: #EEE;
}
.title p {
  font-size: 14px;
  padding-left: 15px;
}
</style>