import request from '@/utils/request.js'
import qs from 'qs'
import formRequest from '@/utils/formData.js'
// 短信登录
export function userLogin(params) {
  return request({
    url: 'auth/oauth/token',
    method: 'post',
    params: params
  })
}
// 用户登出
export function userlogout() {
  return request({
    url: 'auth/oauth/logout',
    method: 'delete'
  })
}
// 获取短信
export function getSMSCode(params) {
  return request({
    url: `patient/sms/${params.phone}`,
    method: 'get'
  })
}
// 获取购物车
export function getShopCart(params) {
  return request({
    url: 'order/shopCart/info',
    method: 'get',
    params: params
  })
}
// 更新购物车
export function getUponconList(params) {
  return request({
    url: 'order/shopCart',
    method: 'post',
    data: params
  })
}
// 更新购物车
export function updateShopCart(params) {
  return request({
    url: 'order/shopCart',
    method: 'put',
    data: params
  })
}
// 获取产品列表
export function getProduct(params) {
  return request({
    url: 'admin/product',
    method: 'get',
    params: params
  })
}
// 新建产品
export function newProduct(params) {
  return formRequest({
    url: 'admin/product',
    method: 'post',
    data: qs.stringify(params)
  })
}
// 编辑产品
export function editProduct(params) {
  return formRequest({
    url: 'admin/product',
    method: 'put',
    params: qs.stringify(params)
  })
}
// 获取省市数据
export function getArea(params) {
  return request({
    url: 'admin/province/city',
    method: 'get',
    params: params
  })
}
// 获取收货地址
export function getAddress() {
  return request({
    url: 'patient/address',
    method: 'get'
  })
}
// 新增收货地址
export function insertAddress(params) {
  return request({
    url: 'patient/address',
    method: 'post',
    data: params
  })
}
// 更新收货地址
export function updateAddress(params) {
  return request({
    url: 'patient/address',
    method: 'put',
    data: params
  })
}
// 删除收货地址
export function deleteAddress(params) {
  return request({
    url: `patient/address/${params.addressId}`,
    method: 'delete'
  })
}
// 获取药店列表
export function getDrugstore(params) {
  return request({
    url: 'admin/drugstore/drugstore',
    method: 'get',
    params: params
  })
}

// 获取用户可用优惠券信息
export function getCouponList(params) {
  return request({
    url: 'admin/coupon/getCouponList',
    method: 'get',
    params: params
  })
}

// 获取用户可用优惠券信息
export function getCoupon() {
  return request({
    url: 'admin/coupon',
    method: 'get'
  })
}
// 获取用户订单
export function getOrderList(params) {
  return request({
    url: 'order/order/getPatientOrders',
    method: 'get',
    params: params
  })
}
// 用户取消订单
export function cancleOrder(params) {
  return request({
    url: `order/order/cancel/${params.orderNo}`,
    method: 'put'
  })
}
// 获取用户订单
export function submitOrder(params) {
  return request({
    url: 'order/order',
    method: 'post',
    data: params
  })
}
