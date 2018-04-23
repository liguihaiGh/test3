<template>
  <div class="mymessage">
    <p>我的个人中心</p>
    <footerCom></footerCom>
  </div>
</template>
<script>
  import footerCom from '@/components/footerCom'
  export default{
    data(){
      return{
        name:'mymessageMd'
      }
    },
    components:{
      footerCom
    }
  }
</script>
