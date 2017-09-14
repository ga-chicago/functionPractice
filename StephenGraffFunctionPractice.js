
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
//4.-7.
const tellFortune =  (kids, partner, location, hobby) => {
	console.log("You will be a " + hobby + " in " + location + ", and married to " + partner + " with " + kids +  " kids.")
}

tellFortune(9,"Julianna", "Beverly", "real estate developer")
tellFortune(4,"Steve", "Naperville", "programmer and world traveler")
tellFortune(5,"Mary Jane", "Naperville", "President")

// 10.
const longestCountryName = (x) => {
  	var position;
  	var longest = 0;
  	for(let i = 0; i < x.length; i++) {
  		if(x[i].length > longest){ 
  			position = i 
  			longest = x[i].length
  		}
  	}
  		
  	return x[position]
}




