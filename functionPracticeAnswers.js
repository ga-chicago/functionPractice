// Write a for loop that will iterate from 0 to 10.
// For each iteration of the for loop, it will multiply the number by 9
// and log the result (e.g. "2 * 9 = 18").
 // Bonus: Use a nested for loop
 // to show the tables for every multiplier from 1 to 10 (100 results total).

for (let i = 0; i < 11; i++){
  console.log(i + " X 9 = " + (i * 9))
}

// Write a function named assignGrade that: takes 1 argument,
//  a number score(examle: 89 returns B).
//   returns a grade for the score, either "A", "B", "C", "D", or "F".
//    Call that function
// for a few different scores and log the result to make sure it works.

const assignGrade = (score) => {
  if(score >= 90){
    return 'A'
  } else if (score >= 80){
    return 'B'
  } else {
    return 'C'
  }
}

// Check the results of assignGrade function
// from the previous exercise for
// every value from 60 to 100 - so your log
//  should show "For 89, you got a B. For 90, you got an A.", etc.

// for (let i = 60; i < 101; i++){
//   const value = assignGrade(i)
//   console.log(value)
// }

// Write a function named tellFortune that:+

// Takes 4 arguments: number of children,
// partner's name, geographic location, job title.

const tellFortune = (numOfChildren, partnerName, location, job) => {
  const fortuneTemplate = `You will have ${numOfChildren} devil-babies with ${partnerName} in ${location} and work in ${job}`;
  return fortuneTemplate;
}

// Write a JavaScript function which will take an array of numbers
//  stored and find the second lowest and second greatest numbers,
//  respectively. Sample array : [1,2,3,4,5] Expected Output : 2,4



const returnSecondLowestAndHighest = (someArray) => {
  function compareNumbers(a, b) {
    return a - b;
  }
  someArray.sort(compareNumbers(a, b))
  return someArray[1] + ', ' + someArray[someArray.length - 2]

}

// Write a JavaScript function that accepts two arguments,
// a string and a letter and the function will count
// the number of occurrences of the specified letter within the string. Sample arguments
// : 'Listen to the river sing sweet songs, 'o' Expected output : 1

const countLetter = (someString, letter) => {
  console.log(someString.split())
  // return someString.split(letter).length - 1
  const CountOfLetter = 0;
  for (let i =0; i < someString.length; i++){

    if(someString[i]  === letter){
      CountOfLetter += 1
    }
  }
  return CountOfLetter
}

// Write a JavaScript function that accept a list of country names as input and
// returns the longest country name as output. Go to the editor Sample function :
const words = ['he', 'she', 'four']

const returnLongestCountry = (arrayOfCountries) => {
  let longestWord = '';

  for (let i = 0; i < arrayOfCountries.length; i++){
    if(arrayOfCountries[i].length >= longestWord.length){
      longestWord = arrayOfCountries[i];
    };
  }
  return longestWord
};

returnLongestCountry(words)

// Write a JavaScript function that reverse a number.
//  Example x = 32243; Expected Output : 34223


const reverseNumber = (number) => {

  // const numString = number.toString();

  return parseInt(number.split('').reverse().join(''))
  // let word = '';

  // for (let i = numString.length -1; i >= 0; i--){
  //   word = word + numString[i]
  // }
  // const reverse = parseInt(word, 10)
  // return reverse
  let reverse = 0

  while(number !== 0){
    reverse *=10;
    reverse += number % 10;
    number -= number % 10;
    number /= 10
  }

  return reverse

}