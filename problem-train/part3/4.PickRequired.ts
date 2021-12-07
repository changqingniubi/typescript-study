
// PickRequired


export default {}


// 方式一
type ExcludeUndefined<T>= {[K in keyof T]:Exclude<T[K],undefined>}
type RequiredKeys<T, K = keyof T> = K extends keyof T ? (undefined extends ExcludeUndefined<T>[K] ? never : K) : never

export type PickRequired<T> = Pick<T,RequiredKeys<T>>;

// 方式二

export type RequiredKeys2<T, K = keyof T> = K extends keyof T ? (Omit<T, K> extends T ? never : K): never
export type PickRequired2<T> = Pick<T,RequiredKeys2<T>>;


// 方式三
export type PickRequired3<T> = {
  [P in keyof T as Omit<T,P> extends T?never:P]:T[P]
}

type a1 = PickRequired3<{ foo: number | undefined, bar?: string, flag: boolean }>        // {foo:number|undefined,flag:boolean}
type a2 = PickRequired3<{ foo: number, bar?: string }>                                   // {foo:number}
type a3 = PickRequired3<{ foo: number, flag: boolean }>                                  // {foo:number,flag:boolean}
type a4 = PickRequired3<{ foo?: number, flag?: boolean }>                                // {}
type a5 = PickRequired3<{}>                                                              // {}