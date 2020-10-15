<template>
  <div>
    <div v-for="item in list" :key=item.id class="right">

        <div class="rightContain">
            <p>{{item.title}}</p>
            <div class="rightContain-item">
                <div v-for="item in item.contain" :key=item.id class="rightContain-item-list">
                    <img :src="item.pic" alt="">
                    <p>{{item.name}}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.right{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.rightContain{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.rightContain p{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    padding-left: 10px;
    color: #9B9B9B;
}
.rightContain-item{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
}
.rightContain-item-list{
    display: flex;
    flex-direction: column;
    width: 33.3%;
    align-items: center;
}
.rightContain-item-list p{
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 30px;
    color: #5D5D5D;
    padding-left: 0;
}
.rightContain-item-list img{
    width:70%;
}


</style>

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
    let url = "http://127.0.0.1:5500/src/data/classify/vecommend.json";
    axios
      .get(url)
      .then(function (response) {
        //  console.log(response);
        that.list = response.data.list;
        console.log(that.list);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>