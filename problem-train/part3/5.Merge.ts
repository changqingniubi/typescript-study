//合并两个对象类型T以及K，如果属性重复，则以K中属性类型为准；

export default {}

type obj1 = {
    el: string,
    age: number
}

type obj2 = {
    el: HTMLElement,
    flag: boolean
}

type Merge<T,K>={[k in Exclude<keyof T,keyof K>]:T[k]}&K;

type obj3 = Merge<obj1, obj2>   // {el:HtmlElement,age:number,flag:boolean}

const a = {...{} as obj3}
console.log(a.el.scrollTop, a.age.toFixed(0), a.flag.valueOf())
//console.log(a.el.charAt(0))     // error