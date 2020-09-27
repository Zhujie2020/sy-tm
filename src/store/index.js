import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tm: [],
    tb: [],
    check1:false,
    check2:false
  },
  mutations: {
    addItem(state, newVal) {
      let flag = true;
      for (let i = 0; i < state.tm.length; i++) {
        if (newVal.id == state.tm[i].id) {
          flag = false;
          state.tm[i].num++;
          break
        }
      }
      if (flag) {
        state.tm.push({
          num: 1,
          price: newVal.price,
          img: newVal.swiper[0],
          info: newVal.info,
          id: newVal.id,
          // 小单选状态
          checked: false,
          begin: 0,
          mid: 0,
          x: 0,
          // 全选状态
          checkAll:false
        })
      }
    },
    addTb(state, newVal) {
      let flag = true;
      for (let i = 0; i < state.tb.length; i++) {
        if (newVal.id == state.tb[i].id) {
          flag = false;
          state.tb[i].num++;
          break
        }
      }
      if (flag) {
        state.tb.push({
          num: 1,
          price: newVal.price,
          img: newVal.swiper[0],
          info: newVal.info,
          id: newVal.id,
          checked: false,
          begin: 0,
          mid: 0,
          x: 0,
          tip: false,
          cut:true,
          checkAll:false
        })
      }
    },
    // 购物车减号
    minus(state, obj) {
      if (obj.a == "tb") {
        if (state.tb[obj.index].num > 1) {
          state.tb[obj.index].num--;
        } else if (state.tb[obj.index].num == 1) {
          state.tb[obj.index].tip == true
        }
      } else {
        if (state.tm[obj.index].num > 1) {
          state.tm[obj.index].num--;
        } else if (state.tm[obj.index].num == 1) {
          state.tm[obj.index].tip == true
        }
      }
    },
    add(state, obj) {
      if (obj.a == "tb") {
        state.tb[obj.index].num++;
      } else {
        state.tm[obj.index].num++;
      }
    },
    // 单选
    changeBorder(state, obj) {
      if (obj.a == "tb") {
        state.tb[obj.index].checked = !state.tb[obj.index].checked;
      } else {
        state.tm[obj.index].checked = !state.tm[obj.index].checked;
      }
    },
    // 店铺全选
    borderBtn(state,obj){
      if(obj.a=='tb'){
        if(obj.check){
          for(let i = 0; i < state.tb.length; i++){
            state.tb[i].checked = true;
          }
        }else{
          for(let i = 0; i < state.tb.length; i++){
            state.tb[i].checked = false;
          }
        }
      }else{
        if(obj.check){
          for(let i = 0; i < state.tm.length; i++){
            state.tm[i].checked = true;
          }
        }else{
          for(let i = 0; i < state.tm.length; i++){
            state.tm[i].checked = false;
          }
        }
      }
    },
    delItem(state, obj) {
      if (obj.a == 'tm') {
        state.tm.splice(obj.index, 1)
      } else {
        state.tb.splice(obj.index, 1)
      }
    },
   changeCut(state,obj){
     if(obj.a=='tm'){
       if(obj.cut){
         for(let x of state.tm){
           x.x=0
         }

       }else{
        for(let x of state.tm){
          x.x=-68
        }
       }
     }else{
      if(obj.cut){
        for(let x of state.tb){
          x.x=0
        }

      }else{
       for(let x of state.tb){
         x.x=-68
       }
      }
     }
   },
  //  全选
   selectAll(state){
     if(state.checkAll){
       state.check1= true;
       state.check2 = true;
     }
   }
  }


})