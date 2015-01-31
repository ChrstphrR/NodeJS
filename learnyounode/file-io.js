// #3 - file-io.js
/*
Write a program that uses a single synchronous filesystem operation to 
read a file and print the number of newlines it contains to the console 
(stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-
line argument.
*/


var fs = require('fs');

//Get file name from command line, 1st parameter passed to this file:
//nodejs file-io.js /path/to/filenamehere
filename = process.argv[2];

var fileAsString = fs.readFileSync(filename).toString();
// need to split this up, counting newlines as we go.

//tokenStrings is now an array of strings (some may be null/ "")
var tokenStrings = fileAsString.split('\n');
// As stated in the hints, the number of tokens might not match the
// number of newlines - we need to check the last character in 
// fileAsString to check if we'll be off by one.
var newLineCount = tokenStrings.length;

//endsWith is an EDMAscript 6 proposal, not implemented yet, sadly.
//if (!fileAsString.endsWith('\n')) { 
if (!fileAsString[fileAsString.length -1] == '\n') {
	newLineCount = newLineCount -1;
}

console.log(newLineCount);

//end of program.
