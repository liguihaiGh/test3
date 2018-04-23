<template>
  <div class="footerCom">
    <router-link :to="{ name: 'center' }" exact>
      <i class="icon-i index-icon"></i>
      <span>首页</span>
    </router-link>
    <router-link :to="{name:'classify'}">
      <i class="icon-i classify-icon"></i>
      <span>分类</span>
    </router-link>
    <router-link :to="{ name: 'serverPage' }">
      <i class="icon-i server-icon"></i>
      <span>客服</span>
    </router-link>
    <router-link :to="{ name: 'shopcar' }">
      <i class="icon-i shopcar-icon"></i>
      <span>购物车</span>
    </router-link>
    <router-link :to="{ name: 'mymessage' }">
      <i class="icon-i mymessage-icon"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>
<script>
  export default {
    data(){
      return{
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .footerCom{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background-color: #fff;
    box-shadow: 1px 5px 22px #9e8989;
    a{
      display: inline-block;
      text-align: center;
      float: left;
      width: 20%;
      color: #333;
      padding-top: 5px;
      text-decoration: none;
    }
    .icon-i{
      display: block;
      height: 50px;
    }
    .index-icon{
      background: url('../images/login/index-icon.png') center no-repeat;
      background-size: 50px 50px;
    }
    .classify-icon{
      background: url('../images/login/classify-icon.png') center no-repeat;
      background-size: 50px 50px;
    }
    .server-icon{
      background: url('../images/login/server-icon.png') center no-repeat;
      background-size: 50px 50px;
    }
    .shopcar-icon{
      background: url('../images/login/shopcar-icon.png') center no-repeat;
      background-size: 50px 50px;
    }
    .mymessage-icon{
      background: url('../images/login/mymessage-icon.png') center no-repeat;
      background-size: 50px 50px;
    }
    span{
      display: block;
      width: 100%;
      height: 35px;
      font-size: 22px;
    }
    // 当前导航底部选中的样式
    .selected{
      color: red;
      background-color: #ece8e8;
    }
  }
</style>
