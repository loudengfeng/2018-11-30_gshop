<template>
	<footer class="footer_guide border-1px">
	    <span href="javascript:;" class="guide_item" :class="{on:'/msite'===$route.path}" @click="goto('/msite')">
	      <span class="item_icon">
	        <i class="iconfont icon-liwu"></i>
	      </span>
	      <span>外卖</span>
	    </span>
	    <span href="javascript:;" class="guide_item" :class="{on:'/search'===$route.path}" @click="goto('/search')">
	      <span class="item_icon">
	        <i class="iconfont icon-ic-search-o"></i>
	      </span>
	      <span>搜索</span>
	    </span>
	    <span href="javascript:;" class="guide_item" :class="{on:'/order'===$route.path}" @click="goto('/order')">
	      <span class="item_icon">
	        <i class="iconfont icon-dingdan1"></i>
	      </span>
	      <span>订单</span>
	    </span>
	    <span href="javascript:;" class="guide_item" :class="{on:'/profile'===$route.path}" @click="goto('/profile')">
	      <span class="item_icon">
	        <i class="iconfont icon-user"></i>
	      </span>
	      <span>我的</span>
	    </span>
    </footer>
</template>

<script>
	export default{
		methods:{
			goto(path){
				this.$router.replace(path)
			}
		}
	}
</script>

<style scoped="scoped">
	 #app .footer_guide {
		  position: relative;
		  position: fixed;
		  z-index: 100;
		  left: 0;
		  right: 0;
		  bottom: 0;
		  background-color: #fff;
		  width: 100%;
		  height: 50px;
		  display: flex;
		}
		#app .footer_guide::before {
		  content: '';
		  position: absolute;
		  z-index: 200;
		  left: 0;
		  top: 0;
		  width: 100%;
		  height: 1px;
		  background-color: #e4e4e4;
		}
		#app .footer_guide .guide_item {
		  display: flex;
		  flex: 1;
		  text-align: center;
		  flex-direction: column;
		  align-items: center;
		  margin: 5px;
		  color: #999;
		}
		#app .footer_guide .guide_item.on {
		  color: #02a774;
		}
		#app .footer_guide .guide_item span {
		  font-size: 12px;
		  margin-top: 2px;
		  margin-bottom: 2px;
		}
		#app .footer_guide .guide_item span .iconfont {
		  font-size: 22px;
		}
</style>