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

moveZeroes(a)
moveZeroes(b)

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

console.log(reverseString('hello'))
console.log(reverseString2('hello'))
console.log(reverseString3('hello'))

const string = 'string'
console.log([...string])

function check(a, x) {
  console.log(a.includes(x))
}

check([66, 101], 66)

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
console.log(getMiddle('testing'))

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
  console.log(newString)
}

DNAStrand('AAAA')
DNAStrand('ATTGC')
DNAStrand('GTAT')

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

highAndLow('1 2 3 4 5') // return '5 1'
highAndLow('1 2 -3 4 5') // return '5 -3'
highAndLow('1 9 3 4 -5') // return '9 -5'

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

solution(3, 3, 6, 7, 8, 45, 15, 56, 2)

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

console.log(majorityElement([3, 3, 4]))

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

singleNumber([4, 1, 2, 1, 2])
singleNumber([4, 1, 2, 1, 2])

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

sortArrayByParity([3, 1, 2, 4])

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

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([2, 4, 1]))
console.log(maxProfit([3, 2, 6, 5, 0, 3]))
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]))

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

console.log(searchInsert([1, 3, 5, 6], 5)) // Output: 2
console.log(searchInsert([1, 3, 5, 6], 2)) // Output: 1
console.log(searchInsert([1, 3, 5, 6], 7)) // Output: 4
console.log(searchInsert([1, 3, 5, 6], 0)) // Output: 0
console.log(searchInsert([1, 2, 3, 4, 5, 10], 2)) // Output 1
console.log(searchInsert([3, 5, 7, 9, 10], 8)) // Output 3
