// Homework problem #1
for (var i = 0; i <= 10; i++) {
	console.log(i * 9);
}

// Homework problem #2
for (var i = 1; i <= 10; i++) {
	for (var x = 1; x <= 10; x++) {
		console.log(i + " x " + x + " = " + (i * x));
	}
}

// Homework problem #3
var assignGrade = function(score) {
	if (score <= 59) {
		return "F";
	} else if (score <= 69) {
		return "D";
	} else if (score <= 79) {
		return "C";
	} else if (score <= 89) {
		return "B";
	} else {
		return "A";
	}
}

// Homework problem #4
var assignGrade = function(score) {
	if (score <= 59) {
		console.log("Your grade is F");
	} else if (score <= 69) {
		console.log("Your grade is D");
	} else if (score <= 79) {
		console.log("Your grade is C");
	} else if (score <= 89) {
		console.log("Your grade is B");
	} else {
		console.log("Your grade is A");
	}
}

// Homework problem #5
var tellFortune = function(numOfChildren, partnerName, location, job) {
	console.log("You will be a " + job + " in " + location + ", and married to " + partnerName + " with " + numOfChildren + " kids.")
}
tellFortune(2, "Itee", "Chicago", "Doctor")
tellFortune(2, "Mpey", "Chicago", "Web Developer")
tellFortune(4, "Taiwo", "Chicago", "Pastor")

// Homework problem #6
var numbers = [12,2,5,4,14,6,54,8,19]
var selectedNums = function() {
	numbers.sort(function(a,b) {
	return a - b
})
	console.log(numbers[1] + "," + numbers[numbers.length - 1])
}

// Homework problem #7
letterCounter = function(str, letter) {
	var letterCount = 0
	var strArray = str.split("");
	for (var i = 0; i < strArray.length; i++) {
		if (strArray[i] === letter) {
			letterCount++
		}
	}
	return count;
	console.log("The letter " + letter + " occurs " + letterCount + " times in the phrase " + str)
}

// Homework problem #8
var stringLengths = []
var longestCountryName = function(country1, country2, country3) {
	stringLengths = [country1.length, country2.length, country3.length];
	console.log(Math.max.apply(Math, stringLengths))
}

// Homework problem #8 option 2
function returnLongestWord(arrayOfStrings){
  // use a loop
  // variable to store the longest word
  var longestWord = '';

  for(var i = 0; i < arrayOfStrings.length; i ++){

    if (arrayOfStrings[i].length > longestWord.length){
      longestWord = arrayOfStrings[i]
    }

  }

  return longestWord

}

// Homework problem #9
var reverseNum = function(i) {
	i = i + "";
	return parseInt(i.split("").reverse().join(""));
	console.log(i);
}