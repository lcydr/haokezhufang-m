<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="账号登录" left-arrow @click-left="btnBack" />
    <!-- 登录表单 -->
    <van-form @submit="login">
      <van-field v-model="username" name="username" placeholder="请输入账号" />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <div class="foot"><span>还没有账号，去注册</span></div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 获取表单信息
    async login() {
      // 1. 获取表单信息

      try {
        const res = await login(this.username, this.password)
        console.log(res)
        this.$toast.success('登陆成功')
      } catch (err) {
        console.log(err)
        if (err.data.status === 401) {
          this.$toast.fail('账户密码错误')
        } else {
          this.$toast.fail('登录失败，请稍后重试')
        }
      }
    },
    // 返回之前页面
    btnBack() {
      this.$router.back()
    }
    // async login() {
    //   const res = await login(this.username, this.password)
    //   console.log(res)
    // }
  }
}
</script>

<style lang="less" scoped>
// 导航栏
.van-nav-bar {
  background-color: #21b97a;
  /deep/.van-nav-bar__title {
    color: #fff;
  }
  /deep/.van-icon {
    color: #fff;
  }
}
// 行内高度
.van-field__control {
  height: 60px;
}
.van-button--info {
  background-color: #21b97a;
}
登录 .van-button {
  font-size: 30px;
}
// 底部
.foot {
  display: flex;
  span {
    font-size: 30px;
    margin: auto;
  }
}
</style>
