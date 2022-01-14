/**
  Implement your own version or Array.forEach()
  The function should take as input:
    an array: arr 
    a function: f
  The function call f on each element sequentially
  Example:
    myForEach([1, 2, 3], v => console.log(v))
    ->
      1
      2
      3
 */

const myForEach = (arr, f) => {
  const l = arr.length
  for (let n = 0; n < l; n++){
    f(arr[n])
  }
}

module.exports = myForEach
