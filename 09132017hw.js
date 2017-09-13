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

