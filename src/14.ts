
export {}
class Father {
  father: string;
}
class Child1 extends Father {
  child1: string;
}
class Child2 extends Father {
  child1: string;
}
interface Calculate{
  <T extends (string | number)>(a:T,b:T):T
}
//'number' is assignable to the constraint of type 'T', 
//but 'T' could be instantiated with a different subtype of constraint 'number'.
//不能说只能多少 只能适用于接口或对象属性上来说才是只多不少
//严格来说就是子类型

let sum: Calculate = function <T extends (string | number)>(a: T, b: T):(string | number) {
  if(typeof a=='string' && typeof b=='string'){
    return a+b
  }else if(typeof a=='number' && typeof b=='number'){
    return a+b
  }else{
    return ""
  }
};

let a= sum<string>("1","2");
//let b= sum<string>("1",2); // Argument of type 'number' is not assignable to parameter of type 'string'.
let c= sum<number>(1,2);
/**
 * string 是(string | number)的子类型
 * (string | number)是(string|number|boolean)的子类型
 */
//sum<(string|number|boolean)>(null, null);


