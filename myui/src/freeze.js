let obj = {
    foo:1,
    bar:   {
        foo:1,
        bar:2
    }
}
// Object.freeze(obj)
// obj.bar.bar = 3
// 深度冻结
function myfreeze(object) {
    if (typeof object === 'object') {
        const keys = Object.keys(object)
        keys.forEach(el => {
            // if (typeof object[el]) {
            if (Object.prototype.toString.call(object[el]) === '[object Object]' ) {
                myfreeze(object[el])
            }
            Object.freeze(object[el])
        });
    }
}
myfreeze(obj)
obj.bar.bar = 3
console.log(obj);