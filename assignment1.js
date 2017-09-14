//1- cant display full function
for( i = 0; i < 11; i++) {

	console.log(i + ' * 9' + ' = ' + i *9)
}



//2

const assignGrade = (grade) => {
	if(grade >= 89) {
		console.log("Congrats, you received an A!")

	} else if(grade >= 79) {
		console.log("Congrats, you received a B!")
	} else if(grade >= 69) {
		console.log("You received a C!")
	} else if(grade >= 59) {
		console.log("Dude, you received a D.")
	} else {
		console.log("Get out. Leave. You failed me, or rather, I have failed you!")
	} 
};



//3 
^^^


//4

const tellFortune = (children, spouse, location, occupation) => {
	alert('You will be a ' + occupation + " in " + location + ', and married to ' + spouse + " with " + children + ' kids.')

}

 
tellFortune (5, 'Maria', 'Chicago', 'Developer')
tellFortune (0, 'Oprah', 'LA', 'Sugar Baby')
tellFortune (2, 'Claudia', 'Paris', 'Philantropist')



//5






//6




//7



//8



const shakira = (arr) => {
	let lowest = [];
	let highest = [];

	for (i = 0; i < arr.length; i++){
		if (arr[i] >= arr) {
			highest.push(arr[i])
		} else if(arr[i] >= arr) {
			lowest.push(arr[i])
		}

	alert(lowest + ' , ' + highest)

	}
}

 shakira ([1,2,3,4,5])



//9



const sense = (song, letter) => {
	let occurrence = 0;

	for( i = 0; i < song.length; i ++) {
		if(song[i] === letter) {
			occurrence += 1;
		}
	}
	return occurrence
}

sense ("the wheels on the bus go up and down, up and down, up and down", 'u');




//10

const land = (world) => {
	let longest = ""
	let long

	for (i = 0; i < world.length; i++){
		if(world[i].length >= ){
			longest = world[i]
		}
	}

return longest

}

land ([Mexico], [Cuba], [United States],  [Peru])




//11


const reverse = (string) => {
	let mirror = "";

	for( i = string; i <= string.length; i--) {
		mirror += sting[i];
	}
	return mirror

}









