// 1.

let product;

for (let i = 0; i <= 10; i++) {
 	product = i * 9;
 	console.log(product);
}

// 1. Bonus

let table

for (let i = 0; i <= 10; i++) {
 	for (m = 1; m <= 10; m++){
 		if (i > 0) {
		table = i * m
		console.log(i, "*", m, "=", table)
		}
 	}
 }

// 2.

const assignGrade = (numScore) => {

 	if (numScore >= 90) {
 		let letScore = "A";
 		console.log("For", numScore, "you got an", letScore)
 	} else if (numScore >= 80) {
 		let letScore = "B";
 		console.log("For", numScore, "you got a", letScore)
 	} else if (numScore >= 70) {
 		let letScore = "C";
 		console.log("For", numScore, "you got a", letScore)
 	} else if (numScore >= 60) {
 		let letScore = "D";
 		console.log("For", numScore, "you got a", letScore)
 	} else {
 		let letScore = "F";
 		console.log("For", numScore, "you got an", letScore)
 	}
 };

 // 3.

for (let s = 60; s <= 100; s++) {
	assignGrade(s);
}

// 4.

const tellFortune = (numChild, partName, location, job) => {
	return "You will be a " + job + " in " + location + ", and married to " + 
	partName + " with " + numChild + " kids."
}

tellFortune(3, "Sally", "Denver", "botonist")
tellFortune(1, "Tara", "San Francisco", "writer")
tellFortune(3, "Lacy", "Cleaveland", "chef");

// 5.
// Incomplete

const arrEval = (array) => {
	array.sort;
	secMax = array[2];
	secMin = array[array.length - 2];
	console.log("Second to smallest is", secMin);
	console.log("Second to largest is", secMax);
};

arrEval([5, 4534, 545, 43, 76, 564, 7, 10]);

// 6.

const countLet = (string, letter) => {
	let countTotal = 0
	for (l = 0; l <= string.length; l++) {
		if (string[l] === letter){
		countTotal = countTotal +1;
		}
	}
	console.log(countTotal)
}

// 7.

const longest = (countryNames) => {
	let longestName = 0;
	let winner;

	for (i = 0; i < countryNames.length; i++) {
		if (countryNames[i].length > longestName){
			longestName = countryNames[i].length;
			winner = countryNames[i];
		};
	};

	console.log("The country with the largest name is", winner);
};

// 8.

const revNum = (number) => {
	const numStr = number.toString();
	let word = "";

	for (i = numStr.length -1; i >= 0; i--) {
		word = word + numStr[i];
	}

	const reverse = parseInt(word,10);

	console.log(reverse);
}









