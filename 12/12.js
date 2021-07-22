function trace(matrix) {
  var sum = 0;

  for (var i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
  }

  return sum;
}

console.log(trace([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]));
