/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-06 20:51:54
 * @LastEditTime: 2021-12-06 20:54:53
 * @LastEditors: changqing
 * @Usage: 
 */

//获取对象类型中的必须属性的联合类型
export default {}

type ExcludeUndefined<T>= {[K in keyof T]:Exclude<T[K],undefined>}
type RequiredKeys<T, K = keyof T> = K extends keyof T ? (undefined extends ExcludeUndefined<T>[K] ? never : K) : never


type a1 = RequiredKeys<{ foo: number | undefined, bar?: string, flag: boolean }>        // foo|flag
type a2 = RequiredKeys<{ foo: number, bar?: string }>                                   // foo
type a3 = RequiredKeys<{ foo: number, flag: boolean }>                                  // foo|flag
type a4 = RequiredKeys<{ foo?: number, flag?: boolean }>                                // never
type a5 = RequiredKeys<{}>                                                              // never