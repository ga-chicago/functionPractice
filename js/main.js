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

//3

	if(scoreNum  <= 100 && scoreNum >= 90){
	return 'For ' + scoreNum + ', you got an A.';
		
	}
}



//4

var fortunes = {
	childNum:['1','2','3',],
	partnerName: ['Carmen','Alex','Sarah'],
	city: ['Chicago','Miami', 'New York'],
	job: ['Developer', 'DJ','Chef'],


tellFortune:function(children, partner, location, job){
	return ('You will be a ' + this.job + ' in ' + this.city + ', and married to ' + this.partnerName + 'with ' + this.childNum.push() + ' kids.');
},
}


//5



function lowGreat(numArray){
	numArray = []
	return Math.max.apply(null, numArray);

}






