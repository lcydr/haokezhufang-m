<template>
  <div>
    <!-- 搜索 -->
    <div class="search">
      <van-search v-model="value" placeholder="请输入搜索关键词" round>
        <template #left
          ><div class="city"><a>北京</a><van-icon name="arrow-down" /></div
        ></template>
        <template #action>地图图标</template>
      </van-search>
    </div>
    <!-- 轮播 -->
    <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in RotationChartArr" :key="item.id">
          <van-image
            width="100%"
            height="100%"
            :src="`${baseURL}${item.imgSrc}`"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 整租合租 -->
    <div>
      <van-grid>
        <van-grid-item icon="photo-o" text="整租"
          ><template #icon
            ><div class="img1">
              <img src="../../assets/img/all.png" /></div></template
        ></van-grid-item>
        <van-grid-item icon="photo-o" text="合租"
          ><template #icon
            ><div class="img1">
              <img src="../../assets/img/all.png" /></div></template
        ></van-grid-item>
        <van-grid-item icon="photo-o" text="地图找房"
          ><template #icon
            ><div class="img1">
              <img src="../../assets/img/all.png" /></div></template
        ></van-grid-item>
        <van-grid-item icon="photo-o" text="去出租" to="/torent"
          ><template #icon
            ><div class="img1">
              <img src="../../assets/img/all.png" /></div></template
        ></van-grid-item>
      </van-grid>
    </div>
    <!-- 租房小组 -->
    <div class="roomcolor">
      <div class="room">
        <!-- top -->
        <div class="room1">
          <h3>租房小组</h3>
          <span>更多</span>
        </div>
        <!-- bottom -->
        <div class="counter">
          <div class="counter1" v-for="item in RentalGroupArr" :key="item.id">
            <div class="imgg">
              <img :src="`${baseURL}${item.imgSrc}`" alt="" />
            </div>
            <div class="textt">
              <p>{{ item.desc }}</p>
              <p>{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 轮播图
import { RotationChart } from '@/api/RotationChart'
// 租房小组
import { RentalGroup } from '@/api/RentalGroup'
export default {
  data() {
    return {
      value: '',
      RotationChartArr: [],
      RentalGroupArr: [],
      baseURL: 'http://liufusong.top:8080'
    }
  },
  created() {
    this.RotationChart()
    this.RentalGroup()
  },
  methods: {
    async RotationChart() {
      try {
        const res = await RotationChart()
        this.RotationChartArr = res.data.body
      } catch (error) {
        this.$router.fail(error)
      }
    },
    async RentalGroup() {
      try {
        const res = await RentalGroup()
        console.log(res)
        this.RentalGroupArr = res.data.body
        console.log(this.RentalGroupArr)
      } catch (error) {
        this.$router.fail(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
// body {
//   background-color: #f6f5f6;
// }
// 搜索
/deep/.van-search {
  position: fixed;
  top: 0;
  width: 83%;
  margin: 60px 0 0 0;
  z-index: 999;
  height: 70px;
  margin-left: 26px;
}
.city {
  height: 30px;
  background-color: #fff;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 120px;
  border-right: 1px solid #999;
  z-index: 999;
}
.van-search__content {
  background-color: #fff;
  z-index: 999;
}
// 轮播图
.my-swipe {
  widows: 424px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  // line-height: 424px;
  text-align: center;
  // background-color: #39a9ed;
}

// 合租整租
.van-grid-item__icon-wrapper {
  .img1 {
    height: 120px;
    width: 120px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
/deep/.van-grid-item__text {
  font-size: 0.39rem;
  padding-top: 20px;
}
// 租房小组
.roomcolor {
  background-color: #f6f5f6;
  height: 390px;
}
.room {
  height: 390px;
  width: 93%;
  margin: 0 auto;
  .room1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 50px;
    h3 {
      margin: 15px 0 15px 10px;
      font-size: 30px;
    }
    span {
      color: #787d82;
      font-size: 28px;
      font-weight: 400;
    }
  }
  .counter {
    display: flex;
    flex-wrap: wrap;
    .counter1 {
      display: flex;
      align-items: center;
      width: 4.3rem;
      height: 1.9rem;
      background-color: #fff;
      margin-left: 20px;
      margin-top: 10px;
      .imgg {
        width: 100px;
        height: 100px;
        // background-color: #333;
        margin-left: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .textt {
        height: 100px;
        width: 200px;
        // background-color: #333;
        margin-left: 10px;
        p {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
