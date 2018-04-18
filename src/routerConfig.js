/**
 * Created by ljkj on 2018/3/1.
 */

import Goods from './components/goods/goods.vue'
import Ratings from './components/ratings/ratings.vue'
import Sells from  './components/sells/sells.vue'

export default [

  {
    path:"/goods",
    component:Goods
  },
  {
    path:"/ratings",
    component:Ratings
  },
  {
    path:'/sells',
    component:Sells
  },
  {
    path:'/',
    redirect:'/goods'
  },
  {
    path:'*',
    redirect:"/goods"
  }

]
