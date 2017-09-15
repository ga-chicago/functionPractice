
//Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, 
//it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). 
//Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).



for (let i = 0; i < 10; i++){
	console.log(i * 9);
}
	//console.log(i + " X 9 =" + (i * 9))  <----answer


//#2

//Write a function named assignGrade that: takes 1 argument, 
//a number score(examle: 89 returns B). 
//returns a grade for the score, either "A", "B", "C", "D", or "F". 
//Call that function for a few different scores and log the result to make sure it works.

const assignGrade = (x) => {
	if (x >= 90){
		return "A"
	}else if (x >= 80){
		return "B"
	}else if (x >= 70){
		return "C"
	}else if (x >= 60){
		return "D"
	}else if (x >= 50){
		return "F"
	}
}


for (let i = 60; i < 101; i ++){
	const value = assignGrade(i)
	console.log (value)
}
//Write a function named tellFortune that:

//Takes 4 arguments: number of children, partner's name, geographic location, job title
//Tutputs your fortune to the screen like so: 
//"You will be a X in Y, and married to Z with N kids."
//Call that function 3 times with 3 different values for the arguments.

const tellFortune = (numOfChildren, partnerName, location, job) => {
	const fortuneTemplate = `you will have ${numOfChildren} with ${partnerName} in ${location} and work in ${job}`;
	return fortuneTemplate; 
};





//Write a JavaScript function which will take an array of numbers stored and 
//find the second lowest and second greatest numbers, 
//respectively. Sample array : [1,2,3,4,5] Expected Output : 2,4

const returnSecondLowestAndHighest = (someArray) => {

	someArray.sort()

	return someArray [1] + ', ' + someArray[someArray.length - 2]
} 



//Write a JavaScript function that accepts two arguments, 
//a string and a letter and the function will count the number of occurrences 
//of the specified letter within the string. 
//Sample arguments : 'Listen to the river sing sweet songs, 'o' Expected output : 1


const countLetter = (someString, letter) => {

	return someString.split(letter).length - 1
}

//Also 

//Write a JavaScript function that accept a list of country names as input 
//and returns the longest country name as output. 
//Go to the editor Sample function : 
//LongestCountryName(["Australia", "Germany", "United States of America"]) 
//Expected output : "United States of America"

const words = ['lee', 'reel', 'bob', 'blaljfkda']

const returnLongestCountry = (arrayOfCountries) => {
	let longestWord = '';

for (let i = 0; i < arrayOfCountries.length; i++){
	if (arrayOfCountries[i].length >= longestWord.length){
		longestWord = arrayOfCountries[i]
	};
}
	return longestWord
}

returnLongestCountry(words)
s
//Write a JavaScript function that reverse a number. 
//Example x = 32243; Expected Output : 34223

const reverseNumber = (number) => {
	
	const numString = number.toString();

	let word = '';

	for (let i = numString.length -1; i >= 0; i--){
		word = word + numString[i]
	}
	const reverse = parseInt(word, 10)
	return reverse
}

//

//return parseInt(number.split('').reverse().join(''))

//number.split makes numbers into strings
//.reverse() reverses the string. .reverse() is a method only for strings
//.join joins the string as one string
//parseInt creates the string into a number



















