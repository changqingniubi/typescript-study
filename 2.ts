import { name } from './src/8';
export {}
/**
 * 条件类型
 */
interface Fish{
    name1:string;
}
interface Water{
    name2:string;
}
interface Bird{
    name3:string;
}
interface Sky{
    name4:string;
}
//若 T 能够赋值给 Fish，那么类型是 Water,否则为 Sky
type Condition<T> = T extends Fish?Water:Sky;
//type Condition<T> = { t: T } extends { t: Fish} ? Water : Sky;
let con:Condition<Fish> = {name2:'水'};

//条件类型的分发

//(Fish extends Fish ? Water : Sky) | (Bird extends Fish ? Water : Sky)
// Water|Sky
let con1: Condition<Fish | Bird> = { name2:''};
let con2: Condition<Fish | Bird> = { name4: '' };



//只有类型系统中给出 充足的条件 之后,它才会根据条件推断出类型结果，如果判断条件不足，则会得到第三种结果，即 推迟 条件判断，等待充足条件。
interface Foo {
    propA: boolean;
    propB: boolean;
}

declare function f<T>(x: T): T extends Foo ? string : number;

function foo<U>(x: U) {
    // 因为 ”x“ 未知，因此判断条件不足，不能确定条件分支，推迟条件判断直到 ”x“ 明确，
  	// 推迟过程中，”a“ 的类型为分支条件类型组成的联合类型，
    // string | number
    let a = f(x);

    // 这么做是完全可以的
    let b: string | number = a;
}


// 找出T中不包含U的部分
type Diff<T,U> = T extends U?never:T;
type R = Diff<'a'|'b'|'c'|'d' , 'a'|'b'|'c'>;  
type R2 = 'd';

// 找出T中包含U的部分
type Filter<T,U> = T extends U?T:never;
type R3 = Filter<'a' | 'b' | 'c' | 'd', 'a' | 'b' | 'c'>;  
type R33 = Filter<string | number | boolean, number>;




//内置条件类型
//Exclude
type Exclude<T, U> = T extends U ? never : T;
type R4 = Exclude<'a' | 'b' | 'c' | 'd', 'a' | 'b' | 'c'>;  
type Extract<T, U> = T extends U ? T : never;
//Extract
type R5 = Extract<'a' | 'b' | 'c' | 'd', 'a' | 'b' | 'c'>;  //Pick
//NonNullable
type NonNullable<T> = T extends null | undefined ? never : T;
type R6 = NonNullable<'a' | null | undefined>;  


//ReturnType

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : T;

function getUser(a:string,b:number){
    return {name:'zhufeng',age:10};
}
let t = getUser('1',2);
type GetUserType = typeof getUser;
type ReturnUser = ReturnType<GetUserType>;
let u: ReturnUser = {
    name:'zf',
    age:10
}

/**
 * Obtain the parameters of a function type in a tuple
 */
type Parameters<T> = T extends ((...args: infer P) => infer R) ? P: any;
type X1 = {}
type ParamsType = Parameters<GetUserType>; //[a: string, b: number]

type T0 = Parameters<() => string>;  // []
type T11 = Parameters<(s: string) => void>;  // [s:string]
type T22 = Parameters<(<T>(arg: T) => T)>;  // [arg:unknown]


//InstanceType 

class Person8{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    getName(){console.log(this.name);}
}
//获取类的构造函数的参数类型
type ConstructorParameters<T extends new (...args: any) => any> = T extends new (
    ...args: infer P) => any ? P : never;

type constructorParameters = ConstructorParameters<typeof Person8>;
let params: constructorParameters = ['zhufeng']
type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

type Person8Instance = InstanceType<typeof Person8>;
let instance: Person8Instance={
    name:'zf',
    getName(){}
}


//infer应用案例
//tuple转union
type ElementOf<T> = T extends Array<infer E>?E:never;
type Ttuple = [string,number,boolean];
type TupleToUnion = ElementOf<Ttuple>;//string|number // 联合类型

// 参数=>返回值   参数:返回值

type First<T> = T extends {name:infer A} ?A:never;
type K11 = First<{name:string}>

//联合类型转成交叉类型
//string|number => string&number

type T1 = {name:string};
type T2 = {age:number};
type ToIntersection<T> = T extends { a: (x: infer U) => void, b: (x: infer U) => void }?U:never;
type T3 = ToIntersection<{ a: (x: T1) => void, b: (x: T2) => void}>;
//T1 & T2 交集 交叉类型
let t33:T3 = {name:'',age:10};

