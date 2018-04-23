<!-- 首页 -->
<template>
    <div class="center">
      <div class="page-loadmore">
        <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
          <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange"
          :bottom-all-loaded="allLoaded" :autoFill="false" ref="loadmore">
            <ul class="page-loadmore-list">
              <li v-for="item in list" class="page-loadmore-listitem">
                <router-link :to="{ path: '/center-detail', query: {id:item.id} }">{{item.title}}</router-link>
              </li>
            </ul>
            <div slot="bottom" class="mint-loadmore-bottom">
              <span class="tips-title" v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">加载中...</span>
              <span class="tips-icon" v-show="bottomStatus === 'loading'">
                <mt-spinner type="snake" style="display:inline-block;"></mt-spinner>
              </span>
            </div>
          </mt-loadmore>
        </div>
      </div>
      <footerCom></footerCom>
    </div>
</template>
<script>
  import footerCom from '@/components/footerCom'
  import { Indicator } from 'mint-ui';
  export default {
		name:'centerMd',
    data(){
      return{
        list: [],
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0,
        currentPage:1,
        pageSize:10,
        limit:10
      }
    },
    components: {
			footerCom
		},
    methods:{
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        //下拉加载的数据
        setTimeout(() => {
          let _this = this;
          _this.$axios.get('https://easy-mock.com/mock/5ad85acd8ddd0450275c0dd4/myTest/movieList'
          +"?start="+_this.currentPage+"&count="+_this.pageSize)
          .then(function(res){
            for (let i = 0; i < _this.limit; i++) {
              _this.list.push(res.data.data.list[i]);
            }
            if(_this.currentPage >= Math.ceil(res.data.total/_this.pageSize)){
              _this.currentPage = Math.ceil(res.data.total/_this.pageSize);
              //禁止上拉加载
              _this.allLoaded = true;
            }else{
              _this.currentPage++;
            }
            _this.$refs.loadmore.onBottomLoaded();
          })
          .catch(function(res){
            console.log('error');
          });
        }, 3000);
      }
    },
    beforecreated(){
      //el 和 data 并未初始化
    },
    created() {
      //完成了 data 数据的初始化，el没有
      //初始化首次加载的数据
      Indicator.open({
        //数据没显示出来之前显示加载中...
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      let _this = this;
      _this.$axios.get('https://easy-mock.com/mock/5ad85acd8ddd0450275c0dd4/myTest/movieList'
      +"?start="+_this.currentPage+"&count="+_this.pageSize)
      .then(function(res){
        _this.list = res.data.data.list;
        Indicator.close();
      })
      .catch(function(res){
        console.log('error');
        Indicator.close();
      });
      _this.currentPage++;//必须放在$axios请求结束的外面
    },
    beforeMount(){
      //完成了 el 和 data 初始化
    },
    mounted() {
      //完成挂载
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    },
    updated(){
      //data里的值被修改后，将会触发update的操作。
    }
}
</script>
<style lang="less" scoped>
  .mint-loadmore{
    margin-bottom: 90px;
  }
  .page-loadmore-listitem{
    font-size: 22px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    a{
      display: inline-block;
      width: 100%;
      line-height: 80px;
      text-decoration: none;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .tips-title{
    font-size: 22px;
    text-align: center;
  }
</style>
