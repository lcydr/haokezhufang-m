import request from '@/utils/request.js'
import store from '@/store'

/**
 *
 * @param {S} id 删除收藏
 * @returns
 */
export const DeleCollection = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `${store.state.user.token}`
    },
    params: {
      id
    }
  })
}

/**
 *
 * @param {*} id 添加收藏
 * @returns
 */
export const AddCollection = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: 'POST',
    headers: {
      Authorization: `${store.state.user.token}`
    },
    params: {
      id
    }
  })
}
