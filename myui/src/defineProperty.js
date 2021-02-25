let car = {}
let value = 3000
Object.defineProperty(car, 'price', {
  enumerable: true,
  configurable: true,
  get () {
    console.log(value+ '获取了');
    return value
  },
  set (newval) {
    value = newval
    console.log(newval + '改变了');
  }
})

car.price
// 3000获取了
car.price = 400
// 400改变了