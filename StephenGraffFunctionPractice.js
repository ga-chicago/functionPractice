
//1.
for(let i = 0; i < 10; i++){
	console.log(i + " * 9 = " + i * 9)
}



//2.
const assignGrade = (x) => {
 if(x >= 90){
		return "A"
	}else if (x >= 80){
	 	return "B"
	}else if (x >= 70){
	 	return "C"
	}else if (x >= 60){
	 	return "D"
	}else {
	 	return "F"
	 }

};
//3.
for(let i = 60; i <= 100; i++){
	console.log("For " + i + ", you got a " + assignGrade(i) +".")
}