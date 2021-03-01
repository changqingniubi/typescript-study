interface Action<T> {
  payload?: T;
  type: string;
}

class EffectModule {
  count = 1;
  message = "hello!";

  delay(input: Promise<number>): Promise<Action<string>> {
      let action: Promise<Action<string>> =  input.then(i => ({
          payload: `hello ${i}!`,
          type: 'delay'
      }));
      return action;
  }

  setMessage(action: Action<Date>): Action<number> {
      let action2: Action<number> = {
          payload: action.payload!.getMilliseconds(),
          type: "set-message"
      };
      return action2;
  }
}
//把 EffectModule 中的方法名取出来
type aa = keyof EffectModule
type methodsPick<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
//定义转换前后的方法
type asyncMethod<T, U> = (input: Promise<T>) => Promise<Action<U>> // 转换前
type asyncMethodConnect<T, U> = (input: T) => Action<U> // 转换后
type syncMethod<T, U> = (action: Action<T>) => Action<U> // 转换前
type syncMethodConnect<T, U> = (action: T) => Action<U> // 转换后
//条件类型+推断类型
type EffectModuleMethodsConnect<T> = T extends asyncMethod<infer U, infer V>
  ? asyncMethodConnect<U, V>
  : T extends syncMethod<infer U, infer V>
  ? syncMethodConnect<U, V>
  : never
type EffectModuleMethods = methodsPick<EffectModule>
//映射类型
type Connect = (module: EffectModule) => {
  [M in EffectModuleMethods]: EffectModuleMethodsConnect<EffectModule[M]>
} 
type Connected = {
  delay(input: number): Action<string>;
  setMessage(action: Date): Action<number>;
};
// 修改 Connect 的类型，让 connected 的类型变成预期的类型
/**
 * 1. m 取出它的所有的方法或者说函数
 * 2. 按同步异步分成二组,分别进行转换
 * 3.再把它们合并成一个对象
 */
const connect: Connect = (m: EffectModule): Connected => ({
  delay: (input: number) => ({
      type: 'delay',
      payload: `hello 2`
  }),
  setMessage: (input: Date) => ({
      type: "set-message",
      payload: input.getMilliseconds()
  })
});

export const connected: Connected = connect(new EffectModule());