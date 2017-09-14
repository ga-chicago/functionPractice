console.log("hello world")

//1

for (var i = 0; i <= 10; i++){
	console.log(i * 9);
} for (var j = 1; j <=10; j++){
		console.log(j * j);
}
//unsure how t nest it properly with out having the seconf loop run through i in the first loop;

//2

function assignGrade(scoreNum) {
	if (scoreNum >= 90){
		return "A";
} else if (scoreNum >= 80){

		return "B";
} else if (scoreNum >= 70){
		return "C";
} else if (scoreNum >= 60){
		return "D";
} else {
		return"F";
	}
}
//3
function gradeReuslt() {

	if(scoreNum  <= 100 && scoreNum >= 90){
	return 'For ' + scoreNum + ', you got an A.';
	} else if(scoreNum  <= 89 && scoreNum >= 80){
	return 'For ' + scoreNum + ', you got an B.';
	} else if(scoreNum  <= 79 && scoreNum >= 70){
	return 'For ' + scoreNum + ', you got an C.';
	} else if(scoreNum  <= 69 && scoreNum >= 60){
	return 'For ' + scoreNum + ', you got an D.';

	}
}


//4

function tellFourtune(children, partner, city, job){

	this.childNum = children || [];
	this.partnerName = partner || [];
	this.city = city || [];
	this.job = job || [];
	
	return ('You will be a ' + this.job + ' in ' + this.city + ', and married to ' + this.partnerName + 'with ' + this.childNum + ' kids.');
};

//5


function lowGreat(numArray){

// remove duplicates 
noDuplicateArray = numArray.filter(function (item, pos) {
    return numArray.indexOf(item) == pos;
});

	
	noDuplicateArray.sort(function(numArray,noDuplicateArray){ //call back function...gets called on this function
		return numArray;
	});
	
	var lowest = noDuplicateArray[1];
	var highest = noDuplicateArray[noDuplicateArray.length - 2];
	

	var finalAnswer = lowest + ', ' + highest;

	return finalAnswer

}


//6

function letterCount(string, letter){
var count = 0;
var string = string.split('');
 for (var i=0; i < string.length; i += 1) {
        if (string[i] === letter) {
            return count += 1;
        }
    }
  }

 //7

 function longestCountryName(countryArray){

	var sortArray = countryArray.sort(function(a,b){return b.length - a.length});

 return console.log(sortArray[0]);

}

//8

function reverse(number){
	var x = number;
	var string = x.toString();
	var newNumber = string.split("").reverse().join("");
	return Number(newNumber);

}








