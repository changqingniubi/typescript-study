/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-07 21:35:57
 * @LastEditTime: 2021-12-07 22:48:38
 * @LastEditors: changqing
 * @Usage: 
 */


// 有且只有一个属性

// 实现一个叫做 UnionToBooleanProps 的泛型，使得以下需求成立

type UnionToBooleanProps<T extends string, TT extends string = T> =
    T extends any ?
        { [k in Exclude<TT, T>]?: void } & { [k in T]: boolean; }
        : never

        
type MessageStringType = "info" | "success" | "warning" | "error";
type OneMessageTypes = UnionToBooleanProps<MessageStringType>
type Props = OneMessageTypes & { id: string; }
function Component(props: Props) {
    return <></>
}

const a = <Component id="abc" info/>           //correct
const b = <Component id="abc" success/>        //correct
const c = <Component id="abc"/>                //wrong
const d = <Component id="abc" info success/>   //wrong

// 组件Component所接收的属性，有且只有一个 "info" | "success" | "warning" | "error" 中的值；
