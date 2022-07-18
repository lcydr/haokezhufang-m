import request from '@/utils/request'
import store from '@/store'

export const collection = () => {
  return request({
    url: '/user/favorites',
    headers: {
      Authorization: `${store.state.user.token}`
    }
  })
}
