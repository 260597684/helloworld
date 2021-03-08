/**
 * 事件循环：
 * 同步任务和异步任务进入不同的执行环境，同步的进入主线程（主执行栈），异步的进入任务队列
 * 主线程执行完毕之后，去任务队列中读取对应的任务，推入 主线程
 * 上述说到不停重复的过程就是事件循环
 */

/**
 * 宏任务：整体代码，settimeout，setinterval， I/O, UIrendering
 * 微任务：promise，Object.observer,
 * 优先级：process.nexttick> promise.then>settimeout
 */

// 宏任务
setTimeout(()=> {
  console.log(2);
},0)
// 微任务，new为瞬发的
new Promise((resolve)=>{
  console.log(3);
  resolve()
  console.log(4);
}).then(()=>{
  console.log(5);
})
console.log(8);
// 3 4 8 5 2


