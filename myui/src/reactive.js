// 自定义reactice 与 shadowreactive
function shallowReactive(obj) {
  return new Proxy(obj, reactiveHandler)
}

const reactiveHandler = {
  get(target, key) {
    if (key === '_is_reactive') return true
    console.log(key);
    return Reflect.get(target, key)
  },
  set(target, key, value) {
    const result = Reflect.set(target, key, value)
    console.log('数据已经更新...',key,value);
    return result
  },
  deleteProperty(target, key, value) {
    const result = Reflect.deleteProperty(target, key, value)
    console.log('数据删除');
    return result
  }
}
// 测试 浅
// let obj = shallowReactive({
//   a: {
//     b: 3
//   }
// })
// obj.a = {b:4}
// obj.a.b = 5
// console.log(obj);

function reactive (target) {
  if (target &&  typeof target === 'object') {
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        // 必须两个参数
        target[index] = reactive(item)
      })
    } else {
      for (let key in target) {
        target[key] = reactive(target[key])
      }
    }
    const proxy = new Proxy(target,reactiveHandler)
    return proxy
  }
  return target
}

const reac = reactive({
  a: 'abc',
  b: [{x: 1}],
  c: {x: [11]},
})
reac.a = 1
reac.b[0].x++
