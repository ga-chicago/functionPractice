
// Number 1
for (let i = 0; i <= 10; i++){
	console.log(i + " * 9 = " + (i * 9));
	for (let x = 0; x <= 10; x++){
		console.log(i + (" * ") + x + (" = ") + (i * x));
	};
};

// Number 2
const assignGrade = (score) => {
	if (score <= 100 && score >= 90){
		return ("A");
	}else if (score < 90 && score >= 80){
		return ("B");
	}else if (score < 100 && score >= 70){
		return ("C");
	}else if (score < 100 && score >= 60){
		return ("D");
	}else if (score < 60){
		return ("F");
	};
};

// Number 3
for (let i = 60; i <= 100; i++){
	console.log("For your score of " + i + " you got the letter grade of " + assignGrade(i) + ".");
};

// Number 4
const tellFortune = (numOfChildren, partnerName, location, job) => {
	console.log("You will be a/an " + job + " in " + location + ", and married to " + partnerName + " with " + numOfChildren + " kid/kids.");
};

// Number 5
const arr = [2, 5, 4, 1, 3];
const secondHighLow = (array) => {
	array.sort();
	return (array[1] + ", " + array[array.length - 2]);
};

// Number 6
const occurs = (string, letter) => {
	let split = [];
	let numOccurs = 0;
	split = string.split("");
	for (let i = 0; i < split.length; i++){
		if (split[i] === letter){
			numOccurs++;
		};
	};
	return (numOccurs);
};







