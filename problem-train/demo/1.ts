/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-08 16:26:29
 * @LastEditTime: 2021-12-08 17:17:07
 * @LastEditors: changqing
 * @Usage: 
 */

export default {}

type BoxedValue<T> = { value: T };
type BoxedArray<T> = { array: T[] };
type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;
type T20 = Boxed<string>; // BoxedValue<string>;
type T21 = Boxed<number[]>; // BoxedArray<number>;
type T23 = Boxed<string[]>; // BoxedArray<string>;
type T22 = Boxed<string | number[]>; // BoxedValue<string> | BoxedArray<number>;


// 条件类型的分布特性可以方便地用于过滤联合类型：

type Diff<T, U> = T extends U ? never : T; // Remove types from T that are assignable to U
type Filter<T, U> = T extends U ? T : never; // Remove types from T that are not assignable to U
type T30 = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "b" | "d"
type T31 = Filter<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "a" | "c"
type T32 = Diff<string | number | (() => void), Function>; // string | number
type T33 = Filter<string | number | (() => void), Function>; // () => void
type NonNullable<T> = Diff<T, null | undefined>; // Remove null and undefined from T
type T34 = NonNullable<string | number | undefined>; // string | number
type T35 = NonNullable<string | string[] | null | undefined>; // string | string[]
function f1<T>(x: T, y: NonNullable<T>) {
  x = y; // Ok
  y = x; // Error
}
function f2<T extends string | undefined>(x: T, y: NonNullable<T>) {
  x = y; // Ok
  y = x; // Error
  let s1: string = x; // Error
  let s2: string = y; // Ok
}

//与映射类型结合使用时，条件类型特别有用

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;
type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;
interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}
type T40 = FunctionPropertyNames<Part>; // "updatePart"
type T41 = NonFunctionPropertyNames<Part>; // "id" | "name" | "subparts"
type T42 = FunctionProperties<Part>; // { updatePart(newName: string): void }
type T43 = NonFunctionProperties<Part>; // { id: number, name: string, subparts: Part[] }

//与联合和交集类型类似，条件类型不允许递归引用自己。例如下面是一个错误。

type ElementType<T> = T extends any[] ? ElementType<T[number]> : T; // Error

//条件类型中的类型推断
//在条件类型的 extends 子句中，现在可以有引入要推断的类型变量的推断声明。可以在条件类型的真实分支中引用此类推断类型变量。同一类型变量可能有多个推断位置。

//例如，以下提取函数类型的返回类型：
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

//条件类型可以嵌套以形成按顺序评估的模式匹配序列：

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;
type T0 = Unpacked<string>; // string
type T1 = Unpacked<string[]>; // string
type T2 = Unpacked<() => string>; // string
type T3 = Unpacked<Promise<string>>; // string
type T4 = Unpacked<Promise<string>[]>; // Promise<string>
type T5 = Unpacked<Unpacked<Promise<string>[]>>; // string

//以下示例演示了协变位置中同一类型变量的多个候选者如何导致推断联合类型：

type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;
type T50 = Foo<{ a: string; b: string }>; // string
type T51 = Foo<{ a: string; b: number }>; // string | number

// 同样，逆变位置中同一类型变量的多个候选会导致推断出交叉类型：

type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
  ? U
  : never;
type T60 = Bar<{ a: (x: string) => void; b: (x: string) => void }>; // string
type T61 = Bar<{ a: (x: string) => void; b: (x: number) => void }>; // string & number


//当从具有多个调用签名的类型（例如重载函数的类型）进行推断时，会从最后一个签名（这可能是最宽松的包罗万象的情况）进行推断。无法根据参数类型列表执行重载决议。
declare function foo(x: string): number;
declare function foo(x: number): string;
declare function foo(x: string | number): string | number;
type T70 = ReturnType<typeof foo>; // string | number

//不能在常规类型参数的约束子句中使用推断声明：

//type ReturnType<T extends (...args: any[]) => infer R> = R; // Error, not supported

//但是，通过删除约束中的类型变量并指定条件类型，可以获得大致相同的效果：

type AnyFunction = (...args: any[]) => any;
type ReturnType2<T extends AnyFunction> = T extends (...args: any[]) => infer R
  ? R
  : any;

// 预定义条件类型
//TypeScript 2.8 adds several predefined conditional types to lib.d.ts:

//Exclude<T, U> — Exclude from T those types that are assignable to U.
//Extract<T, U> — Extract from T those types that are assignable to U.
//NonNullable<T> — Exclude null and undefined from T.
//ReturnType<T> — Obtain the return type of a function type.
//InstanceType<T> — Obtain the instance type of a constructor function type.

type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "b" | "d"
type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "a" | "c"
type T02 = Exclude<string | number | (() => void), Function>; // string | number
type T03 = Extract<string | number | (() => void), Function>; // () => void
type T04 = NonNullable<string | number | undefined>; // string | number
type T05 = NonNullable<(() => string) | string[] | null | undefined>; // (() => string) | string[]
function f11(s: string) {
  return { a: 1, b: s };
}
class C {
  x = 0;
  y = 0;
}
type T10 = ReturnType<() => string>; // string
type T11 = ReturnType<(s: string) => void>; // void
type T12 = ReturnType<<T>() => T>; // {}
type T13 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
type T14 = ReturnType<typeof f11>; // { a: number, b: string }
type T15 = ReturnType<any>; // any
type T16 = ReturnType<never>; // any
type T17 = ReturnType<string>; // Error
type T18 = ReturnType<Function>; // Error
type T220 = InstanceType<typeof C>; // C
type T221 = InstanceType<any>; // any
type T222 = InstanceType<never>; // any
type T223 = InstanceType<string>; // Error
type T224 = InstanceType<Function>; // Error

//改进了对映射类型修饰符的控制
//为映射类型添加了添加或删除特定修饰符的能力。具体来说，只读或？映射类型中的属性修饰符现在可以以 + 或 - 为前缀，以指示应该添加或删除修饰符。
type MutableRequired<T> = { -readonly [P in keyof T]-?: T[P] }; // Remove readonly and ?
type ReadonlyPartial<T> = { +readonly [P in keyof T]+?: T[P] }; // Add readonly and ?

//改进 keyof 与交叉点类型
type A = { a: string };
type B = { b: string };
type T81 = keyof (A & B); // "a" | "b"
type T82<T> = keyof (T & B); // keyof T | "b"
type T83<U> = keyof (A & U); // "a" | keyof U
type T84<T, U> = keyof (T & U); // keyof T | keyof U
type T85 = T82<A>; // "a" | "b"
type T86 = T83<B>; // "a" | "b"
type T87 = T84<A, B>; // "a" | "b"