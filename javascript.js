//Question 1

for(var i = 0; i <= 10; i++){
	var number = (i * 9);
	console.log(number)
}

//Question 2

 function assignGrade(number){
 	if(number >= 90){
 		console.log("You got an A")
 	}

 	else if(number >= 80){
 		console.log("You got a B")
 	}

 	else if(number >= 70){
 		console.log("You got a C")
 	}

 	else{
 		console.log("You're FAILING at life")
 	}

 }

 //Question 3

function tellFortune(numberOfChildren, partnersName, geographicLocation, jobTitle){
	x= numberOfChildren;
	y= partnersName;
	z= geographicLocation;
	a= jobTitle;

		console.log("You will be a" + ' ' + a + " in" + ' ' + z + ", and married to" + ' ' + y + " with" + ' ' + x + " kids.")
}

// tellFortune(5,"Jim","Chicago", "Architect")
// You will be a Architect in Chicago, and married to Jim with 5 kids.

// tellFortune(8,"Karen","Mexico","basketweaver")
// You will be a basketweaver in Mexico,and married to Karen with 8 kids.



//Question 4

var myArray = [2,5,8,9,10,4,35]

function secondNumbers(array){
	
	var min = Math.min.apply(null, array);
	array.splice(array.indexOf(min), 1);

	var max = Math.max.apply(null, array);
	array.splice(array.indexOf(max), 1);
	
	var secondMax = Math.max.apply(null, array);
	var secondMin = Math.min.apply(null, array);

	console.log(secondMin + "," + secondMax)

}

//Question 5


function letters(string, letter){
	var rgxp = new RegExp(letter, "g");
		console.log(string.match(rgxp).length);
}

//Question 6 

function biggestCountry(countryName){
  	
  	var longestName = countryName[0];
   	for (var i = 0; i < countryName.length; i++) {
     if(countryName[i].length > longestName.length)
     longestName = countryName[i]
   }
   console.log(longestName)
 };	

 //Question 7

 function reverseIt(numberRev){
 	var y = numberRev.toString();
	var z = y.split("").reverse().join("");
	var a = parseInt(z);
	console.log(a);
}
		
		




















	



