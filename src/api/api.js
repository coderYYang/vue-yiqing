import request from "./request"

export function CovInfoData() {
  return request({
    method: 'get',
    url: '/statistics/latest'
  })
}

// 中国所有省份最新疫情
export function ChinaMap() {
  return request({
    method: 'get',
    url: '/provinces/CHN/'
  })
}

// 获取城市接口最新疫情
export function ChinaCitysMap(params) {
  return request({
    method: 'get',
    url: '/cities/CHN/',
    params: params
  })
}

// 所有国家最新疫情
export function WorldMap() {
  return request({
    method: 'get',
    url: '/countries/'
  })
}
