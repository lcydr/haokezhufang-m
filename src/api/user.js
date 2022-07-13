import request from '@/utils/request'

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
