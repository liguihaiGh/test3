<!-- 分类 -->
<template>
  <div class="classify">
    <div class="lantern-slide">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.id">
          <img :src="item.imgUrl">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="tab-slide">
      <mt-navbar v-model="selected">
        <mt-tab-item class="tab-btn" id="cloth">衣服</mt-tab-item>
        <mt-tab-item class="tab-btn" id="trousers">裤子</mt-tab-item>
        <mt-tab-item class="tab-btn" id="computers">电脑</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="cloth">
          <div class="">衣服栏目</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="trousers">
          这个是裤子栏目
        </mt-tab-container-item>
        <mt-tab-container-item id="computers">
          这个是电脑栏目
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <footerCom></footerCom>
  </div>
</template>
<script>
  import footerCom from '@/components/footerCom'
  export default{
    name:'classifyMd',
    data(){
      return {
        selected:'cloth',
        list:[],
        currentPage:1,
        pageSize:3
      }
    },
    components:{
      footerCom
    },
    methods:{
      swiperLoadin(){
        let _this = this;
        _this.$axios.get('https://easy-mock.com/mock/5ad85acd8ddd0450275c0dd4/myTest/bannerList')
        .then(function(res){
          console.log(res.data.data.all);
          _this.list = res.data.data.all;
        })
        .catch(function(res){
          console.log(res);
        });
      }
    },
    created(){
      let _this = this;
      _this.swiperLoadin();
    }
  }
</script>
<style lang="less">
  .lantern-slide{
    width: 100%;
    height: 300px;
    overflow: hidden;
    background-color: #ccc;
  }
  .tab-btn .mint-tab-item-label{
    font-size: 24px !important;
  }
  .lantern-slide img{
    width: 100%;
    text-align: center;
  }
  .mint-tab-container{
    font-size: 22px;
    padding:15px;
  }
</style>
