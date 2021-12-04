/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-02 20:40:37
 * @LastEditTime: 2021-12-03 13:18:11
 * @LastEditors: changqing
 * @Usage: 
 */

// 驼峰命名转横杠命名


export default {}

type RemoveFirst<T> = T extends `-${infer L}`?L:T;

type KebabCase<T extends string, Prev extends string=''> =
T extends `${infer L}${infer R}` ? KebabCase<R, `${Prev}${
  L extends Uppercase<L>?`-${ Lowercase<L>}`:L
}`> : RemoveFirst<Prev>;


type a1 = KebabCase<'HandleOpenFlag'>           // handle-open-flag
type a2 = KebabCase<'OpenFlag'>                 // open-flag