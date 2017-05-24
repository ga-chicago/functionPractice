// 1. Write a for loop that will iterate from 0 to 10. 
// For each iteration of the for loop, it will multiply the number 
// by 9 and log the result (e.g. "2 * 9 = 18"). 

results = [];

for (var i = 0; i <= 10; i++) {
	results.push(i * 9)
}
console.log(results)

// Bonus: Use a nested for loop to show the tables for every multiplier 
// from 1 to 10 (100 results total).

var results = []
var finalResults = []

for (var i = 1; i <= 10; i++) {
	for (var x = 1; x <= 10; x++) {
		results.push(x * i);
	}
	finalResults.push(results);
	results = [];
}
console.log(finalResults);


// 2. Write a function named assignGrade that: takes 1 argument, 
// a number score(examle: 89 returns B). returns a grade for the score, 
// either "A", "B", "C", "D", or "F". Call that function for a few 
// different scores and log the result to make sure it works.

var assignGrade = function(score) {
	if (score > 89) {
		return "A";
	}
	else if (score <= 89 && score > 79) {
		return "B";
	}
	else if (score <= 79 && score > 69) {
		return "C";
	}
	else if (score <= 69 && score > 59) {
		return "D";
	}
	else {
		return "F";
	}
}


// 3. Check the results of assignGrade function from the 
// previous exercise for every value from 60 to 100 - so your 
// log should show "For 89, you got a B. For 90, you got an A.", etc.

for (var i = 60; i <= 100; i++) {
	console.log("For " + i + ", you got a " + assignGrade(i) + ".");
}

// 4. Write a function named tellFortune that:

// 5. Takes 4 arguments: number of children, partner's name, geographic 
// location, job title.

// 6. Tutputs your fortune to the screen like so: "You will be a X in Y, 
//and married to Z with N kids."


var tellFortune = function(children, partner, location, job) {
	console.log("You will be a " + job + " in " + location + ", and married to " + partner + " with " + children + " kids.");
}

// 7. Call that function 3 times with 3 different values for the arguments.

tellFortune(0, "Bob", "California", "teacher");
tellFortune(5, "Joe", "Iceland", "doctor");
tellFortune(3, "Ben", "New York", "vet");

// 8. Write a JavaScript function which will take an array of 
// numbers stored and find the second lowest and second greatest numbers,
// respectively. Sample array : [1,2,3,4,5] Expected Output : 2,4

var highAndLow = function(arr) {
	arr.sort(function(a, b) {return a-b});
	var secondLow = arr[1];
	arr.sort(function(a, b) {return b-a});
	var secondHigh = arr[1];
	return secondLow + "," + secondHigh
}


// 9. Write a JavaScript function that accepts two arguments, 
// a string and a letter and the function will count the number 
// of occurrences of the specified letter within the string. Sample 
// arguments : 'Listen to the river sing sweet songs, 'o' 
// Expected output : 1

var count = 0;

var strAndLetter = function(str, letter) {
	var splitUp = str.split('')
	for (var i = 0; i < splitUp.length; i++) {
		if (splitUp[i] === letter) {
			count = count + 1;
		}
	}
	console.log(count);
}

// 10. Write a JavaScript function that accept a list of country names 
// as input and returns the longest country name as output. Go to the 
// editor Sample function : LongestCountryName(["Australia", "Germany", 
//"United States of America"]) Expected output : "United States of 
// America"

var longestCountryName = function(arr) {
	arr.sort(function(a, b) {return b.length-a.length});
	return arr[0];
}

// 11. Write a JavaScript function that reverse a number. Example x = 32243; 
// Expected Output : 34223

var reverseNum = function(num) {
	return(num.toString().split("").reverse().join(""));
}
