for (var i = 0; i <= 10; i++){
	console.log(i * 9)
}

var assignGrade = function(score){
	if (score < 60){
		return "F"
	} else if(score < 70){
		return "D"
	} else if(score < 80){
		return "C"
	} else if(score < 90){
		return "B"
	} else{return "A"}
}

for (var i = 60; i <= 100; i++){
	console.log("For " +  i + " your grade is " + assignGrade(i))
}

var tellFortune = function(kids, partner, location, job){
	return "You will be a " + job + " in " + location + " and married to " + partner + " with " + kids + " kids."
}
tellFortune(2, "john", "Japan", "Jockey")
tellFortune(3, "Paul", "Paris", "painter")
tellFortune(4, "Laura", "London", "Lawyer")

var numberArray = [6, 3, 5, 2, 1]

var highLow = function(){
	numberArray.sort(function(a, b){
		return a - b;
	})
	return numberArray[numberArray.length - 2] + ", " + numberArray[1]
}

var letters = function(words, letter){
	var instances = [];
	var lower = words.toLowerCase();
	for(var i = 0; i < lower.split('').length; i++){

		if (lower.split('')[i] === letter){
			instances.push(lower.split('')[i])
		}
	}

	return instances.length
}

var ctry = ['france', 'united states', 'germany', 'russia']



var longName = function(countries){
	var lgth = 0;
	var longest;
	for(var i = 0; i < countries.length; i++){
		if(countries[i].length > lgth){
			lgth = countries[i].length;
			longest = countries[i]
		}
	}
	return longest
}

var flip = function(number){
	console.log(number.toString().split("").reverse().join(""));
}






