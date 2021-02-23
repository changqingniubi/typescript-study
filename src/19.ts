export {}
interface Empty<T>{
    data:T
}
let x:Empty<string>;//{data:string}
let y: Empty<number>;//{data:number}
x={
  data:'1'
}
y={
  data:1
}
x=y;

//实现原理如下,称判断具体的类型再判断兼容性
interface NotEmptyString{
  data:string
}

interface NotEmptyNumber{
  data:number
}
let xx2!:NotEmptyString;
let yy2!:NotEmptyNumber;
xx2 = yy2;




//数字和枚举 是兼容的
enum Colors{Red,Yellow}
console.log(Colors.Red) // 0
console.log(Colors[Colors.Red]) // Red
let c:Colors;
c = Colors.Red;
c=1;
let n:number;
n=1;
n= Colors.Red;


type Callback = (a:string|number)=>string|number;
function exec(callback:Callback){
  callback('');
}
type ChildToChild = (a: string) => string;
let childToChild: ChildToChild;
//exec(childToChild);//n
type ChildToParent = (a: string) => string|number|boolean;
let childToParent: ChildToParent;
//exec(childToParent);//n
type ParentToParent = (a: string|number|boolean) => string|number|boolean;
let parentToParent: ParentToParent;
//exec(parentToParent);//n
type ParentToChild = (a: string|number|boolean) => string;
let parentToChild: ParentToChild;
exec(parentToChild);//y