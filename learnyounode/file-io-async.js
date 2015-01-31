// #3 - file-io-async.js
/*
Write a program that uses a single ASYNCHRONOUS filesystem operation to 
read a file and print the number of newlines it contains to the console 
(stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-
line argument.
 
Same as before... except using the normal convention of async calls,
and a function callback. 
 
*/


var fs = require('fs');

//Get file name from command line, 1st parameter passed to this file:
//nodejs file-io.js /path/to/filenamehere

fs.readFile(
	process.argv[2], //filename is the first parameter after the js file
	'utf8', //define the file encoding
	function (err, data) { 
		// inline callback function, run when the file read is complete.

		if (!err) { //data is valid, and will be a string.
			//get the count of newlines in the file.
			var newLineCount = data.split('\n').length -1;
			//output to console.
			console.log(newLineCount);
		}
	}
);

//end of program.
