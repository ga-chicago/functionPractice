// problem 1
for (let i = 0; i <=10; i++){
	const x = i * 9
	console.log(x);
};
// problem 2
const assignGrade = (i) => {
	if (i >=90) {
		console.log("A")
	} else if (i >= 80){
		console.log("B")
	} else if (i >= 70){
		console.log("C")
	} else if (i >=60){
		console.log("D")
	} else{
		console.log("F")
	}
};

assignGrade(87);
assignGrade(34);
assignGrade(76);
assignGrade(68);
assignGrade(93);

// problem 3
// why you come out undefined!!!!!!@@@@@@@@@@@@
const checkGrade = (grade) => {
	for (let i = 60; i <= 100; i++){
		console.log(grade(i))
		console.log("For " + i + ", you got a " + grade(i))
	}
};

checkGrade(assignGrade);

//problem 4 - 7
const tellFortune = (numberOfChildren, partnerName, geoLocation, jobTitle) => { 

	console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids.")
}

tellFortune(5, "Amanda" , "Spain", "Matador");
tellFortune(1, "Samantha", "New York", "Investment Banker");
tellFortune(3, "Jenna", "New Zealand", "Sailboat Captain");

// problem 8 

// problem 9
const evaluationString = (text, letter) => {
	console.log((text.split(letter).length - 1))
}

evaluationString("Hello how are you doing today?", "a");
evaluationString("Hello how are you doing today?", "l");
evaluationString("Hello how are you doing today?", "o");

//problem 10
const longestNation = (longestNationName) => {
	const nation = longestNationName.toString().split(",");
	console.log (nation);
	const longestLength = 0
	let longestName;
	for (let i = 0; i < nation.length; i++){
		if (nation[i].length > longestLength){
			const longestLength = nation[i].length;
			longestName = nation[i];
		}
	}
	console.log(longestName)
};

longestNation(["Australia", "Germany", "United States of America"]);

// problem 11
const reverseNum = () => {
	let number = prompt("Enter number");

	if (!parseInt(number)){
		return null;
	}
	return parseInt(number.split('').reverse().join(''));
}

reverseNum();

