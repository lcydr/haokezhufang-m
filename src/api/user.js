import request from '@/utils/request'
import store from '@/store'
/**
 *
 * @param {String} username 账户
 * @param {String} password 密码
 * @returns
 */

export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
}

export const userLogin = () => {
  return request({
    method: 'GET',
    url: '/user',
    headers: {
      Authorization: `${store.state.user.token}`
    }
  })
}
