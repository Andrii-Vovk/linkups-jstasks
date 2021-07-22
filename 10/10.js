function sortIt(arr) {
    return arr.sort((a, b) => actualValue(a) - actualValue(b));
}

function actualValue(a) {
    a[0] === undefined ? a : a[0];
}

console.log(sortIt([[3], 4, [2], [5], 1, 6]));