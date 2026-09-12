console.log("Module 104 - File Operations starting...")
console.log("********Uncomment the code to run it********")
console.log("\n Module 1 - Read and Write a File")

import fs from "fs";

function readAFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            console.log('File content:', data);
        }
    });
}
//readAFile("common-pitfalls.js");

console.log("Module 2 - Write a File")
function writeAFile(filename, content) {
    fs.writeFile(filename, content, function (err) {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File written successfully');
        }
    });
}
//writeAFile("test-file-write.txt", "This is a test file, write 1");

console.log("Module 3 - Append to a File")
function appendToAFile(filename, content) {
    fs.appendFile(filename, content, function (err) {
        if (err) {
            console.error('Error appending to file:', err);
        } else {
            console.log('File appended successfully');
        }
    });
}
//appendToAFile("test-file-write.txt", "\nThis is a test file, append 1");

console.log("Module 4 - Read a File and Write to another File")
function readAndWriteAFile(inputFile, outputFile) {
    fs.readFile(inputFile, "utf-8", function (err, data) {
        if (err) {
            console.error("Error reading file: " + inputFile + " " + err);
        } else {
            console.log("File read successfully from " + inputFile);
            fs.writeFile(outputFile, data, function(err) {
                if (err) {
                    console.error("Error writing file: " + outputFile + " " + err);
                } else {
                    console.log("File written successfully to " + outputFile);
                }
            });
        }
    });
}
//readAndWriteAFile("common-pitfalls.js", "test-file-common-pitfalls.js");

console.log("Module 5 - Perform A OS Directory Operation")
import fsp from "fs/promises";
async function commonDirectoryOperation(directoryPath) {
    try {
        const files = await fsp.readdir(directoryPath);
        console.log("Files in " + directoryPath + ":", files);
        const exists = await fsp.access(directoryPath+"/"+"test-file-common-pitfalls.js").then(() => true).catch(() => false);
        if (exists) {
            console.log("File exists : test-file-common-pitfalls.js");
            fs.readFile(directoryPath+"/"+"test-file-common-pitfalls.js", "utf-8", function(err, data) {
                if (err) {
                    console.error("Error reading file: " + directoryPath+"/"+"test-file-common-pitfalls.js" + " " + err);
                } else {
                    console.log("File content is:", data);
                }
            });
        } else {
            console.log("File does not exist : test-file-common-pitfalls.js");
        }
    } catch (err) {
        console.error("Error reading directory: " + directoryPath + " " + err);
    }
}
//commonDirectoryOperation(".");

console.log("Module 6 - File Search Regex Expression Matching")
function checkStringForRegex(string, regex) {
    return regex.test(string);
}
//console.log(checkStringForRegex("Hello, world!", /Hello/));
/*
common character search using regex
/w matches any word character (alphanumeric + underscore)
/W matches any non-word character
/d matches any digit
/D matches any non-digit
/s matches any whitespace character
/S matches any non-whitespace character
/b matches a word boundary
/B matches a non-word boundary
/A matches the beginning of the string
/Z matches the end of the string
i flag makes the regex case insensitive
g flag makes the regex global (find all matches)
m flag makes the regex multiline (find matches across multiple lines)
s flag makes the regex singleline (find matches on a single line)
x flag makes the regex verbose (ignore whitespace and comments)
u flag makes the regex unicode (match unicode characters)
y flag makes the regex sticky (match from the current position)

+ quantifier matches the preceding element one or more times
* quantifier matches the preceding element zero or more times
^ matches the beginning of the string
$ matches the end of the string
? quantifier matches the preceding element zero or one time
{n} quantifier matches the preceding element exactly n times
{n,m} quantifier matches the preceding element between n and m times
{n,} quantifier matches the preceding element at least n times
{n,m} quantifier matches the preceding element between n and m times
{n,m} quantifier matches the preceding element between n and m times

*/

function checkRegexExistsInFileSync(filename, regex) {
    fs.readFile(filename, "utf-8", function(err, data) {
        if (err) {
            console.error("Error reading file: " + filename + " " + err);
        } else {
            console.log("File read successfully from " + filename);
            const matches = data.match(regex);
            if (matches) {
                console.log("Regex matches found in file: " + filename);
                console.log(matches);
                return matches;
            } else {
                console.log("Regex matches not found in file: " + filename);
            }
        }
    });

}
//
//checkRegexExistsInFileSync("test-file-write.txt", /this/gi);

async function checkRegexExistsInFileAsync(filename, regex) {
    try {
        const data = await fsp.readFile(filename, "utf-8");
        const matches = data.match(regex);
        if (matches) {
            console.log("Regex matches found in file: " + filename);
            console.log(matches);
            return matches;
        } else {
            console.log("Regex matches not found in file: " + filename);
            return []
        }
    } catch (err) {
        console.error("Error reading file: " + filename + " " + err);
    } finally {
        console.log("Completed Async Operation");
    }
}
checkRegexExistsInFileAsync("test-file-write.txt", /this/gi);
let matches = await checkRegexExistsInFileAsync("test-file-write.txt", /this/gi);
console.log("Total matches found: " + matches.length);

