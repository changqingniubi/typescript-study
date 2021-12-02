/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-02 20:40:37
 * @LastEditTime: 2021-12-02 21:00:46
 * @LastEditors: changqing
 * @Usage: 
 */

export default {}

// 驼峰命名转横杠命名

type Upper = 'A' | 'B' | 'C' | 'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'U'|'V'|'W'|'X'|'Y'|'Z';

type KebabCase<S extends string, P extends Upper=Upper> =
  S extends `${P}${infer R}` ? KebabCase<`${Lowercase<P>}-${R}`, P> : S;

type a1 = KebabCase<'HandleOpenFlag'>           // handle-open-flag
type a2 = KebabCase<'OpenFlag'>                 // open-flag