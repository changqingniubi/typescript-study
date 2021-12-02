/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-02 12:52:09
 * @LastEditTime: 2021-12-02 13:10:11
 * @LastEditors: changqing
 * @Usage: 
 */
//将字符串类型的元素转换为字符串字面量类型


export default {}

type  TupleToString<T extends string[],A extends string="">=T extends [infer L,...infer R]?(L extends string? TupleToString<R,`${A}${L}`>:""):A;

type TupleToString2<T, Prev extends string = ''> = T extends [infer L, ...infer R] ? (L extends `${infer LL}` ? TupleToString<R, `${Prev}${LL}`> : '') : Prev

type A = TupleToString<['a', 'b', 'c']> // 'abc'
type B = TupleToString<[]>              // ''
type C = TupleToString<['a']>           // 'a'