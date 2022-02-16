/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/


function sumToN(n) {
    // return null if n < 0
  if (n < 0) {
    return null
  } else {
  // for (let i = 0; i <= n; i++) {
  //   let el = n[i]
  //   sum += el
  // }
  // take in a number and return sum of all numbers from 0 to n
  return n + sumToN(n - 1)
  }

}

// console.log(sumToN(5)) // returns 15
// console.log(sumToN(1))  // returns 1
// // sumToN(9)  // returns 45
// sumToN(-8)  // returns null

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
