<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="注册" left-arrow @click-left="btnBack" />
    <!-- 登录表单 -->
    <van-form @submit="login">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        label="账户"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="确认密码"
        placeholder="请再次输入密码"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'login',
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
      // 2.表单验证

      // 在组件中必须通过 this.$toast 来调用 Toast组件
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true, // 禁用背景点出
        duration: 0 // 持续时间，默认2000ms，如果为0 则
      })

      try {
        const res = await login(this.username, this.password)
        if (res.data.status === 200) {
          this.$toast.success('登陆成功')
          this.$router.back()
        } else {
          this.$toast.fail('账户密码错误')
        }
        // console.log(res)
        // this.$toast.success('登陆成功')
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
/deep/.van-cell__title {
  // flex: 1;
}
/deep/.van-cell__value {
  flex: 1;
}
</style>
