/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-04 21:39:50
 * @LastEditTime: 2021-12-04 21:41:40
 * @LastEditors: changqing
 * @Usage: 
 */


// 移除元组类型中的第一个类型

export default {}

type Shift<T extends any[]>=T extends [infer L,...infer R]?R:T;

type A = Shift<[1, 2, 3]> // [2,3]
type B = Shift<[1]> // []
type C = Shift<[]> // []
