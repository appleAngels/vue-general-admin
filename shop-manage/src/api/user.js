import request from '@/utils/request'
// 权限管理: http://39.98.123.211:8170/swagger-ui.html
// 商品管理：http://39.98.123.211:8216/swagger-ui.html
export function login(data) {
  return request({
    url: '/admin/acl/index/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/acl/index/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/admin/acl/index/logout',
    method: 'post'
  })
}
