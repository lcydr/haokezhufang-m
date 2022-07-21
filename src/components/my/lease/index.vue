<template>
  <div>
    <div>
      <div class="header-img">
        <!-- 导航栏 -->
        <div>
          <van-nav-bar
            :title="leaseArr.community"
            left-arrow
            @click-left="onClickLeft"
          />
        </div>
        <div class="imgTitle">
          <img :src="`${userUrl}${leaseArr.houseImg}`" alt="" />
        </div>
        <div class="written">
          <div class="written1">
            <div>
              <span>{{ leaseArr.title }}</span>
              <span class="a">{{ leaseArr.tags }}</span>
            </div>
          </div>
        </div>
        <!-- 租金房型面积 -->
        <div class="room">
          <div class="room1">
            <div class="roomPrice">
              <span class="span1">{{ leaseArr.price }}</span
              ><span class="span2">/月</span>
            </div>
            <div class="rent">租金</div>
          </div>
          <div class="room1">
            <div class="roomPrice">
              <span class="span1">{{ leaseArr.roomType }}</span>
            </div>
            <div class="rent">房型</div>
          </div>
          <div class="room1">
            <div class="roomPrice">
              <span class="span1">{{ leaseArr.size }}</span
              ><span class="span1">平米</span>
            </div>
            <div class="rent">面积</div>
          </div>
        </div>
        <!-- 装修 楼层 朝向 类型 -->
        <div class="renovation">
          <div class="left">
            <div>
              <span class="top">装修:</span><span class="top1">精装</span>
            </div>
            <div>
              <span class="top">楼层:</span
              ><span class="top1">{{ leaseArr.floor }}</span>
            </div>
          </div>
          <div class="right">
            <div>
              <span class="top">朝向:</span
              ><span class="top1">{{ leaseArr.oriented }}</span>
            </div>
            <div>
              <span class="top">类型:</span><span class="top1">普通住宅</span>
            </div>
          </div>
        </div>
        <!-- 小区 -->
        <div class="color"></div>
        <div class="residential">
          <div class="top">
            <span class="left">小区:</span><span class="right">天山星域</span>
          </div>
          <div class="map"></div>
        </div>
        <!-- 房屋配套 -->
        <div class="rooms">
          <div class="text"><span>房屋配套</span></div>
          <div class="roomss">
            <van-grid v-for="(item, index) in leaseArr.supporting" :key="index">
              <van-grid-item icon="photo-o" :text="item" />
            </van-grid>
          </div>
        </div>
        <!-- 房源概括532 -->
        <div class="color"></div>
        <div class="summary">
          <div class="text"><span>房源概括</span></div>
          <div class="wang"></div>
          <div class="count">
            1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
            2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
            3.人车分流，环境优美。
            4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
          </div>
        </div>
        <!-- 猜你喜欢 -->
        <div class="color"></div>
        <div class="xihuan"><span>猜你喜欢</span></div>
        <div class="roombottom"></div>
        <!-- 底部 -->
        <div class="foot1">
          <div class="footers">
            <div class="left-l" v-if="!isBtn" @click.prevent="btn">
              <a><img src="../../../assets/收藏.png" alt="" />收藏</a>
            </div>
            <div class="left-l" v-if="isBtn" @click.prevent="btn">
              <a><img src="../../../assets/取消收藏.png" alt="" />收藏</a>
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
// 租房详情信息
import { HousingDetails } from '@/api/HousingDetails'
// 删除收藏
import { DeleCollection, AddCollection } from '@/api/DeleCollection'
// 添加收藏

