function sortIt(arr) {
    return arr.sort((a, b) => actualValue(a) - actualValue(b));
}

function actualValue(a) {
    if(a[0] === undefined) {
        return a;
    }
    return a[0];
}

console.log(sortIt([[3], 4, [2], [5], 1, 6]));