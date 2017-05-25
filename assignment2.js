//1.
//Iterate from 0 to 10, multiplying by 9 and logging
for (var i = 0; i <=10; i++){
    console.log(i * 9)
};
//Bonus: use nested for loop to multiplication table 1 to 10

//2.
var assignGrade = function (score){
    if (score > 89){
        return("A")
    } else if (score > 79 && score < 90){
        return("B")
        // at this point it is clear a loop needs to be made to make this DRY. But how?
    } else if (score > 69 && score < 80){
        return("C")
    } else if (score > 59 && score < 70){
        return("D")
    } else {
        return("F")
    }
};
assignGrade(42);
assignGrade(74);
assignGrade(100);
assignGrade(-20);

//3.
//run results from 60 to 100

for (var i = 60; i <= 100; i++) {
    console.log("For " + i + ", you got a " + assignGrade(i) + ".")
};

//4.
//make a fortune telling function that...
//takes child, partner, place, job,

var tellFortune = function (numChirrens, partnerName, geoLocation, jobTitle) {
    return "You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numChirrens + " kids."
};

//5.
//make function that grabs stored numbers and finds 2nd highest, 2nd lowest
var myArray = [8, 8, 8, 73, 7, 7, 7, 642, 6, 6, 6, 6, 57, 53, 5, 5, 5, 45, 4, 4, 34, 34, 34, 3, 3, 3, 3, 3, 3, 3, 26425, 235, 23, 23, 23, 2, 2, 2, 2, 12, 1];
//Could not figure this out without magestic Google
myArray.sort(function(a, b) {
    return a - b
});
myArray;
var numberTwoBestWorst = function (array) {
    //used (array.length - 2) because index includes 0 as first meaning 2nd last will be 2 away from last .length brings us
    var numberTwoBest = array[(array.length - 2)]
    var numberTwoWorst = array[1]
    return "2nd best is " + numberTwoBest + ", and 2nd worst is " + numberTwoWorst + "."
};
numberTwoBestWorst(myArray);

//6.
//make function that take 2 args - string and letter - function
//counts how often letter happens in string

var letterCount = function (string, letter) {
    var specialLetterCount = 0
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
         specialLetterCount += 1
        } else {
            specialLetterCount += 0
        }}
        return "Your letter occurs " + specialLetterCount + " times in this string."
};
letterCount("You are my sunshine", "a");

//6.
//make function that takes list of country names and returns longest one of em

var nations = ["USA", "Libya", "Mongolia"]
var countryNameLength = function (nationArray) {
    for (var i = 0; i < nationArray.length; i++){
        var nationLengthArray = {}
        nationLengthArray += nationArray[i].length
        return max(nationArray)
    }
};
countryNameLength(nations);

//7.
//make function that returns reversed number
var reverseNum = function (num) {
    //interested to see how this actually works
        return num.reversed()
    }
