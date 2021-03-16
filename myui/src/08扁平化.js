var arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10
];

function flatten(arr) {
  var flattenArr = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      flattenArr = flattenArr.concat(flatten(item))
    } else {
      if (flattenArr.indexOf(item) > -1) continue;
      flattenArr.push(item);
    }
  }
  return flattenArr.sort((a, b) => a - b);
}
// console.log(Array.from(new Set(arr.flat(100))).sort((a, b) => a - b));
console.log(flatten(arr));
function myflat (arr){
  var flattenArr1 = [];
  for (let i = 0;i<arr.length;i++) {
    const item = arr[i]
    if (Array.isArray(item)) {
      flattenArr1 = flattenArr1.concat(myflat(item))
    } else {
      if (flattenArr1.includes(item)) continue
      // if (flattenArr1.indexOf(item) > -1) continue;
      flattenArr1.push(item)
    }
  }
  return flattenArr1.sort((a,b) => a-b)
}
console.log(myflat(arr));


function jiaoji(a,b) {
  var arr = []
  for (let index = 0; index < a.length; index++) {
      for (let i = 0; i < b.length; i++) {
        if (a[index] === b[i]) {
          console.log(a[index]);
          arr.push(a[index])
          b.splice(i,1)
          i++
          continue
        }
      }    
  }
  return arr;
}
// console.log(jiaoji([1,2,2,1],[2,2]));

// nums = [2, 7, 11, 15], target = 9
function computed (arr, target) {
    for (let index = 0; index < arr.length; index++) {
      for (let i = index+1; i < (arr.length); i++) {
        if (arr[index] + arr[i] === target) {
          return [index, i]
        }
      }
    }
}
console.log(computed([2,7,11,15], 18));



// => 0 count
function fn2(num){
  var count = 0
  while (num != 0) {
    count++
    if (num % 2 === 0) {
      num = num / 2
    } else {
      num--
    }
  }
  console.log(count);
}
fn2(8)