<template>
  <div class="classify">
    <div class="title">
      <p>全部分类</p>
    </div>
    <div class="container">
      
      <div class="container-left">
        <div v-for="(item,index) in rightPage" :key="index">
          <p class="container-left-item" @click="changePage(index)" :class="index==num?'active':''">{{item.name}}</p>
        </div>
      </div>

      <div class="container-right">
          <div class="rightItem" v-for="(item,index) in rightPage" :key="index">
            <div class="rightTitle" v-for="(item,index) in item.data" :key="index">
              <p>{{item.listName}}</p>
            </div>

            <div class="rightContain">
              <div class="rightContain-item" v-for="(item,index) in item.data" :key="index">
                <img :src="item.img" alt="">
                <p>2222</p>
              </div>
            </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      pageName:"",
      num:0,
      rightPage:[
        {
          name:"为您推荐",
          data:[{
            listName:"女装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          },
          {
            listName:"女鞋",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          },
          {
            listName:"男装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          },
          {
            listName:"家电",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }
          ]
        },
        {
          name:"国际大牌",
          data:[{
            listName:"女鞋",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }]
        },
        {
          name:"女装",
          data:[{
            listName:"男装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }]
        },
        {
          name:"女鞋",
          data:[{
            listName:"女装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }]
        },
        {
          name:"男装",
          data:[{
            listName:"女装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }]
        },
        {
          name:"男鞋",
          data:[{
            listName:"女装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }]
        },
        {
          name:"内衣",
          data:[{
            listName:"女装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }]
        },
        {
          name:"母婴",
          data:[{
            listName:"女装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }]
        },
        {
          name:"手机",
          data:[{
            listName:"女装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }]
        },
        {
          name:"数码",
          data:[{
            listName:"女装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }]
        },
        {
          name:"家电",
          data:[{
            listName:"女装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }]
        },
        {
          name:"美妆",
          data:[{
            listName:"女装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }]
        },
        {
          name:"箱包",
          data:[{
            listName:"女装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }]
        },
        {
          name:"运动",
          data:[{
            listName:"女装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }]
        },
        {
          name:"户外",
          data:[{
            listName:"女装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }]
        },
        {
          name:"家装",
          data:[{
            listName:"女装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }]
        },
        {
          name:"家纺",
          data:[{
            listName:"女装",
            listContain:[
            {
            img:"//img.alicdn.com/tfs/TB1YTCkqXOWBuNjy0FiXXXFxVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"连衣裙"
            },
            {
            img:"//img.alicdn.com/tfs/TB1I0W2qf1TBuNjy0FjXXajyXXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"体恤"
            },
            {
            img:"//img.alicdn.com/tfs/TB1XzKuqXuWBuNjSspnXXX1NVXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"衬衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1JjmnqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"雪纺衫"
            },
            {
            img:"//img.alicdn.com/tfs/TB1kO5nqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"裤子"
            },
            {
            img:"//img.alicdn.com/tfs/TB1H6enqkOWBuNjSsppXXXPgpXa-100-100.jpg_210x210Q50s50.jpg_.webp",
            productName:"牛仔裤"
            }
          ]
          }]
        },
      ]
    }
  },
  
  methods:{
    changePage(index){
      // console.log(index);
      this.num=index;
      // console.log(this.num);
    }
  },


}

</script>

<style>
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
  display: flex;
  flex-direction: column;
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
.rightItem{
  width: 100%;
  background: wheat;
}
.rightTitle{
  width: 100%;
  height: 60px;
  background: rgb(173, 238, 130);
}
.rightTitle p{
  height: 60px;
  line-height: 60px;
  padding-left: 10px;
  color: #9B9B9B;
  font-size: 14px;
}
.rightContain{
  width: 100%;
  background: darkgrey;
  display: flex;

}
</style>