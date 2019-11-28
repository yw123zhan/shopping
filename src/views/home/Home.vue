<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recomment :recommends="recommends"></home-recomment>
    <home-feature></home-feature>
    <tab-control class="hone-tab-control" :titles="['流行','新款','精选']"> </tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>

    <ul>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    	<li>111</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar'
  import TabControl from 'content/tabControl/TabControl'
  import GoodsList from 'content/goods/GoodsList'

  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecomment from './childComps/HomeRecomment'
  import HomeFeature from './childComps/HomeFeature'


  import {getHomeMultidata,getHomeData} from 'network/home'
  export default {
    name: "Home",
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        }
      }
    },
    components :{
      NavBar,
      TabControl,
      GoodsList,
      HomeSwiper,
      HomeRecomment,
      HomeFeature
    },
    created() {
      // 请求轮banner和commont
      this.homeMultidata()

      // .请求商品数据
      this.homeData('pop')
      this.homeData('new')
      this.homeData('sell')

    },
    methods:{
      homeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners=res.data.banner.list
          this.recommends=res.data.recommend.list
        }).catch(err=>{
          console.log(err)
        })
      },
      homeData(type){
        const page=this.goods[type].page+1
        getHomeData(type,page)
          .then(res=>{
            console.log(res)
            this.goods[type].list=res.data.list;
            this.goods[type].page+=1
          })
          .catch(err=>{
            console.log(err)
          })
      }

    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .hone-tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
