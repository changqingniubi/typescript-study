/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-04 23:14:59
 * @LastEditTime: 2021-12-04 23:43:32
 * @LastEditors: changqing
 * @Usage: 
 */

// 保留元组类型T中的A类型
export default {}


type Filter<T extends any[],F,S extends any[]=[]>=T extends [infer L,...infer R]?
  Filter<R,F,([L] extends [F]?[...S,L]:S)>
:S;

type A = Filter<[1,'BFE', 2, true, 'dev'], number> // [1, 2]
type B = Filter<[1,'BFE', 2, true, 'dev'], string> // ['BFE', 'dev']
type C = Filter<[1,'BFE', 2, any, 'dev'], string> // ['BFE', any, 'dev']