/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-04 22:42:40
 * @LastEditTime: 2021-12-04 22:51:35
 * @LastEditors: changqing
 * @Usage: 
 */

//复制类型T为C个元素的元组类型

export default {}

type Repeat<T,C extends number=0,L extends any[]=[]> = L['length'] extends C?L:Repeat<T,C,[...L,T]>;

type A = Repeat<number, 3> // [number, number, number]
type B = Repeat<string, 2> // [string, string]
type C = Repeat<1, 1> // [1]
type D = Repeat<0, 0> // []