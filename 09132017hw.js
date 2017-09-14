//question 1

for (i = 0; i <= 10; i++) {
	console.log(i * 9);
}

//question 1 bonus

for (i = 0; i <= 10; i++) {
	for (z = 1; z <= 10; z++) {
		console.log(i * z);
	}
}

//question 2

const assignGrade = (x) => {
	if (x > 89) {
		return 'A';
	} else if (x > 79) {
		return 'B';
	} else if (x > 69) {
		return 'C';
	} else if (x > 59) {
		return 'D';
	} else {
		return 'F';
	}
};

//question 3

for (i = 60; i <= 100; i++) {
	console.log('For ' + i + ', you got a ' + assignGrade(i));
}

//question 4

const tellFortune = (numberChildren, namePartner, location, titleJob) => {
	return 'You will be a ' + titleJob + ' in ' + location + ', and married to ' + namePartner + ' with ' + numberChildren + ' kids.'
}

tellFortune(3, 'Bjork', 'Iceland', 'walrus');
tellFortune(0, 'Andy the Aardvark', 'Tuscaloosa', 'tow truck salesman');
tellFortune(10, 'Winnie Fitzwalker', 'The Azores', 'commodities trader');

//question 5

const arr = [1, 2, 3, 4, 5];

const printTwo = (array) => {
	array.sort(function(a, b){return a - b});
	const answers = [];
	array.pop();
	array.shift();
	answers.push(Math.min(...array));
	answers.push(Math.max(...array));
	return (answers);
}

//question 6

let text = 'Listen to the river sing sweet songs';
let letter = 'o';

const letterFrequency = (text, letter) => {
	return (text.split(letter).length - 1);
}

//question 7

const nations = ["Australia", "Germany", "United States of America"];

const longestCountryName = (countries) => {
	const characterCount = [];
	for (i = 0; i < countries.length; i++) {
		characterCount.push(countries[i].length)
	}
	characterCount.sort(function(a, b){return a - b});
	for (i = 0; i < countries.length; i++) {
		if (countries[i].length === characterCount[characterCount.length - 1]) {
			return (countries[i]);
		}
	}
}

//question 8