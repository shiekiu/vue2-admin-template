'use strict'
import ajax from '../utils/ajax'
export function getAccoutList () {
  return ajax({
    url: '/userList',
    method: 'get'
  })
}
export function getAccountById (id) {
  return ajax({
    url: '/user/' + id,
    method: 'get'
  })
}
