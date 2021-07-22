function createAlphabetSlice(a, b) {
    var str = "";
    for(var i = a.charCodeAt(0); i <= b.charCodeAt(0); i++) {
        str += String.fromCharCode(i);
    }
    return str;
}

function missingLetter(string) {
    var alph = createAlphabetSlice(string.substring(0, 1), string.slice(-1));
    var result = alph.split('').filter(item => !string.split('').includes(item))[0];
    return result === undefined ? "No Missing Letter" : result;
}

console.log(missingLetter("mnopqs"));
console.log(missingLetter("ghijklmno"));