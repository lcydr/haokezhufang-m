<template>
  <div>
    <div v-for="item in leaseArr" :key="item.houseCode">
      <div v-if="item.houseCode === $route.params.id" class="header-img">
        <!-- 导航栏 -->
        <div>
          <van-nav-bar :title="房屋管理" left-arrow @click-left="onClickLeft" />
        </div>
        <div class="imgTitle">
          <img :src="`${userUrl}${item.houseImg}`" alt="" />
        </div>
        <div class="written">
          <div class="written1">
            <div>
              <span>{{ item.title }}</span>
              <span class="a">{{ item.tags[0] }}</span>
            </div>
          </div>
        </div>

        <!-- 底部 -->
        <div class="foot1">
          <div class="footers">
            <div class="left-l">
              <a><img src="../../../assets/收藏.png" alt="" />收藏</a>
            </div>
            <div class="conter"><p>在线预约</p></div>
            <div class="right-r"><a>电话预约</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection } from '@/api/favorites'
export default {
  data() {
    return {
      leaseArr: [],
      userUrl: 'http://liufusong.top:8080'
    }
  },
  mounted() {
    console.log(this.$route.params.id)
  },
  created() {
    this.collection()
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async collection() {
      const { data } = await collection()
      console.log(data)
      this.leaseArr = data.body
      console.log(this.leaseArr)
    }
    // isLease(){
    //   this.leaseArr.filter((item) => )
    // }
  }
}
</script>

<style lang="less" scoped>
body {
  background-color: #cecece;
}
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
// 图片
.header-img {
  .imgTitle {
    height: 514px;

    // background-color: pink;
    img {
      height: 426px;
    }
  }
  .written {
    height: 699px;
    width: 100%;
    // background-color: pink;
    .written1 {
      // margin: 100px 0 0 0;
      padding-top: 40px;
      div {
        width: 90%;
        height: 150px;
        // background-color: #333;
        display: flex;
        font-size: 35px;
        margin: auto;
        flex-direction: column;
        justify-content: space-around;
        .a {
          font-size: 20px;
          color: #39becd;
        }
      }
    }
  }
}
// 底部
.foot1 {
}
.footers {
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  // background-color: #333;
  .left-l {
    img {
      width: 32px;
      height: 32px;
    }
    a {
      color: #999;
      font-size: 30px;
    }
  }
  .conter {
    p {
      color: #999;
      font-size: 40px;
    }
  }
  .right-r {
    width: 240px;
    height: 100px;
    background-color: #21b97a;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: #fff;
      font-size: 40px;
    }
  }
}
</style>
