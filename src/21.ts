interface Bird {
  swing: number;//2
}
interface Dog {
  leg: number;//4
}
//自定义的类型保护了 TODO

/* function isType(type:Type1|Type2):type is Type1{

} */
//类型谓词 parameterName is Type 哪个参数是什么类型
function isBird(y:Bird|Dog):y is Bird{
  return (y as Bird).swing == 2;
}
function getAnimal(x: Bird | Dog) {
  if (isBird(x)) {
    return x.swing;
  }
  return x.leg;
}

let a1:Bird={
  swing:2
}
let a2:Dog={
  leg:4
}
console.log(getAnimal(a1)) //2
console.log(getAnimal(a2)) //4