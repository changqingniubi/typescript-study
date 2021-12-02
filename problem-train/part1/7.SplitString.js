/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-02 16:15:10
 * @LastEditTime: 2021-12-02 16:46:13
 * @LastEditors: changqing
 * @Usage: 
 */

// 将字符串字面量类型按照指定字符，分割为元组。无法分割则返回原字符串字面量



export type SplitString<Str, Separator extends string, Ret extends any[] = []> = Str extends '' ? Ret : (Str extends `${infer L}${Separator}${infer R}` ? SplitString<R, Separator, [...Ret, L]> : [...Ret, Str])

type A1 = SplitString<'handle-open-flag', '-'>        // ["handle", "open", "flag"]
type A2 = SplitString<'open-flag', '-'>               // ["open", "flag"]
type A3 = SplitString<'handle.open.flag', '.'>        // ["handle", "open", "flag"]
type A4 = SplitString<'open.flag', '.'>               // ["open", "flag"]
type A5 = SplitString<'open.flag', '-'>               // ["open.flag"]