/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-02 16:51:37
 * @LastEditTime: 2021-12-02 19:44:33
 * @LastEditors: changqing
 * @Usage: 
 */

export default {}

type ReplaceAll<Search extends string, Replace extends string, Subject extends string> =
    Subject extends `${infer L}${Search}${infer R}` ? ReplaceAll<Search, Replace, `${L}${Replace}${R}`> : Subject


type String2 = 'process'
type Replaced3 = ReplaceAll<'s', 'x', String2>