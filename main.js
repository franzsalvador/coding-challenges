/* eslint-disable no-unused-vars */
// Given an array nums, write a function to move all 0's
// to the end of it while maintaining the relative order
// of the non-zero elements.

// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Input: [0, 0, 1]
// Output: [1, 0, 0]

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

const a = [0, 1, 0, 3, 12]
const b = [0, 0, 1]

const moveZeroes = function (nums) {
  nums = nums.reverse()
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.unshift(0)
    }
  }
  nums.reverse()
}

// moveZeroes(a)
// moveZeroes(b)

// Reverse a string

var reverseString = function (s) {
  let newString = ''
  for (let i = s.length - 1; i >= 0; i--) {
    newString += s[i]
  }
  return newString
}

var reverseString2 = function (s) {
  s = s.split('')
  return s.reverse().join('')
}

var reverseString3 = function (s) {
  return [...s].reverse().join('')
}

// console.log(reverseString('hello'))
// console.log(reverseString2('hello'))
// console.log(reverseString3('hello'))

// const string = 'string'
// console.log([...string])

// function check(a, x) {
//   console.log(a.includes(x))
// }

// check([66, 101], 66)

// You are going to be given a word. Your job is to return the middle character
// of the word. If the word's length is odd, return the middle character. If the
// word's length is even, return the middle 2 characters.

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
  if (s.length % 2 === 0) {
    const first = s.length / 2 - 1
    const second = s.length / 2
    return s.charAt(first) + s.charAt(second)
  }
  else {
    return s.charAt(s.length / 2)
  }
}
// console.log(getMiddle('testing'))

// Write a function that takes a string of braces, and determines if the order
// of the braces is valid. It should return true if the string is valid, and
// false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new
// characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses,
// brackets and curly braces: ()[]{}.

// function validBraces(braces) {
//   for (var i = 0; i < braces.length; i++) {
//     if (braces.indexof(braces[i]) !== braces[length - 1 - i]) {
//       return false
//     }
//     else return true
//   }
// }
// use first index last index

// console.log(validBraces('(){}[]'))
// console.log(validBraces('([{}])'))
// console.log(validBraces('(}'))
// console.log(validBraces('[(])'))
// console.log(validBraces('[({})](]'))

// DNAStrand ("ATTGC") # return "TAACG"

// DNAStrand ("GTAT") # return "CATA"

// Complementary DNA

function DNAStrand(dna) {
  let newString = ''
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'A') {
      newString += 'T'
    }
    if (dna[i] === 'G') {
      newString += 'C'
    }
    if (dna[i] === 'T') {
      newString += 'A'
    }
    if (dna[i] === 'C') {
      newString += 'G'
    }
  }
  return newString
}

// DNAStrand('AAAA')
// DNAStrand('ATTGC')
// DNAStrand('GTAT')

// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers) {
  let nums = numbers.split(' ').map(Number)
  let high = nums[0]
  let low = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > high) {
      high = nums[i]
    }
    if (nums[i] < low) {
      low = nums[i]
    }
  }
  return high + ' ' + low
}

// highAndLow('1 2 3 4 5') // return '5 1'
// highAndLow('1 2 -3 4 5') // return '5 -3'
// highAndLow('1 9 3 4 -5') // return '9 -5'

// Optimal Solution

