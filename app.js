// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
for(i = 0; i <= 10; i++) {
  console.log(i * 9);
}



// Write a function named assignGrade that: takes 1 argument, a number score(examle: 89 returns B). returns a grade for the score, either "A", "B", "C", "D", or "F".
function assignGrade(numberScore) {
  if(numberScore >= 90) {
    return "A";
  }
  else if(numberScore >= 80) {
    return "B";
  }
  else if(numberScore >= 70) {
    return "C";
  }
  else if(numberScore >= 60) {
    return "D";
  }
  else {
    return "F";
  }
}



//Check the results of assignGrade function from the previous exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
for(i = 60; i <= 100; i++) {
  grade = assignGrade(i);
  console.log("For " + i + ", you got a " + grade + ".");
}



// Write a function named tellFortune that: Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids." Call that function 3 times with 3 different values for the arguments.
function tellFortune(numKids, partnersName, geographicLocation, jobTitle) {
  console.log("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numKids + " kids.");
}

tellFortune(1, "Adam", "Atlanta", "Accountant");
tellFortune(2, "Brian", "Boston", "Baker");
tellFortune(3, "Charlie", "Chicago", "Comptroler");



// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Sample array : [1,2,3,4,5] Expected Output : 2,4
function secondSmallestGreater(numArray) {
  function secondSmallest(numArray) {
    var smallest = Math.min.apply(null, numArray);
    numArray.splice(numArray.indexOf(smallest), 1);
    return Math.min.apply(null, numArray);
  }
  function secondGreatest(numArray) {
    var greatest = Math.max.apply(null, numArray);
    numArray.splice(numArray.indexOf(greatest), 1);
    return Math.max.apply(null, numArray);
  }
  console.log(secondSmallest(numArray));
  console.log(secondGreatest(numArray));
}



// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
function countLetters(string, letter) {
  var counter = 0;
  var searchableString = string.split('');
  for(i = 0; i < searchableString.length; i++) {
    if(searchableString[i] === letter) {
      counter++;
    }
  }
  console.log(counter);
}



// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor Sample function : LongestCountryName(["Australia", "Germany", "United States of America"]) Expected output : "United States of America"
function longestCountryName(array) {
  var longest = array[0];

  for(i = 1; i < array.length; i++) {
    if(array[i].length > longest.length) {
      longest = array[i];
    }
  }
  console.log(longest);
}



// Write a JavaScript function that reverse a number. Example x = 32243; Expected Output : 34223
function reverseNumber(num) {
  var reversedNum = num.toString().split('').reverse().join('');
  reversedNum = parseInt(reversedNum);
  console.log(reversedNum);
}
