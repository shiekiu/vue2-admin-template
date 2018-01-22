'use strict'
module.exports = file => () => import('@/views/' + file + '.vue')
