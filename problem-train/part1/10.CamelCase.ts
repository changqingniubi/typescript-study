/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-03 13:13:40
 * @LastEditTime: 2021-12-04 12:17:45
 * @LastEditors: changqing
 * @Usage: 
 */


// 横杠命名转化为驼峰命名

export default CamelCase

export type CamelCase<T extends string,Prev extends string=''> = T extends `${infer L}-${infer R1}${infer R2}`?CamelCase<R2,`${Prev}${L}${Uppercase<R1>}`>:Capitalize<`${Prev}${T}`>

type a1 = CamelCase<'handle-open-flag'>         // HandleOpenFlag
type a2 = CamelCase<'open-flag'>


//内置首字母大写
type a3 = Capitalize<'openflag'>
