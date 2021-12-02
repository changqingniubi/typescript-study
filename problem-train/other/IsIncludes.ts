/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-02 19:49:36
 * @LastEditTime: 2021-12-02 19:49:37
 * @LastEditors: changqing
 * @Usage: 
 */


//检查是否包含指定的子字符串

export default {}

type IsIncludes<Needle extends string, Haystack extends string> =
  Haystack extends `${infer L}${Needle}${infer R}` ? true : false

  type String2 = 'process'
type Included = IsIncludes<'pro', String2>
type NotIncluded = IsIncludes<'pre', String2>