// Feel free to look things up online!

// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// TODO - write a function which reverses the string
const reverse = (str) => {
  if (str.length === 0){
    return str
  }
  let reversed = ""
  for (let n = str.length-1; n >= 0; n--){
    reversed += str[n]
  }
  return reversed
}

// TODO - write a function which returns the factorial of a positive integer
const factorial = (num) => {
  let fact = 1
  if (num !== 0) {
    for (let n = num; n > 0; n--){
      fact *= n;
    }
  }
  return fact
}

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
  if (arr1.length !== arr2.length){
    return -1
  }
  sharedLength = arr1.length
  const zipped = []
  for (let n = 0; n < sharedLength; n++){
    zipped.push([arr1[n], arr2[n]])
  }
  return zipped
}

// TODO - Write a function which does the opposite of `zip()`
const unzip = (arr) => {
  const arr1 = []
  const arr2 = []
  const sharedLength = arr.length
  for (let n = 0; n < sharedLength; n++){
    arr1.push(arr[n][0])
    arr2.push(arr[n][1])
  }
  return [arr1, arr2]
}

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftRight("Hello", 3) === "lloHe"
const shiftRight = (str, num) => {
  length = str.length
  result = ""
  if (num === 0) {
    num = -1
  } 
  for (let n = 0; n < str.length; n++){
    result += str[(n+num+1)%length]
  }
  return result
}

// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7th, 2016. It is 11:37 in the morning."
const announceDate = () => {
  const today = new Date()
  const dd = today.getDate()
  const mm = today.getMonth()
  const yyyy = today.getFullYear()

  const months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ]

  const selectedMonthName = months[Number.parseInt(mm)]

  var time = today.getHours() + ":" + today.getMinutes()

  return `Today's date is ${selectedMonthName} ${dd}th, ${yyyy}. It is ${time} in the morning.`
}

module.exports = {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
}
