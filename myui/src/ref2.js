/*
自定义shallowRef
*/
function shallowRef(target) {
  const result = {
    _value: target, // 用来保存数据的内部属性
    _is_ref: true, // 用来标识是ref对象
    get value () {
      return this._value
    },
    set value (val) {
      this._value = val
      console.log('set value 数据已更新, 去更新界面')
    }
  }
  return result
}

/* 
自定义ref
*/
function ref(target) {
  if (target && typeof target==='object') {
    target = reactive(target)
  }

  const result = {
    _value: target, // 用来保存数据的内部属性
    _is_ref: true, // 用来标识是ref对象
    get value () {
      return this._value
    },
    set value (val) {
      this._value = val
      console.log('set value 数据已更新, 去更新界面')
    }
  }

  return result
}

/* 测试自定义shallowRef */
const ref3 = shallowRef({
  a: 'abc',
})
ref3.value = 'xxx'
ref3.value.a = 'yyy'
console.log(ref3);

function reactive (target) {
  if (target &&  typeof target === 'object') {
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        // 必须两个参数
        target[index] = reactive(item)
      })
    } else {
      // Object.keys(target).forEach(key => {
      //   target[key] = reactive(target[key])
      // })
      for (let key in target) {
        target[key] = reactive(target[key])
      }
    }
    const proxy = new Proxy(target,reacticeHandler)
    return proxy
  }
  return target
}


const reacticeHandler = {
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
/* 测试自定义ref */
const ref1 = ref(0)
const ref2 = ref({
  a: 'abc',
  b: [{x: 1}],
  c: {x: [11]},
})
ref1.value++
ref2.value.b[0].x++
console.log(ref1, ref2)