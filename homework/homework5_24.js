// HOMEWORK 5-24 ////////////////////////////////////////////////

// #1 //

for (var i = 0; i < 10; i++){
	console.log(i * 9)
}


// #2, 3 **

function assignGrade(score){
	if (score < 60)
		return "F"
	}else if(score < 70){
		return "D"
	}else if(score < 80){
		return "C"
	}else if(score < 90){
		return "B"
	}else(score < 100)
		return "A"
}

console.log("For " + score + " you got a " + return)



// #4, 5, 6, 7 //

function tellFortune(kids, partner, location, job){
	return "You will be a " + job + " in " + location + " and married to " + partner + " with " + kids + " kids"
}

tellFortune("3", "John", "Chicago", "Designer")
tellFortune("5", "Tom", "Paris", "Painter")
tellFortune("2", "David", "New York", "Developer")


// #8 //

function secondGreatestLowest(num){
  	num.sort(function(x,y){
           return x-y;
          });
  	var unique = [num[0]];
  	var result = [];
  
  	for(var i=1; i < num.length; i++){
    	if(num[i-1] !== num[i])
    	{
      	unique.push(num[i]);
    	}
  	}
    result.push(unique[1],unique[unique.length-2]);
  	return result.join(',');
  }

console.log(secondGreatestLowest([1,2,3,4,5]));
//returns 2, 4


// #9 //

function charCount(str, letter){
 	var letterCount = 0;
 		for (var i = 0; i < str.length; i++) 
 		{
    	if (str.charAt(i) == letter) 
      	{
      	letterCount += 1;
      	}
  	}
  	return letterCount;
}

charCount("John", "J")
//returns 1


// #10 //

function longestCountryName(country){
	var n = country.length
	return n + " letters in this country"
}


// #11 //

function reverseANumber(n){
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverseANumber(32243));










