import request from '@/utils/request.js'

/**
 *
 * @param {S} id 住房详细信息
 * @returns
 */
export const HousingDetails = (id) => {
  return request({
    url: `/houses/${id}`,
    params: {
      id
    }
  })
}
