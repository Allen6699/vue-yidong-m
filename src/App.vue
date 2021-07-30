<template>
  <div id="app">
    <h1>黑马头条</h1>
    <span class="toutiao toutiao-yuedu"></span>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div class="conte">123</div>
    <router-view />
  </div>
</template>
<script>

</script>

<style lang="less" scoped>
h1 {
  font-size: 20px;
}
.conte {
  width: 200px;
  height: 100px;
  background: pink;
}
</style>
