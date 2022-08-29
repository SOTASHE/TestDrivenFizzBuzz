//Challenge 1 - REVERSE A STRING
//Return a string in reverse
// ex. reverseString('hello')=== 'olleh'

//solution:1
//create  a function that takes a string argument
//use the split method to convert the string to array format of characters
// use the reverse method to reverse each element/ character in the array of characters
// Use the join method to convert an array into a string
const reverseString = (str) => {
  //split the string into array
  str = str.split("");
  
  //use the reverse method to an array
  str = str.reverse();

  //use the join method to convert array into a string
  str = str.join("");
  console.log(str);
}

// reverseString('hello');


//Solution: 2
//without using the reverse built in method
//create the function to take in a string
//convert string into array using split method
//create use empty array
//use for loop to loop backwards
//push each element of array into a new array
//use join method to convert array into a string

const reverseString1 = (str1) => {
  //convert string into array using split method
  str1 = str1.split('');
  //create use empty array
  let strArray = [];
  
  //use for loop to loop backwards
  for (let i = str1.length - 1; i >= 0; i--) {
    //push each element of array into a new array
    strArray.push(str1[i]);
    // console.log(strArray);
  }
  console.log(  strArray.join(''));

 
  
}

// reverseString1('hello');



//Solution :3
//without using any built methods - Decreementing for loop
//create an empty string
//loop backwards through original string and append the characters of the original string to the new empty string

const reverseString2 = (str2) => {

  //create a new string empty string
  let newString = ''

  //loop backwards through original string and append the characters of the original string
  for (let i = str2.length - 1; i >= 0; i--) {
    //append the characters of the original string
    newString = newString + str2[i];
    // newString= o - first iteration
    //newString= ol- second iteration
    //newString= olle- 3rd iteration
    //newString= olleh- 4th iteration
  }
  console.log(newString)
}
//reverseString2('hello')

//using incrementing forloop




const reverseString3 = (str3) => {
  let newString = "";
  //for (let i = 0;  i < str3.length; i++) {
  //append the characters of the original string
  // newString = str3[i] + newString;
  // newString= "h" + " " = h   - first iteration
  //newString= "o" +"h" = eh - second iteration
  //newString= "l"+"eh" = leh - 3rd iteration
  //newString= 'l' +'leh' = lleh- 4th iteration
  //newString= 'o' +'lleh' = lleh- 5th iteration
  // }
  // console.log(newString);

  //using modern for loop (short hand version for old for loop)
  // for (let char of str3) {
  //   newString= char +newString
  // }

  //forEach
  // str3.split('').forEach((char) => {
  //   newString = char + newString;
  // })

  //map method
  // str3.split('').map(char=> newString = char + newString)

  // console.log(newString);

  //using reduce method
  //takes in two paramethers , arrow function and the string to bignin with
  return str3.split('').reduce((revString, char) => revString = char + revString, '')

}
// console.log(reverseString3("hello"));



//CHALLENGE 2: VALIDATE A PALINDROME
// words that looks the same even when reversed
// racecar == racecar even when spelled backwards
// for instance racecar shouild return true
//hello should return false because it's elloh when spelled backwards

//solution:1

//reverse a string then compare it to there original
// if the same then that is a palindrome
 //all we have to do is to reverse the string and compare it to the original string

const palindrome = (str) => {
  const revStr = str.split('').reverse().join('');
  
  // if (str === revStr) return true
  // else return false
  //shor hand
  return str===revStr
}
// console.log(palindrome('madam'));






// CHALLENGE:3 REVERSE AN INTEGER


//Solution
//convert an integer to a string
//then reverse it
//convert back to an integer

const reverseInterger = function (num) {
  //convert an integer to a string, to array,then reverse array
  //convert array back to an string
  stringResult = String(num).split("").reverse().join("");

  //convert reversed string back to an integer
  // return stringResult = Number(stringResult);
  //if you want to also include - number use parseInt instead because math.sign does not work with Number()
  return (stringResult = parseInt(stringResult)* Math.sign(num));

}
// console.log(reverseInterger(-12345))
// console.log( typeof(stringResult))





// CHALLENGE 4: CAPITALIZE LETTERS
//Return a string with the first letter capitalized
//E.g : i love js === I Love Js

//solution

