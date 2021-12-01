/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-01 14:40:48
 * @LastEditTime: 2021-12-01 14:48:24
 * @LastEditors: changqing
 * @Usage: 
 */

//获取字符串字面量中的第一个字符

type FirstChar<T>= T extends `${infer L}${infer R}`? L:never; 

type a = FirstChar<'BFE'> // 'B'
type b = FirstChar<'dev'> // 'd'
type c = FirstChar<''> // never