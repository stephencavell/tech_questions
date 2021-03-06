//Implement binary search of a sorted array of integers.
//I will be assuming that each value is unique.

//simplest base case array for testing
//let int_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


//binary_search function, takes in search value and array
//returns index of sought value or value not found message.
function binary_search(val, array) {
    
    let start = 0;
    let end = array.length - 1;
    let mid;

    while(start <= end) {
	//set mid
	mid = Math.floor((end+start)/2);
	//check if mid is the value
	if(array[mid] === val) {
	    return mid;
	}
	//if it isnt then split the array
	else if (array[mid] > val) {
	    end = mid-1;
	}
	else {
	    start = mid+1;
	}
    }
    
    return 'value not found';
}

//create testing function that tests numbers 0-9
function test_bs(array) {
    
    for(let i=array[0]; i <= array[array.length-1]; i++) {
	let result = binary_search(i, array);
	console.log('this is result '+i+': '+result);
    }
}

//testing array
let int_array = [-10, -4, -2, 0, 1, 2, 4, 5, 6, 8, 9, 10, 13, 14, 15, 16, 17, 18, 30];
test_bs(int_array);