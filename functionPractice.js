// problem 1
for (let i = 0; i <=10; i++){
	const x = i * 9
	console.log(x);
};
// problem 2
const assignGrade = (x) => {
	if (x >=90) {
		console.log("A")
	} else if (x >= 80){
		console.log("B")
	} else if (x >= 70){
		console.log("C")
	} else if (x >=60){
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
	for (let i = 60; i < 101; i++){
		const value = assignGrade(i)
		console.log(value)
	};


//problem 4 - 7
const tellFortune = (numberOfChildren, partnerName, geoLocation, jobTitle) => { 
	//new es6 template style
	const fortuneTemplate = `You will have ${numberOfChildren} kids with ${partnerName} in ${geoLocation} and work in ${jobTitle}`;
	return fortuneTemplate;
	// console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids.")
}

tellFortune(5, "Amanda" , "Spain", "Matador");
tellFortune(1, "Samantha", "New York", "Investment Banker");
tellFortune(3, "Jenna", "New Zealand", "Sailboat Captain");

// problem 8 
const returnSecondLowestAndHighest = (someArray) => {
	function compareNumbers(a, b){
		return a-b;
	}

	someArray.sort(compareNumbers(a, b))

	return someArray[1] + ', ' + someArray[someArray.length - 2]
}

returnSecondLowestAndHighest([3, 2, 5, 4, 1, 20, 11, 23])

// problem 9
const evaluationString = (text, letter) => {
	console.log(text.split(letter).length - 1)
}

evaluationString("Hello how are you doing today?", "a");
evaluationString("Hello how are you doing today?", "l");
evaluationString("Hello how are you doing today?", "o");

//problem 10
const longestNation = (longestNationName) => {
	// const nation = longestNationName.toString().split(",");
	// console.log (nation);
	// let longestLength = 0
	let longestName = '';
	for (let i = 0; i < longestNationName.length; i++){
		if (longestNationName[i].length >= longestName.length){
			// longestLength = longestNationName[i].length;
			longestName = longestNationName[i];
		};
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

