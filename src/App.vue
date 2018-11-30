<template>
	<div id="app">
		<router-view></router-view>
		<FooterGuide v-if='$route.meta.showfooter'/>
	</div>
</template>

<script>
	import FooterGuide from './components/FooterGuide/FooterGuide.vue'
	export default{
		components:{
			FooterGuide
		}
	}
</script>

<style scoped="scoped">
	#app {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
		position: relative;
}
</style>