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

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

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

function validBraces(braces) {
  for (var i = 0; i < braces.length; i++) {
    if (braces[i].indexof() !== braces[length - 1 - i]) {
      return false
    }
    else return true
  }
}
// use first index last index

console.log(validBraces('(){}[]'))
console.log(validBraces('([{}])'))
console.log(validBraces('(}'))
console.log(validBraces('[(])'))
console.log(validBraces('[({})](]'))

// DNAStrand ("ATTGC") # return "TAACG"

// DNAStrand ("GTAT") # return "CATA"

Complementary DNA

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
 Answer
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
