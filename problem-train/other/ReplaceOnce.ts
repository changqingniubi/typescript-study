/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-02 16:51:25
 * @LastEditTime: 2021-12-02 19:44:51
 * @LastEditors: changqing
 * @Usage: 
 */


// 字符串替换

//ReplaceOnce 类型和 ReplaceAll 类型需要三个类型参数：Search 类型是要被搜索的字符串；Replace 类型用于找到 Search 后，替换掉原来的 Search；Subject 就是要被处理的字符串。

//ReplaceOnce 类型和 ReplaceAll 类型很相似：都用到了 conditional types，而且条件还相同。不同的是条件判断通过后返回的类型不同。

//在上面的 conditional types 的条件中，我们对 Subject 字符串进行 pattern 匹配：检查字符串中是否包含 Search 字符串。如果包含，则还利用 infer 关键字将位于 Search 左边、右边的字符串提取出来用于返回。需要注意的是，尽管在我们的 pattern 中 Search 在中间，但这并不意味着 Search 一定要在中间才算匹配——放在开头或末尾也是可以的（放在末尾时，可能存在某些 edge cases 不能被匹配，这应该是 TypeScript 的问题），而这时候 infer L 或 infer R 推断出来的类型是一个空字符串字面量类型，即 '' 类型。

//如果字符串匹配我们的 pattern，则利用传入的 Replace 字符串代替原来的 Search 字符串，同时使用之前提取出来的类型 L 和类型 R 来组成新的字符串：${L}${Replace}${R}。

//到这里，我们已经完成一次替换了。对于 ReplaceOnce 类型，现在就可以将刚刚生成的新字符串类型返回；

//而对于 ReplaceAll 类型，则将这个新的字符串类型作为 Subject 参数，再次传入 ReplaceAll 类型中然后递归下去，直到所有字符串都被替换。


export default {}

type ReplaceOnce<Search extends string, Replace extends string, Subject extends string> =
    Subject extends `${infer L}${Search}${infer R}` ? `${L}${Replace}${R}` : Subject


type String2 = 'process'
type Replaced1 = ReplaceOnce<'s', 'x', String2>
type Replaced2 = ReplaceOnce<'ss', 'x', String2>