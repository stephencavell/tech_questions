//Find the most frequent integer in an array

//Javascript refresher tests
var array = [0,1,2,3,4,5,6,7,8,9,10];
var random = Math.floor(Math.random() * 10);

console.log('The random is: ' + random);
console.log('The array is: ' + array);

//Helper Functions

//Lets create a function that makes a random sized array within the size of 100 indexes of random integers.

function random_array_ints(size, range) {
    let random_array = [];
    
    for(let i = 0; i < size; i++) {
	random_array.push(Math.floor(Math.random() * range));
    }

    return random_array;
}

function test_random_array() {

    for(let i = 0; i < 20; i++){
	let size = Math.floor(Math.random() * 1000);
	let range = Math.floor(Math.random () * 1000);
	let random_array = random_array_ints(size, range);
	console.log('Array #'+i+':['+random_array+']\nThis is an array of size: '+size+' and range: '+range);
    }
}
    

random_array = random_array_ints(10, 10);
console.log('This is the random array: ' + random_array);

test_random_array();