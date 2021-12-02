/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-01 13:26:25
 * @LastEditTime: 2021-12-02 20:57:55
 * @LastEditors: changqing
 * @Usage: 
 */

// 首字母大写

type CapitalizeString<T>=T extends `${infer L}${infer R}`?`${Uppercase<L>}${R}`:T;
type a1 = CapitalizeString<'handler'>       // Handler
type a2 = CapitalizeString<'parent'>        // Parent
type a3 = CapitalizeString<233>             // 233