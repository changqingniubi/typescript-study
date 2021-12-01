//将字符串类型的元素转换为字符串字面量类型


export default {}

type  TupleToString<T extends string[],A extends string="">=T extends [infer L,...infer R]?(L extends string? TupleToString<R,`${A}${L}`>:never):A;

type A = TupleToString<['a', 'b', 'c']> // 'abc'
type B = TupleToString<[]>              // ''
type C = TupleToString<['a']>           // 'a'