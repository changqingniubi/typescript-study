/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-06 19:13:03
 * @LastEditTime: 2021-12-06 19:13:03
 * @LastEditors: changqing
 * @Usage: 
 */



export default {};

export type Equal<T, K> = [T] extends [K] ? [K] extends [T] ? (keyof T extends keyof K ? keyof K extends keyof T ? true : false : false) : false : false;