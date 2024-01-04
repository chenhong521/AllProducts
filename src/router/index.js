import Vue from 'vue'
import Router from 'vue-router'
import Loan from '@/pages/Loan/Loan'
import Card from '@/pages/Card/Card'
import Insurance from '@/pages/Insurance/Insurance'
import Financing from '@/pages/Financing/Financing'
import Message from '@/pages/Message/Message'
import MessageText from '@/secondPages/MessageText/MessageText'
import RankingsAll from '@/secondPages/RankingsAll/RankingsAll'
// import Ce from '@/pages/ce'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loan',
      component: Loan,
      meta: {
        showHeader: true
      }
    },
    {
      path: '/loan1',
      component: Loan,
      meta: {
        showHeader: true
      }
    },
    {
      path: '/card',
      component: Card,
      meta: {
        showHeader: true
      }
    },
    {
      path: '/insurance',
      component: Insurance,
      meta: {
        showHeader: true
      }
    },
    {
      path: '/financing',
      component: Financing,
      meta: {
        showHeader: true
      }
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      children: [
        {
          path: '/message/messagetext',
          name: 'MessageText',
          component: MessageText
        }
      ]
    },
    {
      path: '/rankingsall',
      component: RankingsAll
    }
  ]
})
