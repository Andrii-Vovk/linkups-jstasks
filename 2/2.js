let arr = ["G", "F7", "C"];

console.log(jazzify(arr)); 

function jazzify(arr) {
    return arr.map(item => item.endsWith('7') ? item : item + '7')
}