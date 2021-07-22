
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]));

function findLargestNums(arr) {
    return arr.map(item => Math.max(...item));
}