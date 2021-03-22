// const promise1 = new Promise((resolve, reject) => {
//     // resolve('success')
//     setTimeout(() => {
//         resolve('success')
//     }, 1000)
//   })
//   const promise2 = promise1.then(() => {
//     throw new Error('error!!!')
//   })
  
//   console.log('1--promise1', promise1)
//   console.log('2--promise2', promise2)
  
//   setTimeout(() => {
//     console.log('3--promise1', promise1)
//     console.log('4--promise2', promise2)
//   }, 2000)



// 1  2
// Promise.resolve(1)
//   .then((res) => {
//     console.log(res)
//     return 2
//   })
//   .catch((err) => {
//     return 3
//   })
//   .then((res) => {
//     console.log(res)
//   })


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('once')
      resolve('success')
    }, 1000)
  })
  
  const start = Date.now()
  promise.then((res) => {
      console.log(res, Date.now() - start)
    })
    promise.then((res) => {
    console.log(res, Date.now() - start)
  })