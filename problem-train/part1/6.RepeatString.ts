/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-02 13:11:46
 * @LastEditTime: 2021-12-02 13:36:19
 * @LastEditors: changqing
 * @Usage: 
 */


// 复制字符T为字符串类型，长度为C

export default {}

type RepeatString<T extends string,K,A extends any[]=[],Prev extends string=''> = K extends A['length']?Prev:RepeatString<T,K,[...A,null],`${Prev}${T}`>

type A = RepeatString<'a', 3> // 'aaa'
type B = RepeatString<'a', 0> // ''