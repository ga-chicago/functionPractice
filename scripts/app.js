
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
for (i = 1; i <= 10; i++) {
    for (m = 0; m <= 10; m++) {
    var result = i * m
    console.log(i + " * " + m + " = " + result)
}
}

// Write a function named assignGrade that: takes 1 argument, a number score(examle: 89 returns B). returns a grade for the score, either "A", "B", "C", "D", or "F". Call that function for a few different scores and log the result to make sure it works.
var assignGrade = function(score){
    if (score < 60){
        console.log("F")
    } else if (score >= 60 && score < 70){
        console.log("D")
    } else if (score >= 70 && score < 80){
        console.log("C")
    } else if (score >= 80 && score < 90){
        console.log("B")
    } else {
        console.log("A")
    }
}

assignGrade(62);
assignGrade(92);
assignGrade(76);


// Check the results of assignGrade function from the previous exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
for (score = 60; score >= 60 && score <=100; score++) {
    if (score >= 60 && score < 70){
       console.log("For " + score + ", you got a D.")
    } else if (score >= 70 && score < 80){
        console.log("For " + score + ", you got a C.")
    } else if (score >= 80 && score < 90){
        console.log("For " + score + ", you got a B.")
    } else {
        console.log("For " + score + ", you got a A.")
    }
}


/* Write a function named tellFortune that:
    Takes 4 arguments: number of children, partner's name, geographic location, job title.
    Tutputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
    Call that function 3 times with 3 different values for the arguments.
*/
var tellFortune = function(numberOfChildren, partnerName, geographicLocation, jobTitle){
    console.log("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids.")
}

tellFortune(8, "Bobby Lee", "Louisiana", "Dental Assistant");
tellFortune(0, "your job", "Tokyo", "CEO");
tellFortune(3, "Kitty", "London", "Research Analyst");


// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Sample array : [1,2,3,4,5] Expected Output : 2,4
var secondBest = function(array){
    var lowest = array[0];
    var secondLowest = array[0];
    var greatest = array[0];
    var secondGreatest = array[0];

    for (var i = 0; i < array.length; i++){

        if (array[i] > lowest){
            if (array[i] < secondLowest || lowest === secondLowest){
                secondLowest = array[i]
            } 
        } 

        else if (array[i] >= secondLowest){
            if(secondLowest > lowest && array[i] != lowest){
                secondLowest = lowest
             }
        } 

        else if (array[i] < greatest){
            if (array[i] > secondGreatest){
                secondGreatest = array[i]
            } 
        } 

        else {
            if(secondGreatest < greatest && array[i] != greatest) {
                secondGreatest = greatest
             } 
        } 
    }
    console.log(secondLowest + ", " + secondGreatest);
}
        

secondBest([2, 8, 4, 5, 6]); 


// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'Listen to the river sing sweet songs, 'o' Expected output : 1
var countOccurences = function(string, letter){
    var count = 0;
    for (var i = 0; i < string.length; i++){
        if (string.charAt(i) === letter){
             count++;
            }
        }
    console.log(count);
    }

countOccurences("Everybody needs a nemesis. Sherlock Holmes had his Dr. Moriarty.", "e");
countOccurences("Mountain Dew has its Mello Yello.", "t");
countOccurences("Even Maggie has that baby with the one eyebrow.", "a"); 


// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor Sample function : LongestCountryName(["Australia", "Germany", "United States of America"]) Expected output : "United States of America"
var findLongestName = function(array) {
    var longestCount = 0;
    var longestName
    for(var i = 0; i < array.length; i++) {
        if(array[i].length > longestCount) {
        longestCount = array[i].length
        longestName = array[i]
        }
    }
    console.log(longestName);    
}

findLongestName(["Australia", "Germany", "United States of America"]);


// Write a JavaScript function that reverse a number. Example x = 32243; Expected Output : 34223
var reverseReverse = function(number){
    numberString = number.toString();
    console.log(numberString.split("").reverse().join(""));
}

reverseReverse(32243);














