<template>
   <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
   </div>
</template>

<script>
export default {
   name: 'nav-bar',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped>
    .nav-bar{
        display: flex;
        height: 44px;
        line-height: 44px;
        border-bottom: 1px solid #eee;
        box-shadow: 0 1px 1px rgba(100,100,100,.08);
    }
    .nav-bar .left ,.nav-bar .right{
        width: 60px;
    }
    .nav-bar .center{
        flex: 1;
        text-align: center
    }
</style>
