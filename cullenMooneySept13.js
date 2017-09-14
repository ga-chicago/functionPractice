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

// #5  --> need to figure out how to return both 
const secLowSecHigh = (sampleArr) => {
	const max = Math.max.apply(null, sampleArr);
	sampleArr.splice(sampleArr.indexOf(max), 1);
	const min = Math.min.apply(null, sampleArr);
	sampleArr.splice(sampleArr.indexOf(min), 1);
	return ;
secLowSecHigh();

// #6
const getOccurrence = (string, character) => {
    let occurrence = 0;

    for( i = 0; i < string.length; i ++) {
        if(string[i] === character) {
            occurrence += 1;
        }
    }
    return occurrence;
};

getOccurrence ('puff daddy is a playa', 'p');

// #7 --> still need to complete
const findLongestCountryName = (arr) => {
	let arrSplit = arr.split(' ');
	let longestCountryName = 0;
	for (let i =0; i < arrSplit.length; i++) {
		if (arrSplit[i].length > longestCountryName) {
		longestCountryName = arrSplit[i];
		}
	}
	return longestCountryName;
};
findLongestCountryName()

// #8 --> need to get functions synced
const reverseNumber = (number) => {
	const string = number.toString();
}
const reverseString = (string) => {
    	const splitString = string.split(""); 
    	const reverseArray = splitString.reverse();
    	const joinArray = reverseArray.join(""); 
    	return joinArray; 
 };
 reverseNumber(123);









