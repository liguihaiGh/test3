<template>
  <div class="serverPage">
    <p>客服页面</p>
    <footerCom></footerCom>
  </div>
</template>
<script>
  import footerCom from '@/components/footerCom'
  export default{
    data(){
      return{
        name:''
      }
    },
    components:{
      footerCom
    }
  }
</script>
