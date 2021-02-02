// function Person () {
//   console.log(this)
//   this.name = "name";
//   // return {age:18}
//   return "age"
// };
// var p = new Person();
// // var p = Person();
// console.log(p);
// console.log(p.name)
// console.log(this)
// // console.log(p.name)

// let a ={
//   name:"jeck",
//   getName:function(msg){
//     return msg+this.name;
//   }
// }
// let b = {
//   name:"llily"
// }
// console.log(a.getName("hello"))
// console.log(a.getName.call(b,"hi"))
// console.log(a.getName.apply(b,['he']))
// let name = a.getName.bind(b,"收货")
// console.log(name())
// var arrayLike = {
//   0:'java',
//   1:"script",
//   length:2
// }
// Array.prototype.push.call(arrayLike,'kack','liky')
// console.log(typeof arrayLike)
// console.log(arrayLike)

// let arr = [13, 6, 10, 11, 16];
// const max = Math.max.apply(Math,arr)
// const min = Math.min.apply(Math,arr)
// console.log(max)
// console.log(min)

// function Person (){
//   this.name = "person";
//   this.play=[1,2,3];
// }
// Person.prototype.getName = function(){
//   return this.name;
// }
// function Child(){
//   Person.call(this);
//   this.type = "child"
// }
// Child.prototype = new Person();
// Child.prototype.constructor = Child;
// let v3 =new Child()
// console.log(v3.getName())

// ==========   

// Function.prototype.call = function (context, ...args) {
//   var context = context || window;
//   context.fn = this;
//   var result = eval('context.fn(...args)');
//   // delete context.fn
//   return result;
// }

// let obj = {
//   name:"obj",
//   add: function(x,y) {
//     return x+y
//   }
// }



// let theThis = {}
// console.log({}.call(theThis,1,2))
// console.log(theThis)
// console.log([1,2,3].toString())
// console.log(this)
// var a =1;
// function fun1(){
//   var a= 2
//   console.log(a)
//   function fun2 () {
//     var a =3
//     console.log(a)
//   }
//   return fun2
// }
// // fun1()()
// for (var index = 0; index < 6; index++) {
//  (function(index){
//   setTimeout(() => {
//     console.log(index)
//   })
//  })(index)
  
// }
// a= new Array("a","afsa","asfsa")
// console.log(a)
// var obj = {0: 'a', 1: 'b', 2:'c', length: 3};
// a =Array.from(obj,function(value,index){
//   console.log(value,index,this,arguments.length)
//   return value.repeat(5)
// },obj)
// console.log(a)
// a= [11,21,1,2,3,4,54]
// b= a.sort((x,y) => {
//   return x-y
// })
// console.log(a,b)
// function foo(name, age, sex) {
//   console.log(arguments.callee);
// }
// foo('jack', '18', 'male');
var arrayLike = { 
  0: 'java',
  1: 'script',
  length: 2
}
Array.prototype.push.call(arrayLike)
console.log(arrayLike)
