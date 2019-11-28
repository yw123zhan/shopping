<template>
   <div class="recomment">
      <div class="recomment-item" v-for="(item , index) in recommends" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
   </div>
</template>

<script>
export default {
   name: 'HomeRecomment',
   data() {
       return {}
   },
   props:{
     recommends:{
       type:Array,
       default(){return []}
     }
   },
  components: {}
}
</script>

<style scoped>
  .recomment{
    display: flex;
    width: 100%;
    padding: 10px 0px 15px;
    border-bottom: 8px solid #eee;
  }
  .recomment .recomment-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .recomment-item img{
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>
