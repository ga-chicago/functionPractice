1.
/*Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).*/

//Answer

for(i=0; i<=10; i++) {
		console.log(i + " * " + 9 + " = " + i*9)
}

2.

function assignGrade(score) {
	if(score>=90) {
		return "A"
	} else if(score>=80) {
		return "B"
	} else if(score>=70) {
		return "C"
	} else if(score>=60) {
		return "D"
	} else {
		return "YOU FAILED"
	}
}
//function results when called with various values for score:
assignGrade(70)
"C"
assignGrade(60)
"D"
assignGrade(100)
"A"
assignGrade(99)
"A"
assignGrade(89)
"B"
assignGrade(90)
"A"

3.
	for(x = 60; x <=100; x++) {
		if(x>=90) {
			console.log("For " + x + ", " + "you got an A!");
		} else if(x>=80) {
			console.log("For " + x + ", " + "you got a B.");
		} else if(x>=70) {
			console.log("For " + x + ", " + "you got a C.");
		} else if(x>=60) {
			console.log("For " + x + ", " + "you got a D.");
		} else {
			console.log("For " + x + ", " + "you failed and your parents are disappointed in you.");
		}
	}

4.
function tellFortune(numKids, partName, geoLoc, job) {
	console.log("You will be a " + job + " in " + geoLoc + ", and married to " + partName + " with " + numKids + " kids.")
}

tellFortune(2, "Chuck E Cheese", "Toledo, Spain", "geologist")
//2 You will be a geologist in Toledo, Spain, and married to Chuck E Cheese with 2 kids.
tellFortune(4, "Chris", "SF", "stripper")
//You will be a stripper in SF , and married to Chris with 4 kids.
tellFortune(6, "James Marsden", "Chicago", "ama de casa")
//You will be a ama de casa in Chicago , and married to James Marsden with 6 kids.


5.

var array = [];
function findNumers(array) {

	

	//have array of numbers, loop through array and if number is 2nd lowest, return that, if number is highest, return that, then print both numbers
}

/*
5. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/

6.

function letterCount(strng, lttr) {
	var splitty = strng.split("");
	var tally = [];
	for(i=0; i<splitty.length; i++) {
		if(splitty[i] === lttr) {
			tally.push(i);
		}
	}
	return tally.length;
}


7.

var countrArray = ["Azerbaijan", "Zimbabwe", "Japan", "Colombia", "Ethopia"];


function longestName(array) {
	var max = 0;
	var index = 0;
	for(var i=0; i<array.length; i++){
		if(array[i].length > max) {
			max = array[i].length;
			index = i;
		}
	}
	return array[index];
}





/*Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output. Go to the editor
Sample function : LongestCountryName(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"*/

8.

function reverseNum(nurm) {

	return parseInt(nurm.toString().split("").reverse().join(""));
}

//OR
function reverseNum(nurm) {

	var numString = nurm.toString();
	var splitNum = numString.split("");
	var revNumStr = splitNum.reverse();
	var joindNum = revNumStr.join("");
	return Number(joindNum);
}
