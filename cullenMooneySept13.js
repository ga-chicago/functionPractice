// Cullen Mooney Sept 13th Homework

// #1
for (let i = 0; i < 11; i++) {
	console.log(i + " * 9 " + "= " + i * 9);
};

// #2
const assignGrade = (grade) => {
	if (grade > 89 && grade < 101) {
		return'A';
	} else if (grade > 79 && grade < 90) {
		return'B';
	} else if (grade > 69 && grade < 80) {
		return'C';
	} else if (grade > 59 && grade < 70) {
		return'D';
	} else {
		return'F';
	}
};
assignGrade(80); // --> Output is B
assignGrade(35); // --> Output is F
assignGrade(94); // --> Output is A

// #3
const assignGrade = (grade) => {
	if (grade > 89 && grade < 101) {
		return'A';
	} else if (grade > 79 && grade < 90) {
		return'B';
	} else if (grade > 69 && grade < 80) {
		return'C';
	} else if (grade > 59 && grade < 70) {
		return'D';
	} else {
		return'F';
	}
};

for (let i=60; i < 101; i++) {
	console.log('For ' + i + ', you got a ' + assignGrade(i));
};
	
// #4
const tellFortune = (numberOfChildren, partnersName, location, job) => {
	return 'You will be a ' + job + ' in ' + location + ', and married to ' + partnersName + ' with ' + numberOfChildren + ' kids.';
}
tellFortune(5, 'Mary', 'Chicago', 'Lawyer');
tellFortune(0, 'Rick', 'Alberta', 'Dentist');
tellFortune(10, 'Susie', 'West Virginia', 'Nascar Driver');

