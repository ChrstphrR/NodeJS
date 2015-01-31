// #2 - babysteps.js
// accept input -- command line parameters -- 1+ numbers.

//process.argv contains the calling line, which will be an array in the format:
// [nodejs /path/to/babysteps.js 1 2 3] -- a 0-based array of strings
// convert the 2-4th parameters!


var sum = 0; //init sum
var endIndex = process.argv.length; 
// length gives a normal ordinal count, so this is always one over the
// Nth index for a zero-based array like process.argv

for (var index = 2; index < endIndex; index++) {
	sum = sum + Number(process.argv[index]);
}

console.log(sum);
