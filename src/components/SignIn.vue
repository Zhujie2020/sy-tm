<template>
  <div class="container">
    <div class="sign-top">
      <div>淘宝账户登录</div>
    </div>
    <div class="sign-mid">
      <div class="sign-input">
        <label for="fm-login-password"></label>
        <div class="input-plain-wrap">
          <input type="text" placeholder="手机号/邮箱/会员名" class="put"/>
        </div>
      </div>
      <div class="sign-input has-password-look-btn">
        <label for="fm-login-password"></label>
        <div class="input-plain-wrap">
          <el-input class="put"
            placeholder="请输入密码"
            v-model="input"
            show-password
          ></el-input>
        </div>
      </div>
    </div>
    <div class="sign-bottom"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style scoped>
/* .el-input__inner{
      -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-bottom: 1px solid #c8c8c8;
    box-sizing: border-box;
    border: 0;
    color: #c8c8c8;
    display: inline-block;
    font-size: 16px;
    height: 52px;
    line-height: 40px;
    outline: 0;
    padding: 0px 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
} */

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
  padding: 17px;
  border: 0;
  border-bottom: 1px solid #c8c8c8;
  outline: 0;
  width: 100%;
  font-size: 16px;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgb(240, 240, 240);
}
</style>