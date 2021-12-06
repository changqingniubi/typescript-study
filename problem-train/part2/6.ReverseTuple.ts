/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-04 21:55:52
 * @LastEditTime: 2021-12-04 22:03:05
 * @LastEditors: changqing
 * @Usage: 
 */

// 反转元组

export default {}



type ReverseTuple<T extends any[],S extends any[] =[] > = T extends [...infer L,infer R]?ReverseTuple<L,[...S,R]>:S;

type A = ReverseTuple<[string, number, boolean]> // [boolean, number, string]
type B = ReverseTuple<[1, 2, 3]> // [3,2,1]
type C = ReverseTuple<[]> // []