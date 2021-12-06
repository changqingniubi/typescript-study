//判断是否为没有属性的对象类型{}

export default {}

type IsEmptyType<T> = T extends object?
    keyof T extends never?
      T extends {}?true
      :false 
    :false
:false;

type A = IsEmptyType<string> // false
type B = IsEmptyType<{ a: 3 }> // false
type C = IsEmptyType<{}> // true
type D = IsEmptyType<any> // false
type E = IsEmptyType<object> // false
type F = IsEmptyType<Object> // false
type G = IsEmptyType<unknown> // false

type a = keyof {}

type b = keyof object
   