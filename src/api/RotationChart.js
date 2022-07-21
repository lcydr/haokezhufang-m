import request from '@/utils/request.js'

/**
 *
 * @returns RotationChart 轮播图
 */

export const RotationChart = () => {
  return request({
    url: '/home/swiper'
  })
}
