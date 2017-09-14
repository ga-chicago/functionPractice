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

//problem 4 - 7
const tellFortune = (numberOfChildren, partnerName, geoLocation, jobTitle) => { 

	return "You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids."
}

tellFortune(5, "Amanda" , "Spain", "Matador");
tellFortune(1, "Samantha", "New York", "Investment Banker");
tellFortune(3, "Jenna", "New Zeeland", "Sailboat Captain");

// problem 11
const reverseNum = () => {
	let number = prompt("Enter number");

	if (!parseInt(number)){
		return null;
	}
	return parseInt(number.split('').reverse().join(''));
}

reverseNum();