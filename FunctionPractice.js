//1
for(let i = 0; i < 11; i++){
	console.log(i*9);
};

//2
const assignGrade = (grade) => {
	if(grade > 89)
		return 'A';
	else if(grade > 79)
		return 'B';
	else if(grade > 69)
		return 'C';
	else if(grade > 59)
		return 'D';
	return 'E';
};

//3
for(i = 60; i < 101; i++){
	console.log('for ', i, ' you got a(n) ', assignGrade(i));
};

//4
const tellFortune = (numOfChildren, partnersName, location, job) => {
	console.log('You will be a', job, 'n', location, ',and married to', partnersName, 'with', numOfChildren, 'kids.');
};

tellFortune(2, "sarah", "seattle", "webdev");
tellFortune(1, 'maddy','LA', 'cook');
tellFortune(10, 'ur mum', 'NYC', 'Truck Driver');

//5
const prob5 = (arr) => {
	temp = [];
	temp.push(arr[1]);
	temp.push(arr[arr.length-2]);
	return temp;
};

//6
const prob6 = (s, l) => {
	let counter = 0;
	for(let i = 0; i < s.length; i++){
		if(s[i] === l)
			counter++;
	}
	return counter;
};

//7
const prob7 = (arr) => {
	let bigValue = 0;
	let bigCountry = 0;
	for(let i = 0; i < arr.length; i++){
		if(arr[i].length > bigValue){
			bigCountry = arr[i];
		}
	}
	return bigCountry;
};

//8
const prob8 = (number) => {
	let reverse = 0;

	while (number != 0) {
		reverse *= 10;
		reverse += number % 10;
		number -= number % 10;
		number /= 10;
	}
	return reverse;
};