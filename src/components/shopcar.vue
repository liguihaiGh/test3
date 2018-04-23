<template>
  <div class="shopcar">
    <p>购物车</p>
    <footerCom></footerCom>
  </div>
</template>
<script>
  import footerCom from '@/components/footerCom'
  export default{
    data(){
      return{
        name:'shopcarMd'
      }
    },
    components:{
      footerCom
    }
  }
</script>
