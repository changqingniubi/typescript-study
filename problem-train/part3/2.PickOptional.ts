/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-06 20:01:56
 * @LastEditTime: 2021-12-07 10:56:38
 * @LastEditors: changqing
 * @Usage: 
 */

//保留一个对象中的可选属性类型


export default {}


//方式一

type ExcludeUndefined<T>= {[K in keyof T]:Exclude<T[K],undefined>}
type OptionalKeys<T, K = keyof T> = K extends keyof T ? (undefined extends ExcludeUndefined<T>[K] ? K : never) : never

export type PickOptional<T> = Pick<T,OptionalKeys<T>>;



// 方式二
type OptionalKeys2<T, K = keyof T> = K extends keyof T ? (Omit<T, K> extends T ? K : never): never

export type PickOptional2<T> = Pick<T,OptionalKeys2<T>>;

// 方式三
export type PickOptional3<T> = {
  [P in keyof T as Omit<T,P> extends T?P:never]:T[P]
}


type a1 = PickOptional3<{ foo: number | undefined, bar?: string, flag: boolean }>        // {bar?:string}
type a2 = PickOptional3<{ foo: number, bar?: string }>                                   // {bar?:string}
type a3 = PickOptional3<{ foo: number, flag: boolean }>                                  // {}
type a4 = PickOptional3<{ foo?: number, flag?: boolean }>                                // {foo?:number,flag?:boolean}
type a5 = PickOptional3<{}>   


type a = Pick<{ foo: number | undefined, bar?: string, flag: boolean },'bar'>