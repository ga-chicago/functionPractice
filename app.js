/*1.  Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, 
it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).*/

for( i = 0; i < 11; ++i){

		console.log(i + " * 9 = " + (i * 9));

}

/*2.  Write a function named assignGrade that:
takes 1 argument, a number score(examle: 89 returns B).
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works. */

function assignGrade(score){
	if(score >= 90){
    return "A";
  }

  else if(score >= 80){
    return "B";
  }
 else if( score >= 70){
    return "C";
  }
 else if( score >= 60){
    return "D";
  }
  else{
    return "F";
  }
}

/*
3.  Check the results of assignGrade function from the previous exercise for every value from 60 to 100 - 
so your log should show "For 89, you got a B. For 90, you got an A.", etc. */


function assignGrade(score){
	if(score >= 90){
    var i = "A";
  }

  else if(score >= 80){
    var i = "B";
  }
 else if( score >= 70){
    var i ="C";
  }
 else if( score >= 60){
    var i = "D";
  }
  else{
     var i = "F";
  }

  console.log( " For " + score + "  you got a  " + i)
}

for(i = 60; i < 101; ++i){
	assignGrade(i)
}

/*4. Write a function named `tellFortune` that:

- Takes 4 arguments: number of children, partner's name, geographic location, job title.
- Tutputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.*/

function tellFortune (numChildren, partnerName, geoLocation, jobTitle){


			console.log( "  You will be  " + jobTitle + geoLocation + "  and married to  " + partnerName + numChildren )

}

/*5. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
Sample array : [1,2,3,4,5]
Expected Output : 2,4 */

function secondGreatestLowest(arrNum){

	 var min = 0;

	for(i= 0; i <arrNum.length; i++){
			if(arrNum[i] < min){
				min= arrNum[i]	

			}

	}
	return min
}



/*6. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the 
specified letter within the string. 
Sample arguments : 'Listen to the river sing sweet songs, 'o' 
Expected output : 1  */

function word(string,letter){

	var count = 0;
	var newString = string.split ('');

	for(i= 0; i < newString.length; i++){
		if(newString[i] === letter){
			count += 1;
		}
		
	}
	console.log(count);
}
 

 /*7.  Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor 
Sample function : LongestCountryName(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"*/


function LongestCountryName(arrCountry){

 var longCountry = arrCountry[0];
 var maxLength = arrCountry.length[0];

 	for(i=0; i < arrCountry.length[0]; i++){
 		if(maxLength < arrCountry[i].length){
 			longCountry = arrCountry[i];
 		}
 	}
 	return longCountry;
}



/*8.  Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223*/

function myfunction(a){
   
   var x=a.toString();
   var y= x.split("");
   var z=y.reverse();
   var result=z.join("");
     return result;

 }





