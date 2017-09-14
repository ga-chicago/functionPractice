

//Homework problem 1
for (i = 0; i <= 10; i++) {
	console.log(i * 9);
};

//Homework problem 2 & 3
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
		return "F";
	}
};

var assignGradeLong = function(score) {
	if (score >= 90) {
		return "For " + score + " you got an A";
	} else if (score >= 80) {
		return "For " + score + " you got an B";
	} else if (score >= 70) {
		return "For " + score + " you got an C";
	} else if (score >= 60) {
		return "For " + score + " you got an D";
	} else {
		return "For " + score + " you got an F";
	}
};

//Homework problem 4

var tellFortune = function(numKids, geo, job, title) {
	console.log("You will be a " + job + " in " + geo + " and married to " + title + " with " + numKids + " kids")
};

//Homework problem 8
var findSecond = function (array) {
	array.sort(function(a, b){return a-b});
	var secondLowest = array[1];
	if (secondLowest === array[0]) {
		secondLowest = array[2]
	};
	var secondHighest = array[array.length - 1]
	if (secondHighest === array[array.length]) {
		secondHighest = array[array.length - 2];
	}
	return [secondLowest, secondHighest]
};

//Homework problem 9
var countLetter = function(string, letter) {
	var count = 0;
	var stringSplit = string.split("")
	for (i = 0; i < stringSplit.length; i++) {
		if (stringSplit[i] === letter) {
			count++;
		};
	}
	return count;
};

//Homework problem 10
var longestCountry = function (listCountries) {
	var longest = 0;
	var longestString = "";
	for (i = 0; i < listCountries.length; i++)
		if (listCountries[i].length > longest) {
			longest = listCountries.length[i];
			longestString = listCountries[i];
		}
		return longestString;
};

//Homework problem 11
var reverseNumber = function (n) {
    for(i = 0; n; n = Math.floor(n / 10)) {
        i *= 10;
        i += n % 10;
    }
    return i;
};