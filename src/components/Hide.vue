<template>
  <!-- 隐藏的评论 -->
  <transition name="comment">
    <div class="big">
      <div class="title-top-brand">
        <div class="pic" @click="$router.go(-1)">
          <img src="../assets/左灰.png" />
        </div>
        <div class="three">评论</div>
      </div>
      <div class="container">
        <div class="container-choose">
          <div class="pink all">全部</div> 
          <div class="all">追加</div>
          <div class="all">有图(9)</div>
        </div>
        <div class="container-comment" v-for="(item,index) in list" :key = item>
            <div class="time">
                <div>{{item.name[index]}}</div>
                <div>2020-09-30</div>
            </div>
            <div class="content">{{item.comments[index]}}</div>
            <div class="choose">颜色分类：杏色； 尺码:s码 (建议90斤以下)</div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      seeComment: true,
      list: [],
    };
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
  },
};
</script>
<style scoped>
.comment-enter{
    width: 100%;
}
.comment-enter-active{
    transition: all 1s;
}
.choose{
    color: #999;
}
.content{
    font-size: 16px;
    margin-bottom: 10px;
}
.time{
    display: flex;
    justify-content: space-between;
    color: #999;
    
    margin-bottom: 10px;
}
.container-comment{
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
}
.container-choose .pink{
    background: #ff0036;
     color: #fff;
}
.all{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    margin-right: 10px;
    padding: 10px 15px;
    border-radius: 10px;
   
}
.container-choose {
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #ccc;
}
.pic img {
  width: 100%;
  height: 100%;
}
.pic {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
}
.title-top-brand {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}
.three {
  display: flex;
  flex-grow: 1;
  font-weight: 600;
  align-items: center;
  color: rgb(153, 153, 153);
  justify-content: center;
}
.container {
  display: flex;
  flex-direction: column;
  /* background: rgb(250, 250, 250); */
  font-size: 14px;
  color: #333;
  overflow: auto;
  width: 100%;
}
.big {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>>
