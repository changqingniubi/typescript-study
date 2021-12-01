//StringToTuple

export default {}

type StringToTuple<T,A extends any[]=[]>=T extends `${infer L}${infer R}`? StringToTuple<R,[...A,L]>:A;

type A = StringToTuple<'BFE.dev'> // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<''> // []