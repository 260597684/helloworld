// (function test () {
//   console.log(123);
// })()
// ((i)=> {
//   console.log(this);
//   console.log(1213);
//   console.log(i);
// })(10)
// function f1 () {
//   console.log(this);
// }
// f1()

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
// const auto = new Car('Honda', 'Accord', 1998);
// console.log(Car.prototype);

var a = {
  value: 0,
  valueOf() {
    return ++this.value;
  }
};
if (a == 1 && a == 2 && a == 3) {
  console.log(1);
}

let obj = {
  1: 111,
  2: 222,
  12:999
}

function convert(obj) {
  return Array.from({
    length: 12
  }).map((item, index) => obj[index+1] ||
    null);
}

// console.log(convert(obj));

function fn1 () {
  console.log(arguments);
}
fn1('11')
var fn2 = (rest) => {
  console.log(rest);
}
fn2(222)