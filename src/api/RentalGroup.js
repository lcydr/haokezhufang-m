import request from '@/utils/request.js'

export const RentalGroup = (area) => {
  return request({
    url: '/home/groups',
    params: { area }
  })
}
