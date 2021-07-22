console.log(ascDesNone([7, 8, 11, 66], "Des"));

function ascDesNone(arr, type) {
    if(type.toLowerCase() === "asc") {
        return arr.sort((a, b) => a - b)
    }
    else if(type.toLowerCase() === "des") {
        return arr.sort((a, b) => b - a)
    }
    else if(type.toLowerCase() === "none") {
        return arr;
    }
}