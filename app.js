
//part 1
var multiply = 9

for (i = 0; i <= 10; i++){
	var total = multiply * i;
	console.log(multiply + ' * ' + i + ' = ' + total);
}
//bonus
for (multiply = 0; multiply <= 10; multiply++) {
	for (i = 0; i <= 10; i++) {
		var total = multiply * 1
		console.log(multiply + ' * ' + i + ' = ' + total);
	}
}
//part 2
function grade(num){
	if (score > 90) {
        return 'a';
    } else if (score > 80) {
        return 'b';
    } else if (score > 70) {
        return 'c';
    } else if (score > 60) {
        return 'd';
    } else {
        return 'f';
    }
}
//part 3
for (var i = 60; i <= 100; i++) {
  console.log('For ' + i + ', you got a ' + grade(i));
}
//part 4/5/6/7
function tellFortune(job, loc, sigOther, kids) {
    var future = 'Psychic Zorba says you will be a ' + job + ' in ' + loc + ' and married to ' +
   sigOther + ' ' + ' with ' + kids + ' kids.';
    console.log(future);
}

tellFortune('lawer', 'spain', 'Drew Barrymore', 3);
tellFortune('entrepanuer', 'belize', 'tom of finland', 1);
tellFortune('manbearpig', 'my bedroom', 'that hottie jeffrey', 15);
//part 8
//not going to lie, i got fed up with trying this one, will work on it tomorrow
function midHighLow(arryNum){
  for(i = 1; i < arryNum.length; i++){
    if(arryNum[j-1] !== arryNumj]):

//part 9
function count(string,char) {
 var ret = new RegExp(char,"gi");
 return string.match(ret).length;
}

var str = "I'm the living swipe right on the mic, I'm a slut!";
console.log(count(str,'i'));


//part 10
//I know im super close here, but am not sure what part im missing to return the word, i could get the number to return but not the word 

function longCountry(arryCountry){
	var strSplit = arryCountry.split(' ');
	var longest = 0;
	var word;
	for (i = 0; i < strSplit.length; i++){
		if (strSplit[i].length > longest){
			longest = strSplit[i].length;
			word = longest[i]
		}
	}
return (word);
}

//part 11
function numReverse(n){
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(numReverse(123456677889));

