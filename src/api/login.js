'use strict'
import ajax from '../utils/ajax'
// 登陆
export function loginIn (name, password) {
  const data = {
    name,
    password
  }
  return ajax({
    url: '/login',
    method: 'post',
    data
  })
}
