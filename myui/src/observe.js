// vue 源码
class Observer {
    constructor (value) {
      this.value = value
      // 给value新增一个__ob__属性，值为该value的Observer实例
      // 相当于为value打上标记，表示它已经被转化成响应式了，避免重复操作
      def(value,'__ob__',this)
      if (Array.isArray(value)) {
        // 当value为数组时的逻辑
        // ...
      } else {
        this.walk(value)
      }
    }
  
    walk (obj) {
      const keys = Object.keys(obj)
      for (let i = 0; i < keys.length; i++) {
        defineReactive(obj, keys[i])
      }
    }
  }
  /**
   * 使一个对象转化成可观测对象
   * @param { Object } obj 对象
   * @param { String } key 对象的key
   * @param { Any } val 对象的某个key的值
   */
  function defineReactive (obj,key,val) {
    // 如果只传了obj和key，那么val = obj[key]
    if (arguments.length === 2) {
      val = obj[key]
    }
    if(typeof val === 'object'){
        new Observer(val)
    }
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get(){
        console.log(`${key}属性被读取了`);
        return val;
      },
      set(newVal){
        if(val === newVal){
            return
        }
        console.log(`${key}属性被修改了`);
        val = newVal;
      }
    })
  }


  let car  = new Observer({
      branch: '111',
      price: 3000
  })
/*
总结:
vue2.x是怎么实现数据监测的呢?
core/obser/index.js   /dep.js  water.js
1.创建一个Observe构造方法,
2.给对象打一个__ob__属性,表明是可监测的,避免重复的操作
2.如果是对象的话,调用walk方法,其中是循环调用,为对象的每一个属性调用defineproperty方法,使每个参数获得可监测的功能

虚拟dom?
core/vdom/vnode.js    /patch.js
操作真实dom是很消耗资源的,
Vnode.js中对虚拟节点进行封装
在数据变化前后生成真实DOM对应的虚拟DOM节点，然后就可以对比新旧两份VNode，找出差异所在,

生命周期函数?
core/instance/index.js  /init.js

大致分为四个生命周期
1.初始化阶段：为Vue实例上初始化一些属性，事件以及响应式数据；
2.模板编译阶段：将模板编译成渲染函数；
3.挂载阶段：将实例挂载到指定的DOM上，即将模板渲染到真实DOM中；
4.销毁阶段：将实例自身从父组件中删除，并取消依赖追踪及事件监听器；

/init.js -> init -> initMixin
initMixin函数内部就只干了一件事，那就是给Vue类的原型上绑定_init方法

_init()=> 首先，把Vue实例赋值给变量vm，并且把用户传递的options选项与当前构造函数的options属性及其父级构造函数的options属性进行合并
（关于属性如何合并的问题下面会介绍），得到一个新的options选项赋值给$options属性，并将$options属性挂载到Vue实例上
之后调用 => {
  initLifecycle(vm)       // 初始化生命周期
  initEvents(vm)        // 初始化事件
  initRender(vm)         // 初始化渲染
  callHook(vm, 'beforeCreate')  // 调用生命周期钩子函数
  initInjections(vm)   //初始化injections
  initState(vm)    // 初始化props,methods,data,computed,watch
  initProvide(vm) // 初始化 provide
  callHook(vm, 'created')  // 调用生命周期钩子函数
}
之后调用 => {
  在所有的初始化工作都完成以后，最后，会判断用户是否传入了el选项，
  如果传入了则调用$mount函数进入模板编译与挂载阶段
  如果没有传入el选项，则不进入下一个生命周期阶段，需要用户手动执行vm.$mount方法才进入下一个生命周期阶段。
}

*/