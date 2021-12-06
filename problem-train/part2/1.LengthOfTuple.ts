/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-04 21:23:07
 * @LastEditTime: 2021-12-04 21:25:33
 * @LastEditors: changqing
 * @Usage: 
 */


// 计算元组类型的长度

export default {}

type LengthOfTuple<T extends any[]>=T['length']

type A = LengthOfTuple<['B', 'F', 'E']> // 3
type B = LengthOfTuple<[]> // 0



