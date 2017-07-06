import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/vues/index'
import Social from '@/vues/pro/social'
import Business from '@/vues/pro/business'
import proDetail from '@/vues/pro/children/proDetail'
import socialPrDetail from '@/vues/pro/children/socialPrDetail'
import shabao18Detail from '@/vues/pro/children/shabao18Detail'
import shabao48 from '@/vues/pro/children/shabao48'
/*沙包资讯*/
import sbInfoIndex from '@/vues/sbInfo/sbInfoIndex'
import sbInfo from '@/vues/sbInfo/children/sbInfo'
import sbInfo1 from '@/vues/sbInfo/children/sbInfo1'
import sbInfo2 from '@/vues/sbInfo/children/sbInfo2'
import sbInfo3 from '@/vues/sbInfo/children/sbInfo3'
import sbInfo4 from '@/vues/sbInfo/children/sbInfo4'
import sbInfo5 from '@/vues/sbInfo/children/sbInfo5'
import sbInfo6 from '@/vues/sbInfo/children/sbInfo6'
import sbInfo7 from '@/vues/sbInfo/children/sbInfo7'
import sbNews1 from '@/vues/sbInfo/children/sbNews1'
import sbNews2 from '@/vues/sbInfo/children/sbNews2'
import sbNews3 from '@/vues/sbInfo/children/sbNews3'
import sbNews4 from '@/vues/sbInfo/children/sbNews4'
import sbNews5 from '@/vues/sbInfo/children/sbNews5'
import sbNews6 from '@/vues/sbInfo/children/sbNews6'
import sbNews7 from '@/vues/sbInfo/children/sbNews7'
/*活动*/
import activityIndex from '@/vues/activity/activityIndex'
import activityList from '@/vues/activity/children/activityList'
import activityDetail from '@/vues/activity/children/activityDetail'
/*用户中心*/
import aboutSocial from '@/vues/aboutSocial/aboutSocial'
import socialBenefit from '@/vues/aboutSocial/socialBenefit'
import socialInsure from '@/vues/aboutSocial/socialInsure'
import Mine from '@/vues/mine'
import baogongtou from '@/vues/baogongtou'
import wcGuider from '@/vues/wcGuider'
import aboutSB from '@/vues/aboutSB'
import moreService from '@/vues/moreService'
import contract from '@/vues/contract'
import login from '@/vues/userLogin/login'
import register from '@/vues/register/register'
import serviceProtocol from '@/vues/register/serviceProtocol'
import forgetPwd from '@/vues/forget/forgetPwd'
/*设置*/
import settingIndex from '@/vues/setting/settingIndex'
import updateLoginPwd from '@/vues/setting/updateLoginPwd'
import updateMobile from '@/vues/setting/updateMobile'
import updateTransPwd from '@/vues/setting/updateTransPwd'
import setTransPwd from '@/vues/setting/setTransPwd'
/*消息中心*/
import messageList from '@/vues/message/messageList'
import messageDetail from '@/vues/message/messageDetail'
/*钱包*/
import walletIndex from '@/vues/wallet/walletIndex'
import walletDetail from '@/vues/wallet/walletDetail'
import discountCoupon from '@/vues/wallet/discountCoupon'
import outlinePayIndex from '@/vues/wallet/outlinePayIndex'
import outlinePayImgInfo from '@/vues/wallet/outlinePayImgInfo'
import outlinePayInfo from '@/vues/wallet/outlinePayInfo'
import outlinePayIntro from '@/vues/wallet/outlinePayIntro'
import orderList from '@/vues/order/orderList'
import orderDetail from '@/vues/order/orderDetail'
import orderDetailFee from '@/vues/order/orderDetailFee'
import calculator from '@/vues/calculator/calculator'
import calculatorResult from '@/vues/calculator/calculatorResult'
/*查询*/
import querySocial from '@/vues/query/querySocial/querySocial'
import queryFund from '@/vues/query/querySocial/queryFund'
import queryBusiness from '@/vues/query/querySocial/queryBusiness'
import querySalary from '@/vues/query/querySocial/querySalary'
import querySocialIndex from '@/vues/query/querySocial/querySocialIndex'
import lottery from '@/vues/query/querySocial/lottery'
import lotteryPop from '@/vues/query/querySocial/lotteryPop'
import socialAccount from '@/vues/query/querySocialAccount/socialAccount'
import socialAccountList from '@/vues/query/querySocialAccount/socialAccountList'
import queryCitySocial from '@/vues/query/queryCitySocial'
import queryDeclareInfo from '@/vues/query/queryDeclareInfo'
import queryIndex from '@/vues/query/queryIndex'
import queryOutlinePayInfo from '@/vues/query/queryOutlinePayInfo'
/*参保人信息管理*/
import personalInfo from '@/vues/infoManage/personalInfo'
import companyInfo from '@/vues/infoManage/companyInfo'
import realNameAuth from '@/vues/infoManage/realNameAuth/realNameAuth'
import manuaRealNameAuth from '@/vues/infoManage/realNameAuth/manuaRealNameAuth'
import addBusinessInsurer from '@/vues/infoManage/insurerManage/addBusinessInsurer'
import insurerList from '@/vues/infoManage/insurerManage/insurerList'
import stopInsurerIndex from '@/vues/infoManage/insurerManage/stopInsurer/stopInsurerIndex'
import stopPerInsurer from '@/vues/infoManage/insurerManage/stopInsurer/stopPerInsurer'
import stopInsurer from '@/vues/infoManage/insurerManage/stopInsurer/stopInsurer'
/*购买流程*/
import chooseInsurer from '@/vues/purchaseProcess/chooseInsurer'
import chooseBusiInsurer from '@/vues/purchaseProcess/chooseBusiInsurer'
import chooseSuppInsurer from '@/vues/purchaseProcess/chooseSuppInsurer'
import confirmOrder from '@/vues/purchaseProcess/confirmOrder'
import payOrder from '@/vues/purchaseProcess/payOrder'
import payByWallet from '@/vues/purchaseProcess/payByWallet'
import payOrderStatus from '@/vues/purchaseProcess/payOrderStatus'

