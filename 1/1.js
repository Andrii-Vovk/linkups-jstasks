const arr = [true, false, true, true, false]

console.log(countTrue(arr));

function countTrue(arr) {
    return arr.filter(val => val === true).length;
}