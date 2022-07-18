<template>
  <div>
    <!-- 导航栏 -->
    <div>
      <van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 内容 -->
    <div
      class="favorite"
      v-for="item in favoritesArr"
      :key="item.houseCode"
      to="btnDetails(item.houseCode)"
      @click="handleClick(item.houseCode)"
    >
      <div class="left-img">
        <img :src="`${userUrl}${item.houseImg}`" alt="" />
      </div>
      <div class="right-text">
        <div class="acount">
          <span class="span1">{{ item.title }}</span>
          <span class="span2">{{ item.desc }}</span>
          <span class="span3">{{ item.tags[0] }}</span>
          <span class="span4">{{ item.price }}</span>
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
      favoritesArr: {},
      userUrl: 'http://liufusong.top:8080'
    }
  },
  created() {
    this.collection()
  },
  methods: {
    async collection() {
      try {
        const { data } = await collection()
        console.log(data)
        this.favoritesArr = data.body
        console.log(this.favoritesArr)
      } catch (error) {
        this.$toast('获取数据失败', error)
      }
    },
    onClickLeft() {
      this.$router.back()
    },
    handleClick(id) {
      this.$router.push(`/lease/${id}`)
    }
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
// 内容
.favorite {
  display: flex;
  // background-color: pink;
  height: 180px;
  padding: 30px 0;
  border: 1px solid #e5e5e5;
  .left-img {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
    }
    // background-color: red;
  }
  .right-text {
    flex: 2;
    // background-color: #333;
    margin-left: 12px;
    .acount {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .span1 {
        font-size: 40px;
        font-weight: 600;
      }
      .span2 {
        font-size: 30px;
        color: #afb2b3;
      }
      .span3 {
        font-size: 30px;
        color: #39becd;
      }
      .span4 {
        font-size: 40px;
        color: #fa5741;
      }
    }
  }
}
</style>
