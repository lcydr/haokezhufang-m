<template>
  <div class="house-my">
    <div v-if="user" class="my-img2">
      <img src="../../assets/背景图2.png" alt="" />
      <div class="login2">
        <div class="login-n">
          <div><img src="../../assets/头像.png" /></div>
        </div>
        <div class="logon-dl">
          <div class="logon-youk"><span>好客_845296</span></div>
          <div class="denglu">
            <a @click="$router.push('/login')">退出</a>
          </div>
          <div class="bianji"><a>编辑个人资料</a></div>
        </div>
      </div>
      <div class="aaa"></div>
    </div>

    <!-- ====================================== -->
    <div v-else class="my-img">
      <img src="../../assets/我的背景图.png" alt="" />
      <div class="login">
        <div class="login-n">
          <div><img src="../../assets/头像.png" /></div>
        </div>
        <div class="logon-dl">
          <div class="logon-youk"><span>游客</span></div>
          <div class="denglu">
            <a @click="$router.push('/login')">去登录</a>
          </div>
        </div>
      </div>
    </div>
    <!-- ====================================== -->
    <div class="my-body">
      <van-grid :column-num="3">
        <van-grid-item icon="star-o" text="我的收藏" />
        <van-grid-item icon="wap-home-o" text="我的出租" />
        <van-grid-item icon="clock-o" text="看房记录" />
        <van-grid-item icon="newspaper-o" text="成为房主" />
        <van-grid-item icon="manager-o" text="个人资料" />
        <van-grid-item icon="service-o" text="联系我们" />
      </van-grid>
    </div>
    <div class="foot-my-img">
      <img src="../../assets/vue项目创建成功.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'my',
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="less" scoped>
.house-my {
  .my-img {
    position: relative;
    height: 640px;
    // background-color: pink;

    // display: flex;
    img {
      // background-size: contain;
      width: 100%;
    }
  }
  .login {
    position: absolute;
    bottom: -19%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 330px;
    background-color: #fff;
    box-shadow: 0 0 10px 3px #ddd;
    .login-n {
      position: relative;
      width: 100%;
      height: 100px;
      div {
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
          width: 130px;
          border-radius: 50%;
          border: 10px solid #fff;
          box-shadow: 0 2px 2px #bdbdbd;
        }
      }
    }
    .logon-dl {
      text-align: center;
      .logon-youk {
        margin-bottom: 60px;
        font-size: 25px;
      }
      .denglu {
        font-size: 30px;
        color: #fff;
        a {
          padding: 15px 40px 15px 40px;
          background-color: #21b97a;
          border-radius: 10%;
        }
      }
    }
  }

  // ========
  .my-img2 {
    position: relative;
    height: 640px;
    // background-color: pink;

    // display: flex;
    img {
      // background-size: contain;
      width: 100%;
    }
    .aaa {
      position: absolute;
      top: 92%;
      width: 92%;
      height: 55px;
      background-color: #fff;
      box-shadow: 0 2px 2px #bdbdbd;
    }
  }
  .login2 {
    position: absolute;
    bottom: -19%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 330px;
    background-color: #fff;
    box-shadow: 0 0 10px 3px #ddd;
    .login-n {
      position: relative;
      width: 100%;
      height: 100px;
      div {
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
          width: 130px;
          border-radius: 50%;
          border: 10px solid #fff;
          box-shadow: 0 2px 2px #bdbdbd;
        }
      }
    }
    .logon-dl {
      text-align: center;
      .logon-youk {
        margin-bottom: 30px;
        font-size: 25px;
      }
      .denglu {
        font-size: 30px;
        color: #fff;
        a {
          padding: 15px 40px 15px 40px;
          background-color: #21b97a;
          border-radius: 40%;
        }
      }
      .bianji {
        padding-top: 30px;
        font-size: 30px;
      }
    }
  }
  .foot-my-img {
    padding-top: 15px;
    text-align: center;
    img {
      width: 92%;
    }
  }
}
</style>
