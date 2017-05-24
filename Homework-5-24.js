

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

//Homework problem 4

var tellFortune = function(numKids, geo, job, title) {
	console.log("You will be a " + job + " in " + geo + " and married to " + title + " with " + numKids + " kids")
};