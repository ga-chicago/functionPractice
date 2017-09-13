// Cullen Mooney Sept 13th Homework

// #1
for (let i = 0; i < 11; i++) {
	console.log(i + " * 9 " + "= " + i * 9);
};

// #2
const assignGrade = (grade) => {
	if (grade > 89 && grade < 101) {
		console.log('A');
	} else if (grade > 79 && grade < 90) {
		console.log('B');
	} else if (grade > 69 && grade < 80) {
		console.log('C');
	} else if (grade > 59 && grade < 70) {
		console.log('D');
	} else {
		console.log('F');
	}
};
assignGrade(80); // --> Output is B
assignGrade(35); // --> Output is F
assignGrade(94); // --> Output is A