import addressPicker from '@/components/addressPicker'

/*import setWechatTitle from '../utils/setWechatTitle'*/
Vue.use(Router)
var router= new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:Index,
      title:'首页'
    },
    {
      path:'/social',
      name:'social',
      component:Social,
      title:'社保'
    },
    {
      path:'/business',
      name:'business',
      component:Business,
      title:'商保'
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine,
      title:'我的'
    },
    {
      path:'/baogongtou',
      name:'baogongtou',
      component:baogongtou
    },
    {
      path:'/wcGuider',
      name:'wcGuider',
      component:wcGuider
    },
    {
      path:'/aboutSB',
      name:'aboutSB',
      component:aboutSB
    },
    {
      path:'/moreService',
      name:'moreService',
      component:moreService
    },
    {
      path:'/proDetail/:id',
      name:'proDetail',
      component:proDetail
    },
    {
      path:'/socialPrDetail',
      component:socialPrDetail,
      name:'socialPrDetail'
    },
    {
      path:'/sb18Detail',
      component:shabao18Detail,
      name:'sb18Detail'
    },
    {
      path:'/sb48Detail',
      component:shabao48,
      name:'sb48Detail'
    },
    {
      path:'/sbInfoIndex',
      component:sbInfoIndex,
      name:'sbInfoIndex',
      children:[
        {
          path:':id',
          component:sbInfo,
          name:'sbInfo'
        },
        {
          path:'sbInfo1',
          component:sbInfo1,
          name:'sbInfo1'
        },
        {
          path:'sbInfo2',
          component:sbInfo2,
          name:'sbInfo2'
        },
        {
          path:'sbInfo3',
          component:sbInfo3,
          name:'sbInfo3'
        },
        {
          path:'sbInfo4',
          component:sbInfo4,
          name:'sbInfo4'
        },
        {
          path:'sbInfo5',
          component:sbInfo5,
          name:'sbInfo5'
        },
        {
          path:'sbInfo6',
          component:sbInfo6,
          name:'sbInfo6'
        },{
          path:'sbInfo7',
          component:sbInfo7,
          name:'sbInfo7'
        },{
          path:'sbNews1',
          component:sbNews1,
          name:'sbNews1'
        },{
          path:'sbNews2',
          component:sbNews2,
          name:'sbNews2'
        },{
          path:'sbNews3',
          component:sbNews3,
          name:'sbNews3'
        },{
          path:'sbNews4',
          component:sbNews4,
          name:'sbNews4'
        },
        {
          path:'sbNews5',
          component:sbNews5,
          name:'sbNews5'
        },
        {
          path:'sbNews6',
          component:sbNews6,
          name:'sbNews6'
        },
        {
          path:'sbNews7',
          component:sbNews7,
          name:'sbNews7'
        }
      ]
    },
   {
      path:'/activityIndex',
      component:activityIndex,
      name:'activityIndex',
      children:[
        {
          path:'',
          component:activityList,
          name:'activityList'
        },
        {
          path:'activityDetail',
          component:activityDetail,
          name:'activityDetail'
        }
      ]
    },
    {
      path:'/aboutSocial',
      component:aboutSocial,
      name:'aboutSocial',
      children:[
        {
          path:'',
          component:socialInsure,
          name:'socialInsure'
        },
        {
          path:'socialBenefit',
          component:socialBenefit,
          name:'socialBenefit'
        }
      ]
    },
    {
      path:'/contract',
      component:contract,
      name:'contract'
    },
    {
      path:'/login',
      component:login,
      name:'login'
    },
    {
      path:'/register',
      component:register,
      name:'register'
    },
    {
      path:'/serviceProtocol',
      component:serviceProtocol,
      name:'serviceProtocol'
    },
    {
      path:'/forgetPwd',
      component:forgetPwd,
      name:'forgetPwd'
    },
    /*设置*/
    {
      path:'/settingIndex',
      component:settingIndex,
      name:'settingIndex'
    },
    {
      path:'/updateLoginPwd',
      component:updateLoginPwd,
      name:'updateLoginPwd'
    },
    {
      path:'/updateMobile',
      component:updateMobile,
      name:'updateMobile'
    },
    {
      path:'/updateTransPwd',
      component:updateTransPwd,
      name:'updateTransPwd'
    },
    {
      path:'/setTransPwd',
      component:setTransPwd,
      name:'setTransPwd'
    },
    /*消息*/
    {
      path:'/messageList',
      component:messageList,
      name:'messageList'
    },
    {
      path:'/messageDetail',
      component:messageDetail,
      name:'messageDetail'
    },
    /*钱包*/
    {
      path:'/walletIndex',
      component:walletIndex,
      name:'walletIndex'
    },
    {
      path:'/walletDetail',
      component:walletDetail,
      name:'walletDetail'
    },
    {
      path:'/discountCoupon',
      component:discountCoupon,
      name:'discountCoupon'
    },
    /*线下汇款*/
    {
      path:'/outlinePayIndex',
      component:outlinePayIndex,
      name:'outlinePayIndex',
      children:[
        {
          path:'outlinePayInfo',
          component:outlinePayInfo,
          name:'outlinePayInfo'
        },
        {
          path:'outlinePayImgInfo',
          component:outlinePayImgInfo,
          name:'outlinePayImgInfo'
        }
      ]
    },
    {
      path:'/outlinePayIntro',
      component:outlinePayIntro,
      name:'outlinePayIntro'
    },
    /*订单*/
    {
      path:'/orderList',
      component:orderList,
      name:'orderList'
    },
    {
      path:'/orderDetail',
      component:orderDetail,
      name:'orderDetail'
    },
    {
      path:'/orderDetailFee',
      component:orderDetailFee,
      name:'orderDetailFee'
    },
    /*计算器*/
    {
      path:'/calculator',
      component:calculator,
      name:'calculator'
    },
    {
      path:'/calculatorResult',
      component:calculatorResult,
      name:'calculatorResult'
    },
    /*查询*/
    {
      path:'/querySocial',
      component:querySocial,
      name:'querySocial'
    },
    {
      path:'/queryFund',
      component:queryFund,
      name:'queryFund'
    },
    {
      path:'/queryBusiness',
      component:queryBusiness,
      name:'queryBusiness'
    },
    {
      path:'/querySalary',
      component:querySalary,
      name:'querySalary'
    },
    {
      path:'/lottery',
      component:lottery,
      name:'lottery'
    },
    {
      path:'/lotteryPop',
      component:lotteryPop,
      name:'lotteryPop'
    },
    {
      path:'/querySocialIndex',
      component:querySocialIndex,
      name:'querySocialIndex'
    },
    {
      path:'/socialAccount',
      component:socialAccount,
      name:'socialAccount'
    },
    {
      path:'/socialAccountList',
      component:socialAccountList,
      name:'socialAccountList'
    },
    {
      path:'/queryCitySocial',
      component:queryCitySocial,
      name:'queryCitySocial'
    },
    {
      path:'/queryDeclareInfo',
      component:queryDeclareInfo,
      name:'queryDeclareInfo'
    },
    {
      path:'/queryIndex',
      component:queryIndex,
      name:'queryIndex'
    },
    {
      path:'/queryOutlinePayInfo',
      component:queryOutlinePayInfo,
      name:'queryOutlinePayInfo'
    },
    /*参保人信息管理*/
    {
      path:'/personalInfo',
      component:personalInfo,
      name:'personalInfo'
    },
    {
      path:'/companyInfo',
      component:companyInfo,
      name:'companyInfo'
    },
    {
      path:'/realNameAuth',
      component:realNameAuth,
      name:'realNameAuth'
    },
    {
      path:'/manuaRealNameAuth',
      component:manuaRealNameAuth,
      name:'manuaRealNameAuth'
    },
    {
      path:'/addBusinessInsurer',
      component:addBusinessInsurer,
      name:'addBusinessInsurer'
    },
    {
      path:'/insurerList',
      component:insurerList,
      name:'insurerList'
    },
    {
      path:'/stopInsurerIndex',
      component:stopInsurerIndex,
      name:'stopInsurerIndex'
    },
    {
      path:'/stopPerInsurer',
      component:stopPerInsurer,
      name:'stopPerInsurer'
    },
    {
      path:'/stopInsurer',
      component:stopInsurer,
      name:'stopInsurer'
    },
    /*购买流程*/
    {
      path:'/chooseInsurer',
      component:chooseInsurer,
      name:'chooseInsurer'
    },
    {
      path:'/chooseBusiInsurer',
      component:chooseBusiInsurer,
      name:'chooseBusiInsurer'
    },
    {
      path:'/confirmOrder',
      component:confirmOrder,
      name:'confirmOrder'
    },
    {
      path:'/payOrder',
      component:payOrder,
      name:'payOrder'
    },
    {
      path:'/payByWallet',
      component:payByWallet,
      name:'payByWallet'
    },
    {
      path:'/payOrderStatus',
      component:payOrderStatus,
      name:'payOrderStatus'
    },
    {
      path:'/chooseSuppInsurer',
      component:chooseSuppInsurer,
      name:'chooseSuppInsurer'
    },
    {
      path:'/addressPicker',
      component:addressPicker,
      name:'addressPicker'
    },
  ]
},
)
/*router.afterEach((transition) => {
  let title = transition.to.title + '-Custom-Suffix';
    setWechatTitle(title)
})*/
export default router
