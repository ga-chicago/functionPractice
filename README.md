# functionPractice
Function loop practice

## After you complete each problem
- `git add .`
- `git commit -m "I completed problem blah"`



## HomeWork

1.  Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (var i = 0; i <= 10; i++) {
	for (var x = 0; x <= 10; x++) {
		console.log(x + " * " + i + " = " + (x * i));
    }
}

2.  Write a function named assignGrade that:
takes 1 argument, a number score(examle: 89 returns B).
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score) {

	if (score >= 90) {
		return "A";
    }
	else if (score >= 80) {
		return "B";
    }
	else if (score >= 70) {
		return "C";
    }
	else if (score >= 60) {
		return "D";
    }
	else {
		return "E";
    }
}

3.  Check the results of assignGrade function from the previous exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

for (var i = 60; i <= 100; i++) {
	console.log("For " + i + ", you got a " + assignGrade(i) + ".")
} 

4. Write a function named `tellFortune` that:

- Takes 4 arguments: number of children, partner's name, geographic location, job title.
- Tutputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.

function tellFortune(numChild, partName, geoLoc, jobTitle) {
	console.log("You will be a " + jobTitle + " in " + geoLoc + ", and married to " + partName + " with " + numChild + " kids.");
}

5. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
Sample array : [1,2,3,4,5]
Expected Output : 2,4

function seconds(arr) {

	var tmpArray = arr.sort();
	var lowNum = tmpArray[1];
	var hiNum = tmpArray[(tmpArray.length - 2)];
	var newArr = [];

	newArr.push(lowNum, hiNum);

	return newArr;
} 

6. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
Sample arguments : 'Listen to the river sing sweet songs, 'o' 
Expected output : 1 

function checkString(str, ltr) {
	var pos = str.indexOf(ltr);
	var count = 0;

	while (pos !== -1) {

  		count++;
  		pos = str.indexOf(ltr, pos + 1);

	}

	return count;
}

7.  Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor 
Sample function : LongestCountryName(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"

function longName(countryList) {

	var longCountry = countryList[0];
	var maxLength = countryList[0].length;

	for (var i = 1; i < countryList.length; i++) {
		if (maxLength < countryList[i].length) {
			longCountry = countryList[i];
        }
    }

	return longCountry;
}

8.  Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223

function reverseNum(num) {

	var tmpNum = num.toString();
	var tmpStr = "";

	for (var i = tmpNum.length -1; i >= 0; i--) {
		tmpStr += tmpNum.charAt(i);
    }

	return Number(tmpStr);
}


