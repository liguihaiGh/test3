<template>
  <div class="center-detail">
    <div class="movie-main">
      <p>标题党</p>
      <article>
        {{msg}}
      </article>
    </div>
    <footerCom></footerCom>
  </div>
</template>
<script>
  import footerCom from '@/components/footerCom'
  export default{
    name:'centerDetail',
    data(){
      return{
        msg:''
      }
    },
    components:{
      footerCom
    },
    methods:{
      getMovieDetail(){
        let _this = this;
        _this.$axios.get('https://easy-mock.com/mock/5ad85acd8ddd0450275c0dd4/myTest/movieDetail'+"?id="+_this.$route.query.id)
        .then(function(res){
          _this.msg = res.data.data.list.content;
        })
        .catch(function(res){
          console.log(res);
        });
      }
    },
    create(){

    },
    mounted(){
      this.getMovieDetail();
    }
  }
</script>
<style lang="less" scoped>
  .movie-main{
    padding:10px;
    font-size: 20px;
    p{
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      padding:10px 0;
    }
  }
</style>
