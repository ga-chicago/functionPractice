//1.

for (var i = 0; i <= 10; i++) {
	console.log(i + " * 9 = " + i * 9)
}

//2.
var assignGrade = function(x) {
	if (x >= 90) {
	console.log("A")
	} else if (x >= 80){
		console.log("B")
	} else if (x >= 70){
		console.log("C")
	} else if (x >= 60){
		console.log("D")
	} else {
		console.log("F")
	}
};

//3.
for (var i = 60; i < 100; i++) {
	assignGrade(i);
	console.log("For " + i + ", you got a " + assignGrade[i])
}

//4, 5, 6, 7
var tellFortune = function(numberOfKids, partnerName, location, job) {
	console.log("You will be a " + job + " in " + location + ", and married to " + partnerName + " with " + numberOfKids + " kids.")
};
tellFortune (3, "Bill", "Tucson", "lawyer");
tellFortune (2, "Laura", "Chicago", "Candy Maker");
tellFortune (5, "Maggie", "Amsterdam", "Balloon Popper");

//8
var secondLowestGreatest = function(){

}

//9
var getFrequency = function(string, character) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    console.log(freq);
};

//10

	var longestCountryName = function (array) {
		var longest = "";

		array.forEach(function(string) {
			if (string.length > longest.length) {
			longest = string;
			}	

		});
		console.log(longest);
  }

//11
var reverse = function (n) {
    for(var r = 0; n; n = Math.floor(n / 10)) {
        r *= 10;
        r += n % 10;
    }
    return r;
};
