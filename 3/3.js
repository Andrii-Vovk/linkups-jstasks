

console.log(sortDescending(12345));

function sortDescending(val) {
    return parseInt(val.toString().split('').sort((a,b) => b-a).join(''));
}