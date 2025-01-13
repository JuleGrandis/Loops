/*
    NB! There is absolutely no point to these tasks if you use AI or "google" to solve them.
    The point is to learn and practice, not to get the perfect answer.
*/

/* Task 1
    Using one for loop, create a list of the duplicate words in the string. Use as many lists as you need.
    "If the zookeeper had to choose, would the zookeeper choose to use the moose the zookeeper uses, or would the zookeeper choose to choose a new moose to use?"
*/
console.log("Task 1");
let input = "If the zookeeper had to choose, would the zookeeper choose to use the moose the zookeeper uses, or would the zookeeper choose to choose a new moose to use?";

let words = input.toLocaleLowerCase().replace(/[^\w\s]/g, '').split(' ');

let seenWords = [];
let duplicateWords = [];

for (let word of words) {
    if (seenWords.includes(word)) {
        if (!duplicateWords.includes(word)) {
            duplicateWords.push(word);
        }
    } else {
        seenWords.push(word);
    }
}

console.log(duplicateWords);
/* Task 2
    Using loops, combine the two arrays into one.
    Use arrays [] only, no other data structures.
    First array: ['a', 'b', 'c', 'd', 'e']
    Second array: [1.1, 2.2, 3.3, 4.4, 5.5]
*/
addSpacing(1);
console.log("Task 2");

let array1 = ['a', 'b', 'c', 'd', 'e'];
let array2 = [1.1, 2.2, 3.3, 4.4, 5.5];

let combinedArray = [];

for (let i = 0; i < array1.length; i++) {
    combinedArray.push(array1[i]);
    combinedArray.push(array2[i]);
}

console.log(combinedArray);

/* Task 3
    Using two nested for loops and an array of type char, create the following pattern as a string:
    *******
    *     *
    *     *
    *  *  *
    *     *
    *     *
    *******
*/
addSpacing(1);
console.log("Task 3");

let gridSize = 7;
let pattern = '';

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        if (i === 0 || i === gridSize - 1 || j === 0 || j === gridSize - 1) {
            pattern += '*';
        } else {
        pattern += ' ';

        }
    }
    pattern += '\n';
}

console.log(pattern);

/* Task 4
    Given the array of digits, create an array of the numbers missing from the sequence.
    Using loops, not built-in functionality.
*/
addSpacing(1);
console.log("Task 4")

let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206];
let missingNumber = [];

let maxNumber = digits[digits.length - 1];

for (let i = 1; i <= maxNumber; i++) {
    let found = false;
    for (let j = 0; j < digits.length; j++) {
        if (digits[j] === i) {
            found = true;
            break;
        }
    }
    if (!found) {
        missingNumber.push(i);
    }
}

console.log(missingNumber);
/* Task 5
    Find the length of the longest consecutive sequence of characters in the string below.
    Using only loops, no built-in functionality.
*/
addSpacing(1);
console.log("Task 5");

let sourceString = "aqcmhrtutdvmyiqcyoyktnfninieglriaqvuxktzkfvfncfrrhfpptgwnhrsbcyjaizodspxxenkcbzwbwnzmoibdjpfdgzpzhoqevdjrilkzayytwycigelbrnusgzeqpimcgcazegftxrnbxinfbpnoljovywqpkfbiamjpedhqfuunowldjnazyttfdpdcytcvhjw";

let currentSequence = 1;
let longestSequence = 0;

for (let i = 1; i < sourceString.length; i++) {
    if (sourceString[i] === sourceString[i - 1]){
        currentSequence++;
    } else {
        if (currentSequence > longestSequence) {
            longestSequence = currentSequence;
        }
        currentSequence = 1;
    }
}

console.log(longestSequence);
//#region Util Function
function addSpacing(lines = 1) {
    for (let i = 0; i < lines; i++){
    console.log("")
    }
    }
//#endregion