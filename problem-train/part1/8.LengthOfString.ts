/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-02 19:51:18
 * @LastEditTime: 2021-12-03 12:55:16
 * @LastEditors: changqing
 * @Usage: 
 */

// 计算字符串字面量类型的长度

export default {}


type LengthOfString<T extends string, TT extends any[] = []> = T extends '' ? TT["length"] : T extends `${infer L}${infer R}` ? LengthOfString<R, [...TT, L]> : never

type LengthOfString2<T extends string, TT extends any[]=[]> =   T extends `${infer L}${infer R}` ? LengthOfString<R, [...TT, L]> : TT["length"];

type A = LengthOfString<'BFE.dev'> // 7
type B = LengthOfString<''> // 0
