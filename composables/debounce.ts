/*
 * @Author: BY by15242952083@outlook.com
 * @Date: 2022-10-20 20:42:13
 * @LastEditors: BY by15242952083@outlook.com
 * @LastEditTime: 2022-11-14 17:27:34
 * @FilePath: \GSS\src\utils\debounce.ts
 * @Description:防抖工具类
 * Copyright (c) 2022 by BY email: by15242952083@outlook.com, All Rights Reserved.
 */
let timeout: ReturnType<typeof setTimeout> | null = null

/**
 *
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 * @description:
 * @param {*} func  要执行的回调函数
 * @param {*} wait  延时的时间
 * @param {*} immediate  是否立即执行
 * @param {*} param  参数列表
 * @return {*}
 */
export const debounce = (func: Function, wait = 500, immediate = false, param?: Array<any>) => {
  // 清除定时器
  if (timeout !== null) {
    clearTimeout(timeout)
    timeout = null
  }
  // 立即执行，此类情况一般用不到
  if (immediate) {
    const callNow = !timeout
    timeout = setTimeout(() => {
      timeout = null
    }, wait)
    if (callNow)
      typeof func === 'function' && func(...param || [])
  }
  else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(() => {
      typeof func === 'function' && func(...param || [])
    }, wait)
  }
}
