<template>
	<div class="on">
      <section class="msite">
        <!--首页头部-->
        <header class="header">
          <span class="header_search">
            <i class="iconfont icon-ic-search-o"></i>
          </span>
          <span class="header_title">
            <span class="header_title_text ellipsis">白飞飞风俗店回复法商城</span>
          </span>
          <span class="header_login"  @click = "goto('./Login')">
            <span class="header_login_text">登录|注册</span>
          </span>
        </header>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/1.jpg">
                  </div>
                  <span>甜品饮品</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/2.jpg">
                  </div>
                  <span>商超便利</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/3.jpg">
                  </div>
                  <span>美食</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/4.jpg">
                  </div>
                  <span>简餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/5.jpg">
                  </div>
                  <span>新店特惠</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/6.jpg">
                  </div>
                  <span>准时达</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/7.jpg">
                  </div>
                  <span>预订早餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/8.jpg">
                  </div>
                  <span>土豪推荐</span>
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/9.jpg">
                  </div>
                  <span>甜品饮品</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/10.jpg">
                  </div>
                  <span>商超便利</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/11.jpg">
                  </div>
                  <span>美食</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/12.jpg">
                  </div>
                  <span>简餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/13.jpg">
                  </div>
                  <span>新店特惠</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/14.jpg">
                  </div>
                  <span>准时达</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/1.jpg">
                  </div>
                  <span>预订早餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/2.jpg">
                  </div>
                  <span>土豪推荐</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-menu"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <div class="shop_container">
            <ul class="shop_list">
              <li class="shop_li border-1px">
                <a>
                  <div class="shop_left">
                    <img class="shop_img" src="./images/1.jpg">
                  </div>
                  <div class="shop_right">
                    <section class="shop_detail_header">
                      <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                      <ul class="shop_detail_ul">
                        <li class="supports">保</li>
                        <li class="supports">准</li>
                        <li class="supports">票</li>
                      </ul>
                    </section>
                    <section class="shop_rating_order">
                      <section class="shop_rating_order_left">
                        <div class="star star-24">
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-star"></i></span>
                        </div>
                        <div class="rating_section">
                          3.6
                        </div>
                        <div class="order_section">
                          月售106单
                        </div>
                      </section>
                      <section class="shop_rating_order_right">
                        <span class="delivery_style delivery_right">硅谷专送</span>
                      </section>
                    </section>
                    <section class="shop_distance">
                      <p class="shop_delivery_msg">
                        <span>¥20起送</span>
                        <span class="segmentation">/</span>
                        <span>配送费约¥5</span>
                      </p>
                    </section>
                  </div>
                </a>
              </li>
              <li class="shop_li border-1px">
                <a>
                  <div class="shop_left">
                    <img class="shop_img" src="./images/2.jpg">
                  </div>
                  <div class="shop_right">
                    <section class="shop_detail_header">
                      <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                      <ul class="shop_detail_ul">
                        <li class="supports">保</li>
                        <li class="supports">准</li>
                        <li class="supports">票</li>
                      </ul>
                    </section>
                    <section class="shop_rating_order">
                      <section class="shop_rating_order_left">
                        <div class="star star-24">
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-star"></i></span>
                        </div>
                        <div class="rating_section">
                          4.1
                        </div>
                        <div class="order_section">
                          月售106单
                        </div>
                      </section>
                      <section class="shop_rating_order_right">
                        <span class="delivery_style delivery_right">硅谷专送</span>
                      </section>
                    </section>
                    <section class="shop_distance">
                      <p class="shop_delivery_msg">
                        <span>¥20起送</span>
                        <span class="segmentation">/</span>
                        <span>配送费约¥5</span>
                      </p>
                    </section>
                  </div>
                </a>
              </li>
              <li class="shop_li border-1px">
                <a>
                  <div class="shop_left">
                    <img class="shop_img" src="./images/3.jpg">
                  </div>
                  <div class="shop_right">
                    <section class="shop_detail_header">
                      <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                      <ul class="shop_detail_ul">
                        <li class="supports">保</li>
                        <li class="supports">准</li>
                        <li class="supports">票</li>
                      </ul>
                    </section>
                    <section class="shop_rating_order">
                      <section class="shop_rating_order_left">
                        <div class="star star-24">
                         <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-star"></i></span>
                        </div>
                        <div class="rating_section">
                          3.2
                        </div>
                        <div class="order_section">
                          月售106单
                        </div>
                      </section>
                      <section class="shop_rating_order_right">
                        <span class="delivery_style delivery_right">硅谷专送</span>
                      </section>
                    </section>
                    <section class="shop_distance">
                      <p class="shop_delivery_msg">
                        <span>¥20起送</span>
                        <span class="segmentation">/</span>
                        <span>配送费约¥5</span>
                      </p>
                    </section>
                  </div>
                </a>
              </li>
              <li class="shop_li border-1px">
                <a>
                  <div class="shop_left">
                    <img class="shop_img" src="./images/4.jpg">
                  </div>
                  <div class="shop_right">
                    <section class="shop_detail_header">
                      <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                      <ul class="shop_detail_ul">
                        <li class="supports">保</li>
                        <li class="supports">准</li>
                        <li class="supports">票</li>
                      </ul>
                    </section>
                    <section class="shop_rating_order">
                      <section class="shop_rating_order_left">
                        <div class="star star-24">
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-star"></i></span>
                        </div>
                        <div class="rating_section">
                          3.6
                        </div>
                        <div class="order_section">
                          月售106单
                        </div>
                      </section>
                      <section class="shop_rating_order_right">
                        <span class="delivery_style delivery_right">硅谷专送</span>
                      </section>
                    </section>
                    <section class="shop_distance">
                      <p class="shop_delivery_msg">
                        <span>¥20起送</span>
                        <span class="segmentation">/</span>
                        <span>配送费约¥5</span>
                      </p>
                    </section>
                  </div>
                </a>
              </li>
              <li class="shop_li border-1px">
                <a>
                  <div class="shop_left">
                    <img class="shop_img" src="./images/1.jpg">
                  </div>
                  <div class="shop_right">
                    <section class="shop_detail_header">
                      <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                      <ul class="shop_detail_ul">
                        <li class="supports">保</li>
                        <li class="supports">准</li>
                        <li class="supports">票</li>
                      </ul>
                    </section>
                    <section class="shop_rating_order">
                      <section class="shop_rating_order_left">
                        <div class="star star-24">
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou"></i></span>
                          <span><i class="iconfont icon-star"></i></span>
                        </div>
                        <div class="rating_section">
                          3.6
                        </div>
                        <div class="order_section">
                          月售106单
                        </div>
                      </section>
                      <section class="shop_rating_order_right">
                        <span class="delivery_style delivery_right">硅谷专送</span>
                      </section>
                    </section>
                    <section class="shop_distance">
                      <p class="shop_delivery_msg">
                        <span>¥20起送</span>
                        <span class="segmentation">/</span>
                        <span>配送费约¥5</span>
                      </p>
                    </section>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
	import Swiper from 'swiper'
	import "swiper/dist/css/swiper.min.css"
	export default{
		methods:{
			goto(path){
				this.$router.replace(path)
			}
		},
		mounted(){
			new Swiper('.swiper-container',{
				loop:true,
				pagination:{
					el:'.swiper-pagination'
				}
			})
		}
	}
