/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-07 10:25:55
 * @LastEditTime: 2021-12-07 14:29:26
 * @LastEditors: changqing
 * @Usage: 
 */
//判断是否为没有属性的对象类型{}

export default {}

type IsEmptyType2<T> = T extends object?
    keyof T extends never?
      number extends T?true
      :false 
    :false
:false;




//1.分辨并剔除 object:
//前面所知，基本类型不能赋值给object，但是基本类型可以赋值给{}，
// 即:
type T_1 = number extends object ? true : false // false
type T_2 = number extends {} ? true : false // true

//因此得出
type IsEmptyType11<T> = number extends T ? true : false
//现在object就被剔除了，一并剔除的还有许多，如null/undefinde/string。

//2.分辨并剔除其他类型
// 前面有写到{}类型没有属性，所以可以通过keyof再筛选一层把其他类型筛掉
type IsEmptyType12<T> = number extends T  
  ? keyof T extends never    
    ? true		
    : false  
  : false

//  keyof {} 为never，而此时通过前面的筛选留下的类型只有number/Object/unknown/any/{}几个类型通过判断返回true，而满足的keyof type为never的只有null/undefined/unknown/{}，因此这次筛选只留下了unknown/{}

//3.分辨并剔除unknown
 
//只差最后一步剔除unknow，unknow是顶级类型即所有类型的父类，所有类型都可以extends它，因此可以通过反向思考，写出

//unkown不能 extends其他类型除了any。

type IsEmptyType<T> = number extends T
    ? keyof T extends never
        ? T extends {}
            ? true
            : false
        : false
    : false

type A = IsEmptyType<string> // false
type B = IsEmptyType<{ a: 3 }> // false
type C = IsEmptyType<{}> // true
type D = IsEmptyType<any> // false
type E = IsEmptyType<object> // false
type F = IsEmptyType<Object> // false
type G = IsEmptyType<unknown> // false
type H = IsEmptyType<3> // false
type I = IsEmptyType<[]> // false



type a = keyof {}

type b = keyof object

 type c = number extends object?1:2; //2
 type d = number extends {}?1:2; // 1


// 原始数据类型不可以赋值给另一个原始数据类型 number不可以赋值给object
// 包装数据类型可以赋值给原始数据类型，比如 Number可以赋值给object

let v1 = {} as object
let v2 = {} as const
let v3 = {}
let v4 =1
//v1 = v4
v2 = v4
v3 = v4


type T = number | string
declare const T: object
type aa = T
console.log(T)


//作为值的类型，除了null/undefined类型其他都可以赋值给{}而不报错
const c1: {} = 1
const c2: {} = '1'
const c3: {} = Symbol()
const c4: {} = undefined
const c4: {} = null

//作为类型时，与上面同理
type t1 = 1 extends {} ? true : false
type t2 = '1' extends {} ? true : false


// 在TS中，其实基本类型和对应的内置对象大体一致，只不过在TS显示时和interface一样封装起来了，
type n1 = keyof number
//   ^ type n = "toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString"
type n2 = keyof Number
//   ^ keyof Number
type T1 = n1 extends n2 ? true : false // true
type T2 = n2 extends n1 ? true : false // true
//看起来似乎完全一致，但是呢
const a: Number = 1 // yes
type T11 = Number extends number ? true : false // false
type T22 = number extends Number ? true : false // true

//也就是说其实number这个基础类型实际是在TS内部扩展了Number这个类型接口的，能用基本类型还是用基本类型，其他同理。

//TS类型系统是基于duck typing的思想风格实现的，因此一个对象中就算有多余的属性，赋值给一个只需要对象中部分属性的对象时，是完全没问题的，因此上面的
// 完全没问题，TS判断能否赋值就相当于extends结果是否为true。
const c111: {} = 1
type T111 = number extends {}  ? true : false // true