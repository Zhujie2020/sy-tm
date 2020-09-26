import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tm: [],
    tb: [],
  },
  mutations: {
    addItem(state, newVal) {
      let flag = true;
      for(let i = 0; i < state.tm.length; i++){
        if(newVal.id==state.tm[i].id){
          flag=false;
          state.tm[i].num++;
          break
        }
      }
      if(flag){
        state.tm.push({
          num: 1,
          price: newVal.price,
          img: newVal.swiper[0],
          info: newVal.info,
          id:newVal.id,
          checked:false, begin: 0,
          mid: 0,
          x: 0
        })
      }
    },
    addTb(state, newVal) {
      let flag = true;
      for(let i = 0; i < state.tb.length; i++){
        if(newVal.id==state.tb[i].id){
          flag=false;
          state.tb[i].num++;
          break
        }
      }
      if(flag){
        state.tb.push({
          num: 1,
          price: newVal.price,
          img: newVal.swiper[0],
          info: newVal.info,
          id:newVal.id,
          checked:false,
          begin: 0,
          mid: 0,
          x: 0
        })
      }
    },
    // 购物车减号
    minus(state,obj){
      if(obj.a=="tb"){
        if(state.tb[obj.index].num>1){
          state.tb[obj.index].num--;
        }
      }else{
        if(state.tm[obj.index].num>1){
          state.tm[obj.index].num--;
        }
      }
    },
    add(state,obj){
      if(obj.a=="tb"){
          state.tb[obj.index].num++;
      }else{
          state.tm[obj.index].num++;
      }
    },
    changeBorder(state,obj){
      if(obj.a=="tb"){
          state.tb[obj.index].checked=!state.tb[obj.index].checked;
      }else{
        state.tm[obj.index].checked=!state.tm[obj.index].checked;
      }
    },
    delItem(state,obj){
      if(obj.a=='tm'){
        state.tm.splice(obj.index,1)
      }else{
        state.tb.splice(obj.index,1)
      }
    }
  }


})