/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-04 23:43:42
 * @LastEditTime: 2021-12-06 16:22:15
 * @LastEditors: changqing
 * @Usage: 
 */


// 找出E类型在元组类型T中的下标

export default {}


type Equal<T, K> = [T] extends [K] ? [K] extends [T] ? (keyof T extends keyof K ? keyof K extends keyof T ? true : false : false) : false : false;

export type FindIndex<T extends any[], K> = T extends [...infer left, infer last] ? Equal<K, last> extends true ? left["length"] : FindIndex<left, K> : never

type FindIndex2<T extends any[], E,A extends any[]=[]> = T extends [infer L, ...infer R] ? (Equal<L, E> extends true ? A["length"] : FindIndex2<R, E,[...A,L]> ): never


type A = [any, never, 1, '2', true]
type B = FindIndex<A, 1> // 2
type C = FindIndex<A, 3> // never


type A1 = [any, never, 1, '2', true]
type B1 = FindIndex2<A, 1> // 2
type C1 = FindIndex2<A, 3> // never