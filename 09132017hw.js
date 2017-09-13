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
		return console.log('A');
	} else if (x > 79) {
		return console.log('B');
	} else if (x > 69) {
		return console.log('C');
	} else if (x > 59) {
		return console.log('D');
	} else {
		return console.log('F');
	}
};