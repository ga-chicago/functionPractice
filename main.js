for(var i = 0; i <=10; i++){

	for(var k = 0; k <=10; k++){


		console.log(i + "*" + k + "=" + i * k);
	}
}

var assignGrade = function(score){

	if(score >=90){
		return "A";

	}
	else if(score >=80 && score <= 89){

		return "B";

	}
	else if(score >=70 && score <= 79){

		return "C";

	}
	else if(score >=60 && score <= 69){

		return "D";

	}
	else{

		return "F";

	}
}


assignGrade(50);
assignGrade(76);
assignGrade(80);
assignGrade(99);

for(var i = 60; i <=100; i++){

	console.log("For " + i + ", you got a " + assignGrade(i));

}

var tellFortune = function(children, partner, local, job){

	console.log("You will be a " + job + " in " + local +", and married to " + partner + " with " + children + " kids.");



}

tellFortune(2, "stacey", "chicago", "MD");
tellFortune(3, "becky", "la", "Actor");
tellFortune(5, "susie", "kansas", "farmer");

var find = function(array){

	array.sort(function(a, b) {
  return a - b;
});
	x= array.length -2;
	console.log(array);
	console.log(array[1] + "," + array[x]);




}

var arr =[1,2,4,5,7,6,13];
find(arr);

var findRepeat = function(input, character){

	var count= 0;

	var array = input.split("");

	for(var i = 0; i < array.length; i++){

		if(array[i] === character){

			count++;
		}
	}

	return count;


}

findRepeat("Listen to the river sing sweet songs" , "o");

var longestCountry = function(array){

	var longest="";

	for(var i = 0; i <array.length; i++){

		if(array[i].length > longest.length){

			longest = array[i];
		}
	}

	console.log(longest);
}

var y = ["Australia", "Germany", "United States of America"];

longestCountry(y);

var numReverse = function (num){

	num = num + "";
	return num.split("").reverse().join("");

}

numReverse(32243);



