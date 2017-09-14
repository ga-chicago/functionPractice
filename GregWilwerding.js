/* 1. Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, 
      it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). 
      Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (
      100 results total).*/

      var q1 = function (){
      	for (i = 0; i < 20; i++) {
      		console.log(i * 9);
      	}
      }

/* 2. Write a function named assignGrade that: takes 1 argument, a number score(examle: 
      89 returns B). returns a grade for the score, either "A", "B", "C", "D", or "F". 
      Call that function for a few different scores and log the result to make sure it 
      works. Check the results of assignGrade function from the previous exercise for 
      every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, 
      you got an A.", etc.*/

      var assignGrade = function(score) {
      	if (score >= 90) {
      		console.log("A");
      	} else if (score >= 80 && score < 90) {
      		console.log("B");
      	} else if (score >= 70 && score < 80) {
      		console.log("C");
      	} else if (score >= 60 && score < 70) {
      		console.log("D");
      	} else if (score < 60) {
      		console.log("F");
      	}
      }

/* 3. Write a function named tellFortune that:
      - Takes 4 arguments: number of children, partner's name, geographic location, job 
        title.
      - Outputs your fortune to the screen like so: "You will be a X in Y, and married to 
        Z with N kids."
      - Call that function 3 times with 3 different values for the arguments.*/

     var tellFortune = function(numChildren, partnerName, geoLoc, jobTitle) {
     	console.log("You will be a " + jobTitle + " in " + geoLoc + ", and married to " + 
     		partnerName + " with " + numChildren + " kids.");
     }

/* 4. Write a JavaScript function which will take an array of numbers stored and find the 
      second lowest and second greatest numbers, respectively. Sample array : [1,2,3,4,5] 
      Expected Output : 2,4*/

      var arrayNumbers = [1,2,3,4,5];
      var seconds = [];

      var sort = function() {
      	for (i = 0; i < arrayNumbers.length; i++) {
      		if(arrayNumbers[i] == 2 || arrayNumbers == 4) {
      			seconds.push(arrayNumbers[i]);
      		}
      	}
      }
   //Review answer
      function returnNumbers(arrayOfNums) {
        function sortNumber(a,b) {
          return a - b;
            }
            arrayOfNums.sort(sortNumber);
            return arrayNumbers[1] + ", " + arrayNumbers[arrayOfNums.length - 2];
      }
      returnNumbers(1,2,3,4);

/* 5. Write a JavaScript function that accepts two arguments, a string and a letter and 
      the function will count the number of occurrences of the specified letter within the 
      string. Sample arguments : 'Listen to the river sing sweet songs, 'o' 
      Expected output : 1*/
	  var letterArray = [];

	  var occurrences = function(string, letter) {
      		var stringArray = string.split('');
      		for (i = 0; i < stringArray.length; i++) {
      			if(stringArray[i] == letter) {
      				letterArray.push(stringArray[i]);
      			} else {

      			}
      		}
      }
	  occurrences('Listen to the river sing sweet songs', 'o');
	  console.log(letterArray.length);
//Review answer

      function countLetter(aStr, letter){
            //split every character of the string into an array
            var arrayOfCharacters = aStr.split('');
            var count = 0;
            //loop through array to count every instance of that letter
            for (var i = 0; i < arrayOfCharacters.length; i++) {
            // arrayOfCharacters[i] is every element
              if(arrayOfCharacters[i] === letter) {
                  count ++
            }
            }
      }
      return count; 

      countLetter('this is a sentece', 'i');

/* 6. Write a JavaScript function that accept a list of country names as input and returns 
      the longest country name as output. Go to the editor Sample function : 
      LongestCountryName(["Australia", "Germany", "United States of America"]) 
      Expected output : "United States of America"*/
      var longestName = function(country1, country2, country3) {
      	if (country1.length > country2.length && country1.length > country3.length) {
      		console.log(country1);
      	} else if (country2.length > country3.length) {
      		console.log(country2);
      	} else {
      		console.log(country3);
      	}
      }
      longestName("Australia", "Germany", "United States of America");

      //Review Answer
      function returnLongestWord(arrayOfStrings){
        var longestWord = '';
          for (var i = 0; i < arrayOfStrings.length; i ++) {
            if (arrayOfStrings[i].length > longestWord.length) {
                  longestWord = arrayOfStrings[i];
            }
          }
          return longestWord;
      }

/* 7. Write a JavaScript function that reverse a number. Example x = 32243; 
      Expected Output : 34223*/
      var firstNumber = 32243;
      //convert number to a string
      var firstArray = firstNumber.toString();
      //empyt array for reversed order
      var reverseArray = [];
      //function to split number into an array
      var reverse = firstArray.split('');
        for(var i = 0; i < reverse.length; i++ ) {
            //push into reverseArray by adding to the front of the array on each loop
             reverseArray.unshift(reverse[i]);
      } 
      //join reverseArray into a single string
      var reverseString = reverseArray.join("");
      //convert string into number
      var reverseNumber = ??
      console.log(reverseNumber);

      //Review Answer
      function reverseNumber(number){
        return parseInt(number.toString().split('').reverse().join(''));
      }
      reverseNumber(32243);

