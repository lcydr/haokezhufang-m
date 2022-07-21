import request from '@/utils/request'
import store from '@/store'

export const Rental = () => {
  return request({
    url: '/user/houses',
    headers: {
      Authorization: `${store.state.user.token}`
    }
  })
}
