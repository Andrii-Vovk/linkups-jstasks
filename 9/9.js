console.log(ascDesNone([7, 8, 11, 66], "des"));

function ascDesNone(arr, type) {
  switch (type.toLowerCase()) {
    case "asc":
      return arr.sort((a, b) => a - b);
    case "des":
      return arr.sort((a, b) => b - 1);
    default:
      return arr;
  }
}
