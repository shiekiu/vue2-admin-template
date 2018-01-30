'use strict'
import ajax from '../utils/ajax'
const getAccoutList = () => {
  return ajax({
    url: '/userList',
    method: 'get'
  })
}
const getAccountById = (id) => {
  return ajax({
    url: '/user/' + id,
    method: 'get'
  })
}
export { getAccoutList, getAccountById }
