console.log("#1----------------------------------");
//#1 
for(var i = 0; i <= 10; i++) {
	console.log(9*i);
}
console.log("#1-BONUS----------------------------");

//#1 bonus 
var outNums = [];
//i from 1 to 10
for (var i = 0; i <=10; i++) {
	outNums[i] = [];
	for (var j = 1; j <= 10; j++) {
		outNums[i][j] = i*j;
	}
	var output = i + ": ";
	for(n in outNums[i]) {
		output += outNums[i][n] + ", ";
	}
	console.log(output);
}

console.log("#2----------------------------------");
//#2
function assignGrade(score) {
	if(score >= 90) return "A";
	if(score >= 80) return "B";
	if(score >= 70) return "C";
	if(score >= 60) return "D";
	return "F";
}
console.log(assignGrade(88));
console.log(assignGrade(59));
console.log(assignGrade(75));
console.log(assignGrade(101));
console.log(assignGrade(0));

//#3 
function bartSimpson() {
	for(var i = 60; i <= 100; i++) {
		console.log("For " + i + " you get " + assignGrade(i));
	}
}

console.log("#4----------------------------------");
//#4
function tellFortune(kids, lover, where, whatDo) {
	if (kids == 0) kids = "no";
	var str	 = "You will be a " + whatDo + " in " + where + ", and married to " + lover + " with " + kids + " kid";
	if (kids==1) {
	} else str += "s";
	str +=".";
	console.log(str);
}
tellFortune(3, "Joan", "Toledo, Ohio", "fireman");
tellFortune(1, "Clark", "Antarctica", "cat lady");
tellFortune(0, "Svetlana", "Washington, DC", "Russian spy");


//#5 Second Highest and lowest 
function seconds(numArray) {
	if(numArray.length<3) {
		return "Sorry, not enough arguments for this function.";
		//TODO expand this error checkto make sure we have at least 3 different numerical values.
	} 
	//varaiables to store highest and lowest number values, start with just some value from the array
	var highest = numArray[0];
	var lowest = numArray[0];
	//keep it if it's higher/lower
	for(var i = 0; i < numArray.length; i++) {
		if(numArray[i] <= lowest) {
			lowest = numArray[i];
		}
		if(numArray[i] >= highest) {
			highest = numArray[i];
		}
	}
	//this will hold our new array which will have everything BUT highest and lowest value of original array
	var newArray = [];
	//only copy into new array if it isn't highests and lowests
	for(var i = 0; i < numArray.length; i++) {
		if( numArray[i] != highest && numArray[i] != lowest ) {
			newArray.push(numArray[i]);
		}
	}
	//repeat above procedure, again, start with some value from (new) array
	highest = newArray[0];
	lowest = newArray[0];
	for(var i = 0; i < newArray.length; i++) {
		if(newArray[i] <= lowest) {
			lowest = newArray[i];
		}
		if(newArray[i] >= highest) {
			highest = newArray[i];
		}
	}
	console.log(lowest + ", " + highest)
}

//#6 The question may have an error -- 'o' occurs twice in the example string
function countOccurs(str, char) {
	//error-checking test cases like a good boy
	var errors = "";
	if(char.split('').length != 1) {
		errors += "just one character for second argument, sorry. ";
	}
	if(str == "") {
		errors += "you can't use an empty string as the string, sorry. ";
	}
	if (errors != "") {
		return errors;
	}
	var count = 0;
	//str.toLowerCase().split(""); so it searches for the letter, notjust the correct ANSI code
	var splitString = str.toLowerCase().split("");
	for(c in splitString) {
		if(splitString[c]==char) {
			count++;
		}
	}
	return count;
}


//#7 same as a previous homework question!
function longest (countries) { 
	var longestCountry = "";

	for(c in countries) {
		if(countries[c].length > longestCountry.length) {
			longestCountry = countries[c];
		}
	}
	return longestCountry;
}


//#8 reverse a number
function numReverse(n) {
	return n.toString().split('').reverse().join('');
}
