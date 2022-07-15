<template>
  <div>
    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/findfrom" icon="search"
        >找房</van-tabbar-item
      >
      <van-tabbar-item replace to="/real" icon="home-o">资讯</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="home-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style></style>
