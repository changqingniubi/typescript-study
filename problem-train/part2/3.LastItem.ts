/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-04 21:37:35
 * @LastEditTime: 2021-12-04 21:37:35
 * @LastEditors: changqing
 * @Usage: 
 */

// 得到元组类型中的最后一个元素

export default {}

type LastItem<T extends any[]> =T extends [...infer L,infer R]?R:never 

type A = LastItem<[string, number, boolean]> // boolean
type B = LastItem<['B', 'F', 'E']> // 'E'
type C = LastItem<[]> // never