</script>

<style scoped="scoped">
	header{
		background-color: #02a774;
	    position: fixed;
	    z-index: 100;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 45px;
	}
    .header_search{
    	position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        width: 10%;
        height: 50%;
    }
    .icon-ic-search-o{
    	font-size: 25px;
        color: #fff;
    }
    .header_title{
    	position: absolute;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%, -50%);
	    width: 50%;
	    color: #fff;
	    text-align: center;
    }
    .header_title_text{
        font-size: 20px;
        color: #fff;
        display: block;	
    }
    .header_login{
    	font-size: 14px;
        color: #fff;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
    }
    .header_login_text{
        color: #fff;	
    }
    .msite{
    	width: 100%;
    }
    .miste-content-wrapper{
    	position: fixed;
        top: 45px;
        bottom: 46px;
        width: 100%;
    }
    .msite_nav{
        margin-top: 45px;
        height: 200px;
        background: #fff;
    }
    .swiper-container{
    	width: 100%;
        height: 100%;
    }
    .swiper-wrapper{
    	width: 100%;
        height: 100%;
    }          
    .swiper-slide{
    	display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
    }        
    .link_to_food{
    	width: 25%;
    	text-align: center;
    }
    .icon-jingdiananli_wujiaoxing_shoucanghou, .icon-star{
    	letter-spacing: -7px;
    }
    .food_container{
    	display: block;
        width: 100%;
        text-align: center;
        padding-bottom: 10px;
        font-size: 0;
    }
    .food_container img{
    	display: inline-block;
        width: 50px;
        height: 50px;
    }
    .food_container span{
    	display: block;
        width: 100%;
        text-align: center;
        font-size: 13px;
        color: #666;
    }
    .swiper-pagination>span.swiper-pagination-bullet-active{
    	background-color: #02a774;
    }
    .msite_shop_list{
    	margin-top: 10px;
        background-color: #fff;
    }
    .shop_header{
    	padding: 10px 10px 0;
    }
    .shop_icon{
    	margin-left: 5px;
        color: #999;
    }
    .shop_header_title{
    	color: #999;
        font-size: 14px;
        line-height: 20px;
    }
    .shop_container{
    	margin-bottom: 50px;
    }
    .shop_list .shop_li{
    	width: 100%;
    }
    .shop_li>a{
    	display: block;
        box-sizing: border-box;
        padding: 15px 8px;
        width: 100%;
    }
    .shop_left{
    	float: left;
        box-sizing: border-box;
        width: 23%;
        height: 75px;
        padding-right: 10px;
    }
    .shop_img{
    	display: block;
        width: 100%;
        height: 100%;
    }
    .shop_right{
    	float: right;
        width: 77%;
    }
    .shop_li{
    	overflow: hidden;
    	border-bottom: 1px solid #f1f1f1;
    }
    .shop_detail_header{
    	overflow: hidden;
    	width: 100%;
    }
    .shop_title{
    	float: left;
        width: 200px;
        color: #333;
        font-size: 16px;
        line-height: 16px;
        font-weight: 700;
    }
    .shop_title::before{
    	content: '品牌';
        display: inline-block;
        font-size: 11px;
        line-height: 11px;
        color: #333;
        background-color: #ffd930;
        padding: 2px 2px;
        border-radius: 2px;
        margin-right: 5px;
    }
    .shop_detail_ul{
    	float: right;
        margin-top: 3px;
    }
    .supports{
    	float: left;
        font-size: 10px;
        color: #999;
        border: 1px solid #f1f1f1;
        padding: 0 2px;
        border-radius: 2px;
    }
    .shop_rating_order{
    	width: 100%;
        margin-top: 12px;
        margin-bottom: 8px;
    }
    .shop_rating_order_left{
    	float: left;
        color: #ff9a0d;
    }
    .rating_section{
    	float: left;
        font-size: 10px;
        color: #ff6000;
        margin-left: 9px;
        margin-top: 2px;
    }
    .star{
    	float: left;
    }              
    .order_section{
    	float: left;
        font-size: 10px;
        color: #666;
        transform: scale(.8);
        margin-top: 2px;
    }
                  
    .shop_rating_order_right{
    	float: right;
        font-size: 0;
    }
    .delivery_style{
    	transform-origin: 35px 0;
        transform: scale(.7);
        display: inline-block;
        font-size: 12px;
        padding: 1px;
        border-radius: 2px;
    }
    .delivery_left{
    	color: #fff;
        margin-right: -10px;
        background-color: #02a774;
        border: 1px solid #02a774;
    }
    .delivery_right{
    	color: #02a774;
        border: 1px solid #02a774;
    }
    .shop_distance{
    	overflow: hidden;
    	width: 100%;
        font-size: 12px;
    }
    .shop_delivery_msg{
    	margin-top: 6px;
    	float: left;
        transform-origin: 0;
        transform: scale(.9);
        color: #666;
    } 
    .segmentation{
    	color: #ccc;
    }
</style>