/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-07 11:54:38
 * @LastEditTime: 2021-12-07 12:30:25
 * @LastEditors: changqing
 * @Usage: 
 */


// 判断是否为any类型

export default {}

// 使用 [T] 避免传入的是联合类型导致类型分布
// unknown 只能赋值给 any或者unknown
// any可以赋值给string，但是unknown不可以赋值给string

type IsAny<T> = [unknown] extends [T] ? ([T] extends [string] ? true : false) : false

type A = IsAny<string> // false
type B = IsAny<any> // true
type C = IsAny<unknown> // false
type D = IsAny<never> // false