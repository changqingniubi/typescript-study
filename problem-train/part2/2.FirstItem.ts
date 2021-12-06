/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-04 21:25:46
 * @LastEditTime: 2021-12-04 21:37:25
 * @LastEditors: changqing
 * @Usage: 
 */

// 得到元组类型中的第一个元素

export default {}

type FirstItem<T extends any[]> =T extends [infer L,...infer R]?L:never 

type A = FirstItem<[string, number, boolean]> // string
type B = FirstItem<['B', 'F', 'E']> // 'B'