const capitalizeFirstLetter = (words) => {
  //first convert to lowercase - this is to make sure that everything is first converted into lower case
  //convert the word to  an array strings using split (' ')
  //put space in ' ' because we are joining the words not characters
    //words = words.toLowerCase().split(" ");

  // loop through the words array using for loop
    // for (let i = 0; i < words.length; i++) {
    //set each element or word to the first letter using substring method(set it from 0 to 1 to get first letter)
    //then convert to upper case
    // add the rest of the words by seting substring method to stact at one which is the second value character
       //words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1);
    //word[i].substring(0,1).toUpperCase() - takes the first letter of each index and convert to upercase
    // words[i].substring(1); - the rest of the words by seting substring method to stact at one which is the second value character for each index
  //}
  //return the string using join
  // put space in "  " becasue we are joining words not charracters
     //return words.join(" ");
  
  /////////////////////////////////////////

//solution2 - using map and forEach functions
  
  //map
  // return words.toLowerCase().split(" ").map((word) => { 
  //   return word[0].toUpperCase() + word.substring(1); 
  // }) .join(" ");
  
  
  //forEach
  
  return words = words.toLowerCase().split(" ").forEach(word => {
    words = word[0].toUpperCase() + word.substring(1);  
    console.log(  words);
    
  })
//console.log("words: " + words);

  
  
}

// capitalizeFirstLetter("i love JavaScript")


//CHALLENGE 5 : Return the character that is most common in a string
//ex. maxCharacter('javascript)=='a'

//solution


//split the string to array of characters and use forEach function


const maxCharacter = (str) => {
  //create an empty object to hold characters as key value pairs
  const charMap = {};

  //that number of characters (ex: 2)
  let  maxNum = 0

  // the ectually number of characters that has the most accurance characters
  let maxChar = ''
  //(ex: a)

  str.split('').forEach(char => {
    //check if character is is found in  characterMAp or object
    if (charMap[char]) {
      //if found incrementb by 1
      // that means it happens more than once
      charMap[char]++;
    } else {
      //if not found set character = 1
      // happens only once
      charMap[char] = 1;
    }
  })
  // console.log(charMap);
  //use for in loop to loop through an object
  // for in loop is uded to loop through an object rather than an array

  for (let char in charMap) {
    //using node js debugger
    // node inspect index.js 
    //c  -  continue
    //repl = look at variables
    // debugger;
    
    if (charMap[char] > maxNum) {
      maxNum = charMap[char]
      maxChar = char
    }
  
  }
  return maxChar
}
// console.log(maxCharacter('javascript'));




//CHALLENGE 6: FIZZBUZZ

// Write a program that prints all the numbers from 1 to 100.
//for multiples of 3, instead of number, print 'fizz'
//for multiples of 5 print 'Buzz'. For numbers which are multiples of
//both 3 and 5, print 'FizzBuzz'.


//solution
//use an old for loop to loop through the numbers from 1 to 100
//if number divisible by both numbers print 'fizzBuzz
//divisible by 3, print 'Fizz'
//else if number is divisible by 5 print 'Buzz'


const fizzBuzz = (number) => {
         
      if (number% 3 === 0 && number % 5 === 0) {
        return "FizzBuzz"
      }
      else if (number % 3 == 0) {
        return'Fizz'
    
      }
      else if (number % 5 == 0) {
        return 'Buzz'
      }
      else {
        return number
      }
    
    
}

console.log(fizzBuzz(5))
module.exports = fizzBuzz;






//CHALLEGE 7: . Longest Palindromic Substring

//Given a string s, return the longest palindromic substring in s.
// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"


// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.



// CHALLEGE 7: String ends with?
//Complete the solution so that it returns true
//if the first argument(string)
//passed in ends with the 2nd argument(also a string).
//solution('abc', 'bc')
// returns true
//solution('abc', 'd')
// returns false



//CHALLENGE 8 -Find the odd int
// Given an array of integers,
//   find the one that appears an odd number of times.

// There will always be only one
// integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).



//CHALLENGE: 9 Generate Parentheses
//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

//  Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8



//CHALLENGE: 10  Longest Valid Parentheses
//Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed)
//parentheses substring.

// Example 1:
// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Example 2:

// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
// Example 3:

// Input: s = ""
// Output: 0
 

// Constraints:

// 0 <= s.length <= 3 * 104
// s[i] is '(', or ')'



//CHALLENGE: 11 Jump Game II

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000





//CHALLENGE: 11  Maximum Subarray
// Medium

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
 

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.



//CHALLENGE: 12 Jump Game
// Medium

// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.




// Constraints: 1 <= nums.length <= 104;
// 0 <= nums[i] <= 105;




//CHALLENGE: 12

// Unique Paths
// Medium

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

// Example 1:


// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down
 

// Constraints:

// 1 <= m, n <= 100






//CHALLENGE: 13 Climbing Stairs
// Easy

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45



//CHALLENGE:14  Pascal's Triangle
// Easy

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30




//CHALLENGE: 15 Best Time to Buy and Sell Stock
// Easy

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104



