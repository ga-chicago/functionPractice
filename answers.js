// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (var i = 0; i <= 10; i++) {
	for (var k = 1; k <= 10; k++) {
		var product = k * i;
		console.log(i + " * " + k + " = " + product);
	};
};



// Write a function named assignGrade that: takes 1 argument, a number score(examle: 89 returns B). returns a grade for the score, either "A", "B", "C", "D", or "F". Call that function for a few different scores and log the result to make sure it works.

var assignGrade = function(score) {
	if (score >= 90) {
		return "A";
	} else if (score >= 80) {
		return "B";
	} else if (score >= 70) {
		return "C";
	} else if (score >= 60) {
		return "D";
	} else {
		return "F"
	};
};



// Check the results of assignGrade function from the previous exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

for (var i = 60; i <= 100; i ++) {
	if (assignGrade(i) === "A" || assignGrade(i) === "F") {
		console.log("For " + i + ", you got an " + assignGrade(i) + ".");
	} else {
		console.log("For " + i + ", you got a " + assignGrade(i) + ".");
	};
};

// Write a function named tellFortune that:

// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Tutputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

var tellFortune = function(numberOfChildren,partnerName,location,jobTitle) {
	console.log("You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + numberOfChildren + " kids.");
};

tellFortune(14,"Jeri","Alaska","Reporter");
tellFortune(2,"Tommy","New Zealand","Cat Collector");
tellFortune(4,"Katie","Hawai'i","Investigator");



// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Sample array : [1,2,3,4,5] Expected Output : 2,4

var sampleArray = [4,2,66,6,857,447];
var sortedArray = sampleArray // duplicate array so the original remains unaltered
sortedArray.sort(function(a, b){return a-b});

var giveMeNums = function(array) {
	console.log(sortedArray[1] + ", " + sortedArray[(sortedArray.length - 2)])
};



// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'Listen to the river sing sweet songs, 'o' Expected output : 1

var howManyTimes = function(string,letter) {
	var result = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === letter) {
			result++;
		}
	};
	return result;
};



// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor Sample function : LongestCountryName(["Australia", "Germany", "United States of America"]) Expected output : "United States of America"

var longestCountryName = function(listOfCountries) {
	console.log(listOfCountries.sort(function(a,b){return b.length - a.length;})[0]);
};



// Write a JavaScript function that reverse a number. Example x = 32243; Expected Output : 34223

var switchMyNum = function(x) {
	var y = "";
	x = x.toString();
	for (var i = x.length - 1; i >= 0; i -= 1) {
		y += x.charAt(i);
	};
	return parseInt(y);
}


