var arr = ["G", "F7", "C"];

var arr2 = arr.map(item => jazzify(item));

console.log(arr2); 

function jazzify(val) {
    if(val.slice(-1) != '7') {
        return val + '7';
    }
    return val;
}