//CHALLENGE: 16  Best Time to Buy and Sell Stock II
// Medium

// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
 

// Constraints:

// 1 <= prices.length <= 3 * 104
// 0 <= prices[i] <= 104



//CHALLENGE: 16  Best Time to Buy and Sell Stock III
// Hard

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete at most two transactions.

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

// Example 1:

// Input: prices = [3,3,5,0,0,3,1,4]
// Output: 6
// Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
// Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 105






//CHALLENGE: 17
//  Palindrome Partitioning
// Medium


// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// A palindrome string is a string that reads the same backward as forward.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]
 

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.




//CHALLENGE: 18 Palindrome Partitioning II
// Hard

// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return the minimum cuts needed for a palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: 1
// Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
// Example 2:

// Input: s = "a"
// Output: 0
// Example 3:

// Input: s = "ab"
// Output: 1
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase English letters only.


//CHALLENGE: 19

// Word Break
// Medium

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false
 

// Constraints:

// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.



// CHALLENGE: 19 Word Break II
// Hard

// Share
// Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
// Output: ["cats and dog","cat sand dog"]
// Example 2:

// Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
// Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
// Explanation: Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: []
 

// Constraints:

// 1 <= s.length <= 20
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 10
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.







//CHALLENGE: 20

// Maximum Product Subarray
// Medium

// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


//CHALLENGE: 21 House Robber
// Medium

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400


//CHALLENGE : 22 House Robber II
// Medium

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 3:

// Input: nums = [1,2,3]
// Output: 3
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000



//CHALLENGE : 23  Number of Digit One
// Hard

// Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

 

// Example 1:

// Input: n = 13
// Output: 6
// Example 2:

// Input: n = 0
// Output: 0
 

// Constraints:

// 0 <= n <= 109



//CHALLENGE : 24 Ugly Number II
// Medium

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return the nth ugly number.

 

// Example 1:

// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
// Example 2:

// Input: n = 1
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
 

// Constraints:

// 1 <= n <= 1690






//CHALLENGE: 25  Perfect Squares
// Medium

// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

 

// Example 1:

// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.
 

// Constraints:

// 1 <= n <= 104


//CHALLENGE: 26 Longest Increasing Subsequence
// Medium

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

 

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104
 
//Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?




//CHALLENGE : 27


// Best Time to Buy and Sell Stock with Cooldown
// Medium

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

// Example 1:

// Input: prices = [1,2,3,0,2]
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]
// Example 2:

// Input: prices = [1]
// Output: 0
 

// Constraints:

// 1 <= prices.length <= 5000
// 0 <= prices[i] <= 1000


//CHALLENGE: 28 Burst Balloons
// Hard

// You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.

// If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.

// Return the maximum coins you can collect by bursting the balloons wisely.

 

// Example 1:

// Input: nums = [3,1,5,8]
// Output: 167
// Explanation:
// nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
// coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
// Example 2:

// Input: nums = [1,5]
// Output: 10
 

// Constraints:

// n == nums.length
// 1 <= n <= 300
// 0 <= nums[i] <= 100


//CHALLENGE: 29 Super Ugly Number
// Medium

// A super ugly number is a positive integer whose prime factors are in the array primes.

// Given an integer n and an array of integers primes, return the nth super ugly number.

// The nth super ugly number is guaranteed to fit in a 32-bit signed integer.

 

// Example 1:

// Input: n = 12, primes = [2,7,13,19]
// Output: 32
// Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 super ugly numbers given primes = [2,7,13,19].
// Example 2:

// Input: n = 1, primes = [2,3,5]
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are in the array primes = [2,3,5].
 

// Constraints:

// 1 <= n <= 105
// 1 <= primes.length <= 100
// 2 <= primes[i] <= 1000
// primes[i] is guaranteed to be a prime number.
// All the values of primes are unique and sorted in ascending order.



//CHALLENGE: 30 Coin Change
// Medium

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
 

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104




//CHALLENGE: 31 Counting Bits
// Easy

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
 

// Constraints:

// 0 <= n <= 105
 

// Follow up:

// It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
// Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?



//CHALLENGE : 32   Integer Break
// Medium

// Share
// Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

// Return the maximum product you can get.

 

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.
// Example 2:

// Input: n = 10
// Output: 36
// Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
 

// Constraints:

// 2 <= n <= 58


//CHALLENGE: 33

// Count Numbers with Unique Digits
// Medium

// Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10n.

 

// Example 1:

// Input: n = 2
// Output: 91
// Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, excluding 11,22,33,44,55,66,77,88,99
// Example 2:

// Input: n = 0
// Output: 1
 

// Constraints:

// 0 <= n <= 8




//CHALLENGE: 34 Largest Divisible Subset
// Medium

// Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

// answer[i] % answer[j] == 0, or
// answer[j] % answer[i] == 0
// If there are multiple solutions, return any of them.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,2]
// Explanation: [1,3] is also accepted.
// Example 2:

// Input: nums = [1,2,4,8]
// Output: [1,2,4,8]
 

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 2 * 109
// All the integers in nums are unique.


//Challenge: 35

//  Guess Number Higher or Lower II
// Medium

// We are playing the Guessing Game. The game will work as follows:

// I pick a number between 1 and n.
// You guess a number.
// If you guess the right number, you win the game.
// If you guess the wrong number, then I will tell you whether the number I picked is higher or lower, and you will continue guessing.
// Every time you guess a wrong number x, you will pay x dollars. If you run out of money, you lose the game.
// Given a particular n, return the minimum amount of money you need to guarantee a win regardless of what number I pick.

 

// Example 1:


// Input: n = 10
// Output: 16
// Explanation: The winning strategy is as follows:
// - The range is [1,10]. Guess 7.
//     - If this is my number, your total is $0. Otherwise, you pay $7.
//     - If my number is higher, the range is [8,10]. Guess 9.
//         - If this is my number, your total is $7. Otherwise, you pay $9.
//         - If my number is higher, it must be 10. Guess 10. Your total is $7 + $9 = $16.
//         - If my number is lower, it must be 8. Guess 8. Your total is $7 + $9 = $16.
//     - If my number is lower, the range is [1,6]. Guess 3.
//         - If this is my number, your total is $7. Otherwise, you pay $3.
//         - If my number is higher, the range is [4,6]. Guess 5.
//             - If this is my number, your total is $7 + $3 = $10. Otherwise, you pay $5.
//             - If my number is higher, it must be 6. Guess 6. Your total is $7 + $3 + $5 = $15.
//             - If my number is lower, it must be 4. Guess 4. Your total is $7 + $3 + $5 = $15.
//         - If my number is lower, the range is [1,2]. Guess 1.
//             - If this is my number, your total is $7 + $3 = $10. Otherwise, you pay $1.
//             - If my number is higher, it must be 2. Guess 2. Your total is $7 + $3 + $1 = $11.
// The worst case in all these scenarios is that you pay $16. Hence, you only need $16 to guarantee a win.
// Example 2:

// Input: n = 1
// Output: 0
// Explanation: There is only one possible number, so you can guess 1 and not have to pay anything.
// Example 3:

// Input: n = 2
// Output: 1
// Explanation: There are two possible numbers, 1 and 2.
// - Guess 1.
//     - If this is my number, your total is $0. Otherwise, you pay $1.
//     - If my number is higher, it must be 2. Guess 2. Your total is $1.
// The worst case is that you pay $1.
 

// Constraints:

// 1 <= n <= 200




//CHALLENGE: 36

//  Wiggle Subsequence
// Medium

// A wiggle sequence is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences.

// For example, [1, 7, 4, 9, 2, 5] is a wiggle sequence because the differences (6, -3, 5, -7, 3) alternate between positive and negative.
// In contrast, [1, 4, 7, 2, 5] and [1, 7, 4, 5, 5] are not wiggle sequences. The first is not because its first two differences are positive, and the second is not because its last difference is zero.
// A subsequence is obtained by deleting some elements (possibly zero) from the original sequence, leaving the remaining elements in their original order.

// Given an integer array nums, return the length of the longest wiggle subsequence of nums.

 

// Example 1:

// Input: nums = [1,7,4,9,2,5]
// Output: 6
// Explanation: The entire sequence is a wiggle sequence with differences (6, -3, 5, -7, 3).
// Example 2:

// Input: nums = [1,17,5,10,13,15,10,5,16,8]
// Output: 7
// Explanation: There are several subsequences that achieve this length.
// One is [1, 17, 10, 13, 10, 16, 8] with differences (16, -7, 3, -3, 6, -8).
// Example 3:

// Input: nums = [1,2,3,4,5,6,7,8,9]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 1000
 

// Follow up: Could you solve this in O(n) time?





//CHALLENGE: 37

// Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

// The test cases are generated so that the answer can fit in a 32-bit integer.

 //Medium

// Example 1:

// Input: nums = [1,2,3], target = 4
// Output: 7
// Explanation:
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.
// Example 2:

// Input: nums = [9], target = 3
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 1000
// All the elements of nums are unique.
// 1 <= target <= 1000
// Follow up: What if negative numbers are allowed in the given array? How does it change the problem? What limitation we need to add to the question to allow negative numbers?


















