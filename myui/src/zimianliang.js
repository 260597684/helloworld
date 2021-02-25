let obj = {}
function fn(obj1) {
  obj.name = 111
  obj = {
    name: 222
  }
}
console.log(obj);

// 函数里面的对象字面量执行完就销毁

let keylist = [1,2,3]
const keys = keylist = []
console.log(keys);