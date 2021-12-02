/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-02 16:44:07
 * @LastEditTime: 2021-12-02 16:50:06
 * @LastEditors: changqing
 * @Usage: 
 */

// JavaScript 的字符串中有一个实例方法 trimStart，它可以去掉字符串前面的空格字符。我们将在 TypeScript 的类型层面上实现这个功能。代码如下

export default {}

type Whitespace = ' ' | '\n' | '\r' | '\t'

type TrimStart<S extends string, P extends string = Whitespace> =
  S extends `${P}${infer R}` ? TrimStart<R, P> : S

  type A1 = TrimStart<' handle'>        // ["handle", "open", "flag"]
  type A2 = TrimStart<'\nhandle'>               // ["open", "flag"]
  type A3 = TrimStart<'\rhandle'> 


type String1 = '\t  \r  \n   value'
type Trimmed1 = TrimStart<String1>

type String2 = '---value'
type Trimmed2 = TrimStart<String2, '-'>