// function highAndLow(numbers) {
//   numbers = numbers.split(' ')
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`
// }

// Multiples of 3 or 5

function solution(number) {
  let sum = 0
  let i = 0
  while (i < number) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
    i++
  }
  return sum
}

// solution(3, 3, 6, 7, 8, 45, 15, 56, 2)

var majorityElement = function (nums) {
  const sortArr = nums.sort()
  let maxCounter = 0
  let counter = 0
  let majorityEl = null
  for (let i = 0; i < sortArr.length; i++) {
    for (let j = 0; j < sortArr.length; j++) {
      if (sortArr[i] === sortArr[j]) {
        counter++
        if (counter > maxCounter) {
          majorityEl = sortArr[i]
          maxCounter = counter
        }
      }
      else if (sortArr[i] !== sortArr[j]) {
        counter = 0
      }

    }
  }
  return majorityEl
}

// console.log(majorityElement([3, 3, 4]))

// optimal solution

// var majorityElement = function (nums) {
//   const obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (!obj[nums[i]]) obj[nums[i]] = 1;
//     else obj[nums[i]] += 1;
//     if (obj[nums[i]] > nums.length / 2) return nums[i];
//   }
// }

// Single Number
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

var singleNumber = function (nums) {
  var numsSort = nums.sort()
  if (numsSort.length % 2 !== 0) {
    for (var i = numsSort.length - 1; i >= 0; i -= 2) {
      if (numsSort[i] !== numsSort[i - 1]) {
        return numsSort[i]
      }
    }
  }
  else {
    for (var o = 0; o < numsSort.length; o += 2) {
      if (numsSort[o] !== numsSort[o + 1]) {
        return numsSort[o]
      }
    }
  }
}

// singleNumber([4, 1, 2, 1, 2])
// singleNumber([4, 1, 2, 1, 2])

// Sort Array By Parity
// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.
// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

var sortArrayByParity = function (A) {
  var newArr = []
  for (var i = 0; i < A.length; i++) {
    if (A[i] % 2 !== 0) {
      newArr.push(A[i])
    }
    if (A[i] % 2 === 0) {
      newArr.unshift(A[i])
    }
  }
  return newArr
}

// sortArrayByParity([3, 1, 2, 4])

// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// find the lowest buy price
// find the highest sell price once the buy price is established.
// of lowest price in the index of prices array, return 0
// find the profit between each buy and sell day in the array.
// iterate through the array and subtract sell from buy day.

var maxProfit = function (prices) {
  let profit = 0
  if (prices.length === 0) {
    return 0
  }
  for (let i = 0; i < prices.length; i++) {
    for (let o = prices.length - 1; o >= i; o--) {
      if ((prices[o] - prices[i]) > profit) {
        profit = prices[o] - prices[i]
      }
    }
  }
  return profit
}

// console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// console.log(maxProfit([7, 6, 4, 3, 1]))
// console.log(maxProfit([2, 4, 1]))
// console.log(maxProfit([3, 2, 6, 5, 0, 3]))
// console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]))

// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// find the value and return the index
// find the last value that target is greater than and insert at index + 1 of value being checked.

var searchInsert = function (nums, target) {
  const newArr = [...nums, target]
  newArr.sort((a, b) => a - b)
  if (nums.includes(target)) {
    return (nums.indexOf(target))
  }
  return newArr.indexOf(target)
}

// console.log(searchInsert([1, 3, 5, 6], 5)) // Output: 2
// console.log(searchInsert([1, 3, 5, 6], 2)) // Output: 1
// console.log(searchInsert([1, 3, 5, 6], 7)) // Output: 4
// console.log(searchInsert([1, 3, 5, 6], 0)) // Output: 0
// console.log(searchInsert([1, 2, 3, 4, 5, 10], 2)) // Output 1
// console.log(searchInsert([3, 5, 7, 9, 10], 8)) // Output 3

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// iterate through Array. If array.length is > 2, names.name[0], names.name[1], names.name[2], & names.name[3]
// if === 2 names.name[0] & names.name[1]
// if === 1 names.name[0]

function list(names) {
  let list = ''
  if (names.length === 0) {
    return list
  }
  if (names.length === 1) {
    return names[0].name
  }
  for (let i = 0; i < names.length; i++) {
    if (i === names.length - 1) {
      list += ' & ' + names[i].name
    }
    else if (i === names.length - 2) {
      list += names[i].name
    }
    else {
      list += names[i].name + ', '
    }
  }
  return list
}

// Reverse Sequence
// console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
// // returns 'Bart, Lisa & Maggie'

// console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))
// // returns 'Bart & Lisa'

// console.log(list([ {name: 'Bart'} ]))
// // returns 'Bart'

// console.log(list([]))
// // returns ''

const reverseSeq = ranNum => {
  let reversedSeq = []
  for (let i = ranNum; i > -1; i--) {
    reversedSeq.push(i)
  }
  return reversedSeq
}

// console.log(reverseSeq(5))

// Printer Errors
// The colors used by the printer are recorded in a control string. For example
// a "good" control string would be aaabbbbhaijjjm meaning that the printer used
// three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad"
// control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

// You have to write a function printer_error which given a string will output
// the error rate of the printer as a string representing a rational whose numerator
// is the number of errors and the denominator the length of the control string.
// Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// sort string - letters after m are errors.
// correct = lastIndexOf m + 1
// errors = length - correct / length

function printerError(s) {
  let errors = 0
  if (s.length - 1 !== 'm') {
    errors = s.length - ((s.split('').sort().lastIndexOf('m')) + 1)
  }
  return errors + '/' + s.length
}
// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"
// console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'))

// Optimal Solution using Regxx
// function printerError(s) {
//   return s.match(/[^a-m]/g).length + "/" + s.length;
// }

// CyclicRotation

// An array A consisting of N integers is given. Rotation of the array means that
// each element is shifted right by one index, and the last element of the array is
// moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6]
// is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the
// first place).

// The goal is to rotate array A K times; that is, each element of A will be
// shifted to the right K times.

// Assume that the following declarations are given:

// struct Results {
//   int * A;
//   int N; // Length of the array
// };

// Write a function:

// struct Results solution(int A[], int N, int K);

// that, given an array A consisting of N integers and an integer K, returns the
// array A rotated K times.

// For example, given

//     A = [3, 8, 9, 7, 6]
//     K = 3
// the function should return [9, 7, 6, 3, 8]. Three rotations were made:

//     [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
//     [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
//     [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
// For another example, given

//     A = [0, 0, 0]
//     K = 1
// the function should return [0, 0, 0]

// Given

//     A = [1, 2, 3, 4]
//     K = 4
// the function should return [1, 2, 3, 4]

// Assume that:

// N and K are integers within the range [0..100];
// each element of array A is an integer within the range [−1,000..1,000].
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

function solutionAce(A, K) {
  let array = A
  for (let i = K - 1; i >= 0; i--) {
    array.unshift(array[array.length - 1])
    array.splice(array.length - 1, 1)
  }
  return array
}

// console.log(solutionAce([1, 2, 3, 4], 3))

// OddOccurancesInArray

function solutionOdd(A) {
  let answer
  A.forEach(element => {
    if (A.indexOf(element) === A.lastIndexOf(element)) {
      answer = element
    }
  })
  return answer
}
// console.log(solutionOdd([9, 3, 9, 3, 9, 7, 9]))

// Dominator
// An array A consisting of N integers is given. The dominator of array A is the value that occurs in more than half of the elements of A.

// For example, consider array A such that

//  A[0] = 3    A[1] = 4    A[2] =  3
//  A[3] = 2    A[4] = 3    A[5] = -1
//  A[6] = 3    A[7] = 3
// The dominator of A is 3 because it occurs in 5 out of 8 elements of A (namely in those with indices 0, 2, 4, 6 and 7) and 5 is more than a half of 8.

// Write a function

// int solution(int A[], int N);

// that, given an array A consisting of N integers, returns index of any element of array A in which the dominator of A occurs. The function should return −1 if array A does not have a dominator.

// For example, given array A such that

//  A[0] = 3    A[1] = 4    A[2] =  3
//  A[3] = 2    A[4] = 3    A[5] = -1
//  A[6] = 3    A[7] = 3
// the function may return 0, 2, 4, 6 or 7, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

function solutionDom(A) {
  let counter = 0
  let indexes = []
  for (let i = 0; i < A.length; i++) {
    counter = 0
    indexes = []
    for (let o = 0; o < A.length; o++) {
      if (A[i] === A[o]) {
        counter++
        indexes.push(o)
      }
      if (counter > A.length / 2) {
        return indexes.join(', ')
      }
    }
  }
  return -1
}

// console.log(solutionDom([3, 4, 3, 2, 3, -1, 3, 3]))

// A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

// Count the minimal number of jumps that the small frog must perform to reach its target.

// Write a function:

// function solution(X, Y, D);

// that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

// For example, given:

//   X = 10
//   Y = 85
//   D = 30
// the function should return 3, because the frog will be positioned as follows:

// after the first jump, at position 10 + 30 = 40
// after the second jump, at position 10 + 30 + 30 = 70
// after the third jump, at position 10 + 30 + 30 + 30 = 100
// Write an efficient algorithm for the following assumptions:

// X, Y and D are integers within the range [1..1,000,000,000];
// X ≤ Y.

function solutionFrgJmp(X, Y, D) {
  return Math.ceil((Y - X) / D)
}

// console.log(solutionFrgJmp(10, 85, 30))

// 4. Hibachi Numbers
// Hibachi numbers are the series (2, 2, 2, 8, 32, 512, ...). The series starts with three twos.
// Each number thereafter is the product of the previous three. Write a function to return the n-th Hibachi number,
// where n is passed in as a parameter.

function hibachi(n) {
  let answer = [2, 2, 2]
  if (n <= 3) {
    return 2
  }
  else {
    for (let i = 3; i < n; i++) {
      answer.push(answer[answer.length - 1] * answer[answer.length - 2] * answer[answer.length - 3])
    }
    return answer.pop()
  }
}

// console.log(hibachi(6))
// console.log(hibachi(4))
// console.log(hibachi(2))
// console.log(hibachi(5))
