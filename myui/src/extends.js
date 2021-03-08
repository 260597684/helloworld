// 手撕new
/**
 * 1.创建空对象
 * 2.this指向新对象,指向构造函数的代码
 * 3.设置原型链, (新对象的__proto__ 指向构造函数的prototype这个对象)
 * 4.返回新对象,判断 if 传入的类型是一个对象 ? 返回新对象: 直接返回
 * 
*/
class Fa {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }
}
class Son extends Fa {
  constructor(name, age) {
    super(name, age)
    this.love = '1111';
  }
}
let son = new Son('zhangsan','22');
let fu = new Fa('lisi','45')
console.log(son);
console.log(fu);
console.log(son.__proto__ === Son.prototype);
console.log(Son.prototype.__proto__ ===Fa.prototype);
console.log(Fa.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);


function myNew (){
  var obj = new Object();
  var constructor = [].shift.call(arguments)
  var result = constructor.apply(obj,arguments)
  obj.__proto__ = constructor.prototype
  return typeof result === 'object' ? result : obj
}

