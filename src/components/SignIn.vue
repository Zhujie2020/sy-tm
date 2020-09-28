<template>
  <div class="container">
    <div class="sign-top">
      <div>淘宝账户登录</div>
    </div>
    <div class="sign-mid">
      <div class="sign-input">
        <label for="fm-login-password"></label>
        <div class="input-plain-wrap">
          <input type="text" placeholder="手机号/邮箱/会员名" v-model="name" />
        </div>
      </div>
      <div class="sign-input has-password-look-btn">
        <label for="fm-login-password"></label>
        <div class="input-plain-wrap put">
          <el-input
            placeholder="请输入密码"
            v-model="password"
            show-password
          ></el-input>
        </div>
      </div>
    </div>
    <div class="sign-btn">
      <div @click="confirm">登录</div>
    </div>
    <div class="sign-bottom">
      <div>短信验证登录</div>
      <div>免费注册</div>
    </div>
    <div class="mask" v-if="isShow">
      <div class="mask-show">
        <div class="alert-top">登录名或登录密码不正确</div>
        <div class="alert-top alert-bottom" @click="confirmAgain">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      name:"",
      isShow:false,
    };
  },
  methods:{
    confirm(){
      if(this.name=="divdage"&&this.password=="666666"){
        this.$router.push({
          path:"/nothing"
        })
        this.login = !this.login 
      }else{
        this.isShow =!this.isShow
      }
    },
    confirmAgain(){
     this.isShow=!this.isShow
    }
  },
  computed:{
    login(){
      return this.$store.state.login
    }
  }
  
};
</script>

<style>
.put .el-input__inner {
  padding: 22px 15px;
  border-radius: 0;
  border: 0;
  border-bottom: 1px solid #c8c8c8;
}
input::-webkit-input-placeholder {
  color: rgb(194, 198, 205);
  font-size: 16px;
}
</style>

<style scoped>
.alert-top{
  width: 100%;
  text-align: center;
  padding: 15px ;
  border-bottom: 1px solid #c8c8c8;
}
 .mask-show .alert-bottom{
  color:#ff6700;
  padding: 8px;
}
.mask-show{
width: 70%;
background: #fff;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
font-size: 14px;
color: #999;
}
.mask{
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  width:100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
}
.sign-bottom{
  display: flex;
  width: 96%;
  font-size: 14px;
  color: #ff0036;
  justify-content: space-between;
  margin: 10px 8px;
}
.sign-btn > div {
  background: #ff0036;
  width: 96%;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  margin: 15px 8px;
  font-size: 16px;
}

.password-look-btn {
  position: absolute;
  top: 16px;
  right: 10px;
}
.password-look-btn img {
  width: 20px;
}
.has-password-look-btn {
  position: relative;
}
.input-plain-wrap input {
  padding: 13px;
  border: 0;
  border-bottom: 1px solid #c8c8c8;
  outline: 0;
  width: 100%;
  font-size: 16px;
  /* background: red; */
}
.sign-mid {
  width: 100%;
}
.sign-top {
  height: 6%;
  width: 100%;
  background-color: rgb(247, 247, 248);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  margin-bottom: 15px;
  border-bottom: 1px solid #c8c8c8;
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgb(240, 240, 240);
}
</style>