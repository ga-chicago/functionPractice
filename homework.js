// 1.Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (let i = 0; i <= 10; i++){
		console.log(i * 9);
	}
//i need to understand the second part more
//that way i can better understand
// 2.Write a function named assignGrade that: takes 1 argument, a number score(examle: 89 returns B). returns a grade for the score, either "A", "B", "C", "D", or "F". Call that function for a few different scores and log the result to make sure it works.

const assignGrade = (x) => {
  if(x >= 90){
 		return "A"
 	}else if (x >= 80){
 	 	return "B"
 	}else if (x >= 70){
 	 	return "C"
 	}else if (x >= 60){
 	 	return "D"
 	}else {
 	 	return "F"
 	 }
 
 }
// 3.Check the results of assignGrade function from the previous exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

for (i = 60; i <= 100; i++){
 	console.log("For your score of " + i + " you got the letter grade of "  assignGrade(i) + ".");
  };
// 4.Write a function named tellFortune that:
const tellFortune = () => {

}

// 5.Takes 4 arguments: number of children, partner's name, geographic location, job title.

// 6.Tutputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// 7.Call that function 3 times with 3 different values for the arguments.

const tellFortune = (numOfChildren, partnerName, location, job) => {
 	console.log("You will be a/an " + job + " in " + location + ", and married to " + partnerName + " with " + numOfChildren + " kid/kids.");
 }
tellFortune(1, 'Emily', 'Denver', 'consultant')
tellFortune(3, 'Anne', 'Chicago', 'doctor')
tellFortune(5, 'Beth', 'Austin', 'developer')


// 8.Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Sample array : [1,2,3,4,5] Expected Output : 2,4
const second = (arr) => {
 	temp = [];
 	temp.push(arr[1]);
 	temp.push(arr[arr.length-2]);
 	return temp;
 };
 second([1,2,3,4,5])

// 9.Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'Listen to the river sing sweet songs, 'o' Expected output : 1
const countString = (text, letter) => {
	console.log((text.split(letter).length-1))
}

countString('hi this problem took some time to think about', 'i')
countString('i dont know about you but what about this', 'o')
countString('kjnbdfgahbgfhjdabvhbabdhjabfsaknfjkanjhanfhjbahfajhbfahjbfhaj', 'a')
// 10.Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor Sample function : LongestCountryName(["Australia", "Germany", "United States of America"]) Expected output : "United States of America"

const longestNation = (longestNationName) => {
 	const nation = longestNationName.toString().split(',');
 	console.log (nation);
 	const longestLength = 0
 	let longestName;
 	for (let i = 0; i < nation.length; i++){
 		if (nation[i].length > longestLength){
 			const longestLength = nation[i].length;
 			longestName = nation[i];
 		}
 	}	console.log(longestName)
 };
 
 longestNation(['Australia', 'Germany', 'United States of America']);


// 11.Write a JavaScript function that reverse a number. Example x = 32243; Expected Output : 34223

const myNumber = 1237654;
 const numReverse = (num) => {
 	let arr = [];
 	let numString = num.toString();
 	arr = numString.split("");
 	arr.reverse();
 	numString = "";
 	for (let i = 0; i < arr.length; i++){
 		numString += arr[i];
 	};
 	return (parseInt(numString));
 };
 numReverse(123456)