
// Number 1
for (i = 0; i <= 10; i++){
	console.log(i + " * 9 = " + (i * 9));
	for (x = 0; x <= 10; x++){
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

// Mess Up
const assignGrade = (score) => {
	if (score <= 100 && score >= 90){
		return ("Your score of " + score + " gives you an 'A'.");
	}else if (score < 90 && score >= 80){
		return ("Your score of " + score + " gives you an 'B'.");
	}else if (score < 100 && score >= 70){
		return ("Your score of " + score + " gives you an 'C'.");
	}else if (score < 100 && score >= 60){
		return ("Your score of " + score + " gives you an 'D'.");
	}else if (score < 60){
		return ("Your score of " + score + " gives you an 'F'.");
	}else if (score > 100){
		console.log("Extra credit was not given, therefore your score of " + score + " is not valid.");
	};
};

