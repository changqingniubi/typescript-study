/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-06 20:51:54
 * @LastEditTime: 2021-12-07 10:59:28
 * @LastEditors: changqing
 * @Usage: 
 */

//获取对象类型中的必须属性的联合类型
export default {}

// 方式一
type ExcludeUndefined<T>= {[K in keyof T]:Exclude<T[K],undefined>}
type RequiredKeys<T, K = keyof T> = K extends keyof T ? (undefined extends ExcludeUndefined<T>[K] ? never : K) : never


// 方式二

export type RequiredKeys2<T, K = keyof T> = K extends keyof T ? (Omit<T, K> extends T ? never : K): never

type a1 = RequiredKeys2<{ foo: number | undefined, bar?: string, flag: boolean }>        // foo|flag
type a2 = RequiredKeys2<{ foo: number, bar?: string }>                                   // foo
type a3 = RequiredKeys2<{ foo: number, flag: boolean }>                                  // foo|flag
type a4 = RequiredKeys2<{ foo?: number, flag?: boolean }>                                // never
type a5 = RequiredKeys2<{}>                                                              // never