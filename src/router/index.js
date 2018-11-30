import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../views/Msite/Msite.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Search from '../views/Search/Search.vue'
import Login from '../views/Login/Login.vue'

//声明使用插件
Vue.use(Router);

export default new Router({
	routes:[
	{
		path:'/msite',
		component:Msite,
		meta:{
			showfooter:true
		}
	},
	{
		path:'/',
		redirect:'/msite'
	},
	{
		path:'/order',
		component:Order,
		meta:{
			showfooter:true
		}
	},
	{
		path:'/profile',
		component:Profile,
		meta:{
			showfooter:true
		}
	},
	{
		path:'/search',
		component:Search,
		meta:{
			showfooter:true
		}
	},
	{
		path:'/login',
		component:Login
	}
	]
})

