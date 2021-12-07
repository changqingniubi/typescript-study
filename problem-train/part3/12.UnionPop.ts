/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-07 23:10:26
 * @LastEditTime: 2021-12-07 23:39:17
 * @LastEditors: changqing
 * @Usage: 
 */


// 得到联合类型中的最后一个类型
export type UnionPop<U> = ((U extends any ? (k: (x: U) => void) => void : never) extends (k: infer I) => void ? I : never) extends ((a: infer A) => void) ? A : never

type a = 1 | 2 | 3
type b = UnionPop<a>;       // 3


type UnionToIntersection<T> = (T extends any ? (args: T) => any: never) extends (args: infer R) => any ? R : never;
type LastInUnion<T> = UnionToIntersection<(T extends any ? (arg: T) => any : never)> extends (arg: infer R) => any ? R : never;
type c = LastInUnion<a>;    // 3




type p1 = { name: 1 }
type p2 = { age: 2 }
type p3 = { flag: true }

type k = ((x: p1) => number) & ((y: p2) => string) & ((z: p3) => boolean);  // 这里实际上就是一个重载函数
type d = k extends ((a: infer A) => void) ? A : 'b'       //  最后一个的参数类型：p3，这是为啥
type e = k extends ((a: any) => infer A) ? A : 'b'        //  最后一个的返回值类型：boolean，这是为啥

function overload(a: number): 'a';
function overload(a: string): 'b';
function overload(a: number | string) {
    return a;
}

type f1 = typeof overload extends (a: infer A) => void ? A : 'b'        // 最后一个的参数类型：string，这是为啥
type f2 = typeof overload extends (a: any) => infer A ? A : 'b'         // 最后一个的返回值类型：'b'，这是为啥
type f3 = ReturnType<typeof overload>

type k2 = ((x: p1) => number) | ((y: p2) => string) | ((z: p3) => boolean);
type paramType = k2 extends ((a: infer A) => void) ? A : 'a'       // p1 & p2 & p3               // 函数参数是逆变的，得到的结果是子类，也就是并集，是交叉类型
type returnType = k2 extends ((a: any) => infer A) ? A : 'a'       // string|number|boolean         // 函数返回值是协变的，得到的结构是父类，也就是交集，是联合类型