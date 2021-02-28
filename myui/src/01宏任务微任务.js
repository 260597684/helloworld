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


