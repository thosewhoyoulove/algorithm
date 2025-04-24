//new的过程
//1.创建一个新对象
//2.将这个对象的原型链接到构造函数的prototype
//3.将构造函数的this志向这个新对象，并执行代码
//4.如果构造函数返回的是一个对象，则返回这个对象，否则返回新创建的对象
function myNew(Constructor,...args){
  //1.创建一个新对象
  const obj = {};
  //2.将这个对象的原型链接到构造函数的prototype
  // obj.__proto__ = Constructor.prototype;
  Object.setPrototypeOf(obj,Constructor.prototype);
  //3.将构造函数的this志向这个新对象，并执行代码
  const res = Constructor.apply(obj,args);
  //4.如果构造函数返回的是一个对象，则返回这个对象，否则返回新创建的对象
  return res !== null && (typeof res === "object" || typeof res === "function") ? res : obj;
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = myNew(Person, 'Alice', 30);
console.log(p1);            // Person { name: 'Alice', age: 30 }
console.log(p1 instanceof Person); // true
