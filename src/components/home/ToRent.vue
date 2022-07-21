<template>
  <div>
    <!-- 导航栏 -->
    <div>
      <van-nav-bar title="发布房源" left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 房源信息 -->
    <div class="HouseInformation"><span>房屋信息</span></div>
    <hr />
    <div class="ToRent">
      <!-- 小区名称 -->
      <div class="area">
        <div class="left">小区名称</div>
        <div class="right">
          请输入小区名称<span><van-icon name="arrow" /></span>
        </div>
      </div>
      <!-- 租金 -->
      <div class="rent">
        <van-cell-group>
          <van-field v-model="value" label="文本" placeholder="请输入用户名">
            <template #button><span>￥/月</span></template>
          </van-field>
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
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
// 整体
// 房源信息
.HouseInformation {
  width: 95%;
  margin: auto;
  height: 82px;
  display: flex;
  align-items: center;
  span {
    color: #21b97a;
    font-size: 30px;
  }
}
.ToRent {
  width: 95%;
  margin: auto;
  .area {
    height: 88px;
    display: flex;
    color: #666;
    font-size: 30px;
    align-items: center;
    .left {
      flex: 1;
    }
    .right {
      span {
        margin-left: 10px;
      }
    }
  }

  .rent {
    height: 88px;
    display: flex;
    color: #666;
    font-size: 30px;
    align-items: center;
    height: 88px;
    /deep/.van-field__label {
      width: 100px;
    }
  }
}
</style>
