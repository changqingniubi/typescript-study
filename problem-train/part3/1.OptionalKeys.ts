/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-06 16:54:45
 * @LastEditTime: 2021-12-07 21:41:06
 * @LastEditors: changqing
 * @Usage: 
 */


//获取对象类型中的可选属性的联合类型

export default {}


//开启严格空检查

export type OptionalKeys1<T> = { [K in keyof T]-?: undefined extends T[K] ? K : never }[keyof T]

export type OptionalKeys11<T, K = keyof T> = K extends keyof T ? (undefined extends T[K] ? K : never) : never



//没有开启严格空检查
//type IsOptional22<T, K extends keyof T> = { [K1 in Exclude<keyof T, K>]: T[K1] } & { K?: T[K] } extends T ? K : never
//type OptionalKeys22<T> = { [K in keyof T]: IsOptional<T, K> }[keyof T]




type a1 = OptionalKeys1<{ foo: number, bar?: string, flag: boolean }>        // bar
type a2 = OptionalKeys1<{ foo: number, bar?: string }>                       // bar
type a3 = OptionalKeys1<{ foo: number, flag: boolean }>                      // never
type a4 = OptionalKeys1<{ foo?: number, flag?: boolean }>                    // foo|flag
type a5 = OptionalKeys1<{}> // never





//加强版

type ExcludeUndefined<T>= {[K in keyof T]:Exclude<T[K],undefined>}

//方式一
//export type OptionalKeys<T> = { [K in keyof T]-?: undefined extends ExcludeUndefined<T>[K] ? K : never }[keyof T]
// 方式二
//export type OptionalKeys<T, K = keyof T> = K extends keyof T ? (undefined extends ExcludeUndefined<T>[K] ? K : never) : never

// 方式三
export type OptionalKeys<T, K = keyof T> = K extends keyof T ? (Omit<T, K> extends T ? K : never): never


type a11 = OptionalKeys<{ foo: number|undefined, bar?: string, flag: boolean }>        // bar
type a22 = OptionalKeys<{ foo: number, bar?: string }>                       // bar
type a33 = OptionalKeys<{ foo: number, flag: boolean }>                      // never
type a44 = OptionalKeys<{ foo?: number, flag?: boolean }>                    // foo|flag
type a55 = OptionalKeys<{}> // never


type a6 =ExcludeUndefined<{ foo: number|undefined, bar?: string, flag: boolean }>

