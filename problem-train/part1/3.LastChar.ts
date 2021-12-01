/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-01 15:20:30
 * @LastEditTime: 2021-12-01 18:52:53
 * @LastEditors: changqing
 * @Usage: 
 */
// 获取字符串字面量中的最后一个字符
export default {}
type LastChar<T,Prev=never>= T extends `${infer L}${infer R}`? LastChar<R,L>:Prev; 
type A = LastChar<'BFE'> // 'E'
type B = LastChar<'dev'> // 'v'
type C = LastChar<''> // never