export const accountLogin = [
  { required: true, message: '请填写账号' },
  { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '请输入正确用户名' }
]
export const passwordLogin = [
  {
    required: true,
    message: '请填写密码'
  },
  {
    pattern: /[0-9]{6}/,
    message: '请输入正确密码'
  }
]
