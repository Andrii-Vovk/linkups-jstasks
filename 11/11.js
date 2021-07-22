console.log(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15"));
console.log(hasHiddenFee(["$1"], "$4"));

function hasHiddenFee(arr, price) {
    var total = arr.map(item => parseInt(item.substring(1))).reduce(function(a, b) { return a + b; }, 0);
    var suptotal = parseInt(price.substring(1));

    return suptotal > total;
}