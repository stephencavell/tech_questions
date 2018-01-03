//Find the most frequent integer in an array

//Helper Functions

//Lets create a function that makes a random sized array with size and range as passing arguments.
function random_array_ints(size, range) {
    
    let random_array = []; 
    
    for(let i = 0; i < size; i++) {
	random_array.push(Math.floor(Math.random() * range));
    }
    
    return random_array;
}

//Function just to see random_array function working.
function test_random_array() {
    
    for(let i = 0; i < 20; i++){
	
	let size = Math.floor(Math.random() * 1000);
	let range = Math.floor(Math.random () * 1000);
	let random_array = random_array_ints(size, range);
	
	console.log('Array #'+i+':['+random_array+']\nThis is an array of size: '+size+' and range: '+range);
    }
}
    
//Lets create our solving function that takes in an array as an argument and returns a two value object detailing the repeating element and its frequency.
function repeat_offender(array) {
    
    let repeater;
    let count = 1;
    
    for(let i=0; i<array.length-1; i++){

	let element = array[i];
	let temp_count = 1;
	
	for(let j=i+1; j<array.length-1;j++) {
	    if(element === array[j]){
		temp_count++;
	    }
	    if(temp_count > count){
		repeater = element;
		count = temp_count;
	    }
	}
    }

    let couple = {
	element: repeater,
	count: count
    }    
    return couple;
}

//Now lets create a test for our repeat offender function

function repeat_offender_test() {
    
    //run 10 tests
    for(let i=1; i < 11; i++){
	//create array
	let array = random_array_ints(i*10, i*10);
	//run repeat_offender
	let answer = repeat_offender(array);

	console.log('The array is: ['+array+'\n the most frequent element is: '+answer.element+', with a frequency of '+answer.count);
    }
}

//Where the *Magic* happens.
repeat_offender_test();