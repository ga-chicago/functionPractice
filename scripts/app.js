var multiplier = 9;
for (var i = 0; i <= 10; i++) {
	var result = multiplier * i;
	console.log(multiplier + ' * ' + i +' = ' + result);
}


function assignGrade(score) {
    if (score > 90) {
        return score + ' returns A';
    } else if (score > 80) {
        return score + ' returns B';
    } else if (score > 70) {
        return score + ' returns C';
    } else if (score > 65) {
        return score + ' returns D';
    } else {
        return score + ' returns F';
    }
}

for (var i = 60; i <= 100; i++){
	console.log('For ' + i + ', you got a ' + assignGrade(i));
}


function tellFortune(numChildren, partner, location, job){
	var future = 'You will be a ' + job + ' in ' + location + ' and married to ' + partner + ' with ' + numChildren + ' kids.';
		console.log(future);
}
	
	tellFortune(2, 'Joni', 'Seattle', 'web designer');
	tellFortune(3, 'Mary', 'Phoenix', 'surgeon');
	tellFortune(5, 'Kim', 'Chicago', 'Rapper');



function characters(string, letter){
	var letterCount = 0;
	for (var position = 0; position < string.length; position++){
    if (string.charAt(position) == letter){
      letterCount += 1;
    }
  }
  return letterCount;
}
console.log(characters('Arbys we have the meat', 'e'));



function longestCountryName(name){
	return name.reduce(function(longName, country){
		return longName.length > country.length ? longName : country;
	},
	"");
}
console.log(longestCountryName(['Australia', 'Philippines', 'Japan']));









function reverseNumber(x){
	x = x + "";
	return x.split("").reverse("").join("");
}
console.log(reverseNumber(123456789));














