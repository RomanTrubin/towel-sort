
// You should implement your task here.

const { sort } = require("semver");

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return []
  }
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) { result.push((matrix[i]).reverse()) } else { result.push(matrix[i]) }
  }
  // console.log(result.flat(Infinity))
  return result.flat(Infinity);
}

// towelSort([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ])
