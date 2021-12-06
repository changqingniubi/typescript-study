/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-06 20:01:56
 * @LastEditTime: 2021-12-06 20:53:31
 * @LastEditors: changqing
 * @Usage: 
 */

//保留一个对象中的可选属性类型


export default {}

type ExcludeUndefined<T>= {[K in keyof T]:Exclude<T[K],undefined>}
type OptionalKeys<T, K = keyof T> = K extends keyof T ? (undefined extends ExcludeUndefined<T>[K] ? K : never) : never


export type PickOptional<T> = Pick<T,OptionalKeys<T>>;

type a1 = PickOptional<{ foo: number | undefined, bar?: string, flag: boolean }>        // {bar?:string}
type a2 = PickOptional<{ foo: number, bar?: string }>                                   // {bar?:string}
type a3 = PickOptional<{ foo: number, flag: boolean }>                                  // {}
type a4 = PickOptional<{ foo?: number, flag?: boolean }>                                // {foo?:number,flag?:boolean}
type a5 = PickOptional<{}>   


type a = Pick<{ foo: number | undefined, bar?: string, flag: boolean },'bar'>