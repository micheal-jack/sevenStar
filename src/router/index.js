import Vue from 'vue'
import Router from 'vue-router'

import Banner from 'components/banner/banner'
import Api from 'components/api/api'
import List from 'components/list/list'
import Item from 'components/item/item'
import Cont from 'components/cont/cont'
import Help from 'components/help/help'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/banner'
    },
     {
      path: '/banner',
      component: Banner
    },
    {
      path: '/api',
      component: Api,
      children:[
      	{
	      path: '/',
	      component: List
	    },    
	    {
	      path: '/api/item',
	      component: Item
	    },
	    {
	      path: '/api/cont',
	      component: Cont
	    }
      ]
    },
    {
      path: '/help',
      component: Help
    }
  ]
})
