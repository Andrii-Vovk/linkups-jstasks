console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));

function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

