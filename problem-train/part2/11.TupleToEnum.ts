/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-04 23:55:26
 * @LastEditTime: 2021-12-06 16:17:40
 * @LastEditors: changqing
 * @Usage: 
 */

//元组类型转换为枚举类型

export default {}




import {FindIndex} from "./10.FindIndex";

type TupleToEnum<T extends string[], K = false> = { readonly [k in T[number]]: K extends true ? FindIndex<T, k> : k }


// 默认情况下，枚举对象中的值就是元素中某个类型的字面量类型
type a1 = TupleToEnum<["MacOS", "Windows", "Linux"]>
// -> { readonly MacOS: "MacOS", readonly Windows: "Windows", readonly Linux: "Linux" }

// 如果传递了第二个参数为true，则枚举对象中值的类型就是元素类型中某个元素在元组中的index索引，也就是数字字面量类型
type a2 = TupleToEnum<["MacOS", "Windows", "Linux"], true>
// -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }