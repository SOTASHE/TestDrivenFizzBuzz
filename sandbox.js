//CHALLENGE : FIZZBUZZ

// Write a program that prints all the numbers from 1 to 100.
//for multiples of 3, instead of number, print 'fizz'
//for multiples of 5 print 'Buzz'. For numbers which are multiples of
//both 3 and 5, print 'FizzBuzz'.


//solution:

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

module.exports = fizzBuzz;


