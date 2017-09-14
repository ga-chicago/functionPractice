function times9(){
for (var i = 0; i <= 10; i++) {
answer = i * 9
console.log(answer)
}
};

function assignGrade(score){
  if (score >= 90) {
    return 'A'
  }
  else if (score >= 80 && score < 90) {
    return 'B'
  }
  else if (score >= 70 && score < 80) {
    return 'C'
  }
  else if (score >= 60 && score < 70) {
    return 'D'
  }
  else {
    return 'F'
  }
};

function tellFortune(children, partner, location, title) {
  return 'you will be ' + title + ' in ' + location + ' and married to ' + partner + ' with ' + children + ' kids.'
};






function secondPlaceMin(numbers) {

  var min = Math.min.apply(null, numbers);
  numbers.splice(numbers.indexOf(min),1);
  return Math.min.apply(null, numbers)
}

function secondPlaceMax(numbers) {

  var max = Math.max.apply(null, numbers);
  numbers.splice(numbers.indexOf(max),1);
  return Math.max.apply(null, numbers)
}

function secondMinMax(numbers){
  var min = secondPlaceMin(numbers);
  var max = secondPlaceMax(numbers);
  return [min,max];
}



function listen(string, letter) {
  var letterCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      letterCount += 1;
    }
  }
  return letterCount;
}


function longestCountry(countryName){
  var longestName = countryName[0];
  for (var i = 0; i < countryName.length; i++) {
    if(countryName[i].length > longestName.length)
    longestName = countryName[i]
  }
  return longestName;
};


function backWards(digits){
digits = digits + "";
return digits.split("").reverse().join("");
return digits
};
