let array = [7,2,5,4,7,8,6,22,10]
function sort() {
     for (let j = 0; j < array.length; j++) {
        for (let k = j + 1; k < array.length; k++) {
            if (array[j] > array[k]) {
                let temp = array[j]
                array[j] = array[k]
                array[k] = temp
            }
        }
    }
    console.log(array);
}
// sort()


function sort2 () {
    let temp, min;
    for (let x = 0; x < array.length-1; x++) {
        min = x
        for (let y = x + 1; y < array.length; y++) {
            if (array[min] > array[y]) {
                min = y
            }
        }
        temp = array[x]
        array[x] = array[min]
        array[min] = temp
    }
    console.log(array);
}
sort2()