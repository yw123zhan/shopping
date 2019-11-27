<template>
  <div id="tab-bar"><slot></slot></div>
</template>

<script>
    export default {
        name: "tab-bar"
    }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    bottom: 0;
    right: 0;
    left: 0;

    background-color: #f6f6f6;
    height: 49px;
    border-top: 1px solid #eee;
    box-shadow: 0px -1px 1px rgba(150,150,150,.08);

    position: fixed;
    text-align: center;


  }
</style>
