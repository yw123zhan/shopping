<template>
  <div id="tab-bar-item" @click="btnLink">
    <div v-if="!isActive" class="item-icon"><slot name="tab-icon"></slot></div>
    <div v-else class="item-icon-active"><slot name="tab-icon-active"></slot></div>
    <div :style="activeStyle" class="item-text"><slot name="tab-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "tab-bar-item",
        props:{
          path:String,
          activeColor:{
            type:String,
            default:()=>{
              return 'red'
            }
          }
        },
        computed: {
          isActive(){
            return this.$route.path.indexOf(this.path) != -1
          },
          activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
          }
        },
        methods: {
          btnLink(){
            this.$router.push(this.path)
          }
        },
    }
</script>

<style scoped>
  #tab-bar-item {
    flex: 1;
  }

  .item-icon img, .item-icon-active img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }

  .item-text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
</style>
