/**
  Implement your own version or Array.map()
  The function should take as input:
    an array: arr
    a function: f
  The function should output a new list that is arr, but with the function applied to each element
  Try recursion rather than a for loop!
  Example:
    myMap([1, 2, 3], v => v * 2)
    -> [2, 4, 6]
 */

const myMap = (arr, f) => {
  const [a, ...b] = arr
  const result = [f(a)]
  if (b.length > 0){
    result.push.apply(result, myMap(b, f))
  }
  return result
}

module.exports = myMap
