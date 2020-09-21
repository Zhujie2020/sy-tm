<template>
  <div class="container">
    <!-- 头 -->
    <div class="detail-head">
      <div class="detail-title-list detail-list" @click="$router.go(-1)">
        <img src="../assets/左白.png" alt />
      </div>
      <div class="detail-title">
        <div class="detail-title-list active" :class="[active=='shop'?'shop':'']">商品</div>
        <div class="detail-title-list">评价</div>
        <div class="detail-title-list">详情</div>
      </div>
      <div class="detail-title-list detail-list">
        <img src="../assets/车白.png" alt />
      </div>
    </div>
    <div class="info">
      <div class="money">￥2344-8580.5</div>
      <div>sajdisacjksd cijwdficbsd kjcbisdubcfiljsd bcjisdbcijwsbdljsdgcfijsdbcf;idgcf</div>  
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  color: rgb(153, 153, 153);
  justify-content: space-between;
}
.detail-head {
  padding: 10px 20px;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  background: url(https://img.alicdn.com/imgextra/i4/420567757/O1CN015SJR3x27AkuAjvale_!!0-item_pic.jpg_2200x2200Q100s50.jpg_.webp);
  background-size: 100% 100%;
}
.detail-title {
  flex-grow: 1;
  justify-content: space-between;
  display: flex;
  text-align: center;
  align-items: center;
  padding: 5px;
  height: 8%;
  display: none;
}
.detail-title-list{
  display: flex;
  align-items: center;
  justify-content: center;
}
.detail-title .detail-title-list {
  width: 33.3%;
  font-size: 14px;
  margin: 0 20px;
  padding: 10px 0;
}
.detail-list{
  background: rgba(144,145,145,.5);
  border-radius: 50%;
  width:30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
}
.detail-title-list img {
  width: 20px;
  height: 20px;
  
}
.active {
  border-bottom: 2px solid rgb(255, 43, 88);
}
</style>