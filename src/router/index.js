import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import center from '@/components/center'
import footerCom from '@/components/footerCom'
import classify from '@/components/classify'
import serverPage from '@/components/serverPage'
import shopcar from '@/components/shopcar'
import mymessage from '@/components/mymessage'
import centerDetail from '@/components/center-detail'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'selected', //这个是导航栏激活状态的class样式值
  routes: [
    {
      path: '/',
      name: 'login', //登录页面
      component: login
    },
    {
      path: '/center',
      name: 'center', //首页
      meta:{
        requireAuth:true //添加该字段，表示进入这个路由是需要登录的
      },
      component: center
    },
    {
      path:'/footerCom',
      name:'footerCom', //公共底部
      component: footerCom
    },
    {
      path:'/classify',
      name:'classify', //分类页面
      component:classify
    },
    {
      path:'/serverPage',
      name:'serverPage',//服务页面
      component:serverPage
    },
    {
      path:'/shopcar',
      name:'shopcar', //购物车页面
      component:shopcar
    },
    {
      path:'/mymessage',
      name:'mymessage', //我的页面
      component:mymessage
    },
    {
      path:'/center-detail',
      name:'center-detail', //center详情页面
      component:centerDetail
    }
  ]
})
