/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-07 22:59:46
 * @LastEditTime: 2021-12-07 23:05:49
 * @LastEditors: changqing
 * @Usage: 
 */


//将联合类型转换为交叉类型

export default {}

type UnionToIntersection<T>=(T extends any?(args:T)=>any:never) extends (args: infer R)=>any?R:never

type A = UnionToIntersection<{a: string} | {b: string} | {c: string}> 
// {a: string} & {b: string} & {c: string}