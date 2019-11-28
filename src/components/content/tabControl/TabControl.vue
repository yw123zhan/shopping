<template>
   <div class="tab-control">
      <div  class="tab-control-item"
            v-for="(item,index) in titles" :key="index"
            :class="{active:index==currentIndex}"
            @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
   </div>
</template>

<script>
export default {
   name: '',
   data() {
       return {
         currentIndex:0
       }
   },
   props:{
     titles:{
       type:Array,
       default(){
         return []
       }
     }
   },
   methods:{
     itemClick(index){
       this.currentIndex=index
     }
   },
  components: {}
}
</script>

<style scoped>
  .tab-control{
    /* width: 100%; */
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: 15px;
    text-align: center;
    background: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    padding: 5px 3px;
    border-bottom: 3px solid  var(--color-tint);
  }
</style>
