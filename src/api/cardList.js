import request from '@/utils/request'

export function cardList(params) {
  return request({
    url: '/cardList',
    method: 'get',
    params
  })
}
