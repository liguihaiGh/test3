<template>
  <div class="login">
    <img class="login-bg" src="../images/login/login-background.png">
    <img class="login-logo" src="../images/login/user-img.jpg">
    <div class="login-main">
        <form id="frmLogin" name="frmLogin" @submit.prevent="submitFn">
          <div class="frm-item">
            <input class="frm-ipt tel-icon" name="mobile" type="text"  v-validate="'required|mobile'" autocomplete="off" placeholder="请输入您的电话号码">
            <span v-show="errors.has('mobile')" class="help">{{ errors.first('mobile') }}</span>
          </div>
          <div class="frm-item">
            <input class="frm-ipt passwd-icon" name="passWd" type="password" v-validate="'required'" autocomplete="off" placeholder="请输入您的密码">
            <span v-show="errors.has('passWd')" class="help">{{ errors.first('passWd') }}</span>
          </div>
          <button class="frm-btn" type="submit" :disabled="disabledFlag">登录</button>
        </form>
    </div>
    <div v-bind:class="{active:isActive}" class="loading">
      <div class="loading-tips">{{msg}}</div>
    </div>
  </div>
</template>
<script>
  export default {
      name: 'Home',
      data() {
        return {
          msg: '',
          isActive:true
        }
      },
      computed:{
        disabledFlag(){
          return this.$validator.errors.has('mobile');
        }
      },
      methods: {
        submitFn(){
          //表单不为空判断
          this.$validator.validateAll().then((result)=>{
            if(result){
              this.isActive = false;
              //表单不为空的时候可以在这里进行数据提交axios
              let self = this; //要声明一个self变量，因为下面的this.$router 中的this不是指向vue了
              // this.$axios.get('/api/movie/in_theaters')
              // .then(function(res){
              //   self.$router.push({name:'center'}); //登录成功之后跳转到center.vue页面
              //   this.isActive = true;
              //   console.log(res);
              // }).catch(function(res){
              //   //返回失败
              //   console.log(res);
              // });
              self.$router.push({name:'center'});
            }else{
              console.log('error');
            }
          });
        }
      }
  }
</script>
<style lang="less" scoped>
  .login-bg{
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
  }
  .login-logo{
    position: fixed;
    top: 200px;
    left: 50%;
    width: 150px;
    border-radius: 50%;
    transform: translate(-50%,-50%);
    z-index: 2;
  }
  .login-main{
    width: 70%;
    position: fixed;
    top: 50%;
    left: 15%;
    transform: translate(0%,-50%);
    z-index: 2;
  }
  .frm-item{
    position: relative;
  }
  .frm-item .frm-ipt{
    width: 100%;
    font-size: 20px;
    height: 55px;
    line-height: 55px;
    padding-left: 13%;
    border: 1px solid #fff;
  }
  .tel-icon{
    background:#fff url('../images/login/tel.png') 8px center no-repeat;
    background-size: 35px 35px;
  }
  .passwd-icon{
    background:#fff url('../images/login/passwd.png') 8px center no-repeat;
    background-size: 35px 35px;
  }
  .frm-btn{
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border: 1px solid #fff;
  }
  span.help{
    color: #fff;
    font-size: 18px;
    display: inline-block;
    position: absolute;
    top: -3px;
    left: 0;
    width: 100%;
  }
  .active{
    display: none;
  }
  .loading{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.8;
    z-index: 998;
  }
  .loading-tips{
    animation: turn linear 2s infinite;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    box-shadow: 15px 0 0 0 cyan, 11px 11px 0 0 cyan, 0 15px 0 0 cyan, -11px 11px 0 0 cyan, -15px 0 0 0 cyan, -11px -11px 0 0 cyan, 0 -15px 0 0 cyan, 11px -11px 0 0 cyan;
    overflow: hidden;
    z-index: 999;
  }

  @keyframes turn
		{
			0%   {transform:rotate(0deg)}
			100% {transform:rotate(360deg)}
		}

</style>
