/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-04 21:42:37
 * @LastEditTime: 2021-12-04 21:54:36
 * @LastEditors: changqing
 * @Usage: 
 */

// 在元组类型T中添加新的类型I

export default {}


type flat<T> = T extends [...infer M]?[...M]:[T]
type Push<T extends any[],I>=T extends [...infer L]?[...L,...flat<I>]:never;

type A = Push<[1,2,3], 4> // [1,2,3,4]
type B = Push<[1], 2> // [1, 2]
type C = Push<[], 3> // [1, 2]

type D = Push<[1, 2, 3], [4, 5]>
type E = Push<[1, 2, 3], [string, number]>
