<template>
  <div id="tab-bar-item">
    <div class="item-icon"><slot name="tab-icon"></slot></div>
    <div class="item-icon-active"><slot name="tab-icon-active"></slot></div>
    <div class="item-text"><slot name="tab-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "tab-bar-item"
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