export default {
  data() {
    return {
      leaseArr: [],
      userUrl: 'http://liufusong.top:8080',
      isBtn: false
    }
  },
  mounted() {
    console.log(this.$route.params.id)
  },
  created() {
    this.HousingDetails()
    this.DeleCollection()
    this.AddCollection()
  },
  methods: {
    async HousingDetails() {
      try {
        const res = await HousingDetails(this.$route.params.id)
        // console.log(res)
        this.leaseArr = res.data.body
      } catch (error) {}
    },
    onClickLeft() {
      this.$router.back()
    },
    async AddCollection() {
      try {
        const res = await AddCollection(this.$route.params.id)
        console.log(res)
      } catch (error) {}
    },
    async DeleCollection() {
      try {
        const res = DeleCollection(this.$route.params.id)
        console.log(res)
      } catch (error) {}
    },

    // isLease(){
    //   this.leaseArr.filter((item) => )
    // }
    btn() {
      this.isBtn = !this.isBtn
      if (this.isBtn === false) {
        this.AddCollection()
        console.log(this.AddCollection)
        this.$toast.success('添加收藏')
      } else if (this.isBtn === true) {
        this.DeleCollection()
        console.log(this.DeleCollection)
        this.$toast.success('取消收藏')
      }
    }
  },
  computed: {}
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
      height: 100%;
    }
  }
  .written {
    height: 200px;
    width: 100%;
    // background-color: pink;
    .written1 {
      padding-top: 0.53333rem;
      border-bottom: 1px solid #999;
      width: 95%;
      margin: auto;
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
// 租金房型面积
.room {
  display: flex;
  height: 150px;
  // background-color: pink;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #999;
  width: 95%;
  margin: auto;

  .room1 {
    width: 220px;
    height: 104px;
    // background-color: #333;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .roomPrice {
      // font-size: 50px;
      .span1 {
        color: #fa5741;
        font-size: 40px;
        font-weight: bolder;
      }
      .span2 {
        color: #fa5741;
        font-size: 28px;
        font-weight: bolder;
      }
    }
    .rent {
      font-size: 30px;
      color: #999;
    }
  }
}
// 装修 楼层 朝向 类型
.renovation {
  height: 150px;
  // background-color: pink;
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .left {
    width: 340px;
    height: 104px;
    // background-color: #fff;
    .top {
      color: #999;
      font-size: 25px;
    }
    .top1 {
      padding-left: 20px;
      font-size: 25px;
    }
  }
  .right {
    width: 340px;
    height: 104px;
    // background-color: #333;
    .top {
      color: #999;
      font-size: 25px;
    }
    .top1 {
      padding-left: 20px;
      font-size: 25px;
    }
  }
}
// 小区
.color {
  width: 100%;
  height: 20px;
  background-color: rgb(220, 218, 218);
}
.residential {
  height: 380px;
  width: 100%;
  .top {
    width: 95%;
    height: 88px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    .left {
      font-size: 30px;
      margin-right: 20px;
    }
    .right {
      font-size: 30px;
    }
  }
  .map {
    height: 290px;
    background-color: #333;
  }
}
// 房屋配套
.rooms {
  height: 260px;
  .text {
    height: 86px;
    display: flex;
    align-items: center;
    width: 95%;
    margin: auto;
    border-bottom: 1px solid #999;
    span {
      font-size: 30px;
    }
  }
  .roomss {
    flex-wrap: wrap;
    display: flex;
    height: 140px;
    justify-content: space-around;
    /deep/.van-grid-item__content--center {
      // width: 60px;
    }
  }
}
.summary {
  width: 95%;
  height: 490px;
  margin: auto;
  // background-color: #999;
  .text {
    height: 104px;
    width: 95%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #999;
    span {
      font-size: 30px;
    }
  }
  .wang {
    height: 124px;
    width: 95%;
    margin: auto;
    background-color: pink;
  }
  .count {
    padding-top: 10px;
    font-size: 30px;
  }
}
// 猜你喜欢
.xihuan {
  height: 100px;
  width: 95%;
  margin: 0 auto;
  border-bottom: 1px solid #999;
  display: flex;
  align-items: center;
  span {
    font-size: 30px;
  }
}
.roombottom {
  height: 720px;
  width: 95%;
  display: flex;
  margin: 0 auto;
  background-color: #999;
}
// 底部
.foot1 {
  position: fixed;
  bottom: 0;
  left: 0;
  // bottom: 10px;
  height: 100px;
}
.footers {
  // position: fixed;
  // bottom: 0;
  // z-index: 999;
  display: flex;
  align-items: center;

  // height: 100px;
  // padding-left: 40px;
  // background-color: #333;
  background-color: #fff;
  .left-l {
    img {
      width: 32px;
      height: 32px;
      // padding-right: 50px;
    }
    a {
      color: #999;
      font-size: 20px;
    }
  }
  .conter {
    padding: 0 50px 0 200px;
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
