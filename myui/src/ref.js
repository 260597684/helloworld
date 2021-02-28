// 手写ref
// function shallowRef (target) {
//   const  result = {
//     _value = target,
//     _is_ref = true,
//     get value () {
//       console.log('get--',value);
//       return this._value
//     },
//     set value () {
//       this._value = value
//       console.log('set--',value);
//     }
//   }
// }
function shallowRef(target) {
  const result = {
    _value: target, // 用来保存数据的内部属性
    _is_ref: true, // 用来标识是ref对象
    get value () {
      console.log('get');
      return this._value
    },
    set value (val) {
      console.log('set value 数据已更新, 去更新界面')
      this._value = val
    }
  }

  return result
}
const sref = shallowRef({
  a:1,
})
sref.value = 'xxx'
sref.value.a = 2
sref.value.b.b = 2
console.log(sref);