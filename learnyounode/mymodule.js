// mymodule.js - used for #6 -- called by modular

/*  snippets:

You must write a module file to do most of the work. The module must 
export a single function that takes three arguments:
* the directory name,
* the filename extension string and
* a callback function, in that order. 

These four things are the contract that your module must follow.

* Export a single function that takes exactly the arguments described
* Call the callback exactly once with an error or some data as described
* Don't change anything else, like global variables or stdout
* Handle all the errors that may occur and pass them to the callback

The benefit of having a contract is that your module can be used by 
anyone who expects this contract. So your module could be used by anyone 
else who does learnyounode, or the verifier, and just work.

*/

// Yuck... using module.exports this way means that I can't name the 
// function to something useful, or to include multiples.  But, it's an
// *absolute* requirement of the learnyounode script to pass #6, so,
// I'll abide by it... this time.
//
module.exports = function (pathname, extname, callback) 
{
	//take pathname, extname, read the directory's files,
	//filter for extname endings, and return an array of files as the 
	//data back to the callback.
	//If errors are encountered, pass the error to the callback instead.

	//required libaries/modules:
	var fs = require('fs');
	var path = require('path');
	var filteredFiles = []; //init empty array

	fs.readdir(
		pathname, // \path\to\files\here
		function (err, files) { // inline callback function
			if (err) {
				return callback(err, null);
			} else { //files is valid, and will be an array of files.
				//loop array, print each that is the proper extension.
				for (index in files) {
					if (path.extname(files[index]) === '.' + extname) {
						filteredFiles[filteredFiles.length] = files[index];
					}
				}
				return callback(null, filteredFiles);
			}
		}//end inline fn callback
	);

}

