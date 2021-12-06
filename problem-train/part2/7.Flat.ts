/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-04 22:18:35
 * @LastEditTime: 2021-12-04 22:40:45
 * @LastEditors: changqing
 * @Usage: 
 */

//拍平元组


export default {}


type Flat<T extends any[],S extends any[]=[]> =  T extends [infer L,...infer R]? (L extends [...infer M]?Flat<R,[...S,...Flat<M>]>:Flat<R,[...S,L]>):S;

type Flat2<T extends any[],S extends any[]=[]> =  T extends [infer L,...infer R]? [...S,...(L extends any[]?[...Flat<L>]:[L]),...Flat<R>]:T;

type A = Flat<[1, 2, 3]> // [1,2,3]
type B = Flat<[1, [2, 3], [4, [5, [6]]]]> // [1,2,3,4,5,6]
type C = Flat<[]> // []
type D = Flat<[1]> // [1]