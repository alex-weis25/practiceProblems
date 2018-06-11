/*
Question 2: decodeStrings
  The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

  For s = "4[ab]", the output should be decodeString(s) = "abababab"
  For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/

/*
  Helper function to find the new index to use after recursive function returns a decoded value.
  this function takes in the current index and looks for the index of the corresponding ']' to the '[' that initiated the recursive call. If there are multiple '[' ']' pairs, it increments and decrements openBrackets variable to keep track of which ']' matches the initial '['.
*/
const findNewIdx = (str, start) => {
  let openBrackets = 0;

  for (let i = start; start < str.length; i++){
    let current = str[i];
    if (current === ']' && !openBrackets){
      return i + 1;
    } else if (current === ']'){
      openBrackets--;
    } else if (current === '['){
      openBrackets++;
    }
  }
};

// Option to make code DRY => import buildStr from sortByStrings
  // const { buildStr } = require('./1.js');
// Helper function to build string given occurences
const buildStr = (number, string) => {
  let returnStr = '';

  while (number > 0){
    returnStr += string;
    number--;
  }
  return returnStr;
};

/*
  decodeStrings explanation - recursive solution
  This function loops through the input string, building either a string of characters or a number value that is used to construct the final decoded value. Once an open bracket is found, the function calls itself recursively and begins the process again.
  When decodeStrings reaches a ']', it ends the current recursive call and passes in the current string and occurence to buildStr, returning a decoded value that is added to the previous call stack's decoded value.
  Because the previous recursive function on the callstack's strIdx is 'behind' in terms of which values in the string have already been visited, findNewIdx is used to 'fast-forward' the strIdx to the corresponding
  ']' that ended the recursive call. This process continues until strIdx is equal to the length of the input string.
*/

const decodeStrings = (inputStr, strIdx = 0, startStr = '', occurences = 0) => {
  let numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let decoded = '';
  let newOccurences = '';

  while (strIdx < inputStr.length){
    let current = inputStr[strIdx];
    if (inputStr[strIdx] === ']'){
      let endStr = buildStr(occurences, decoded);
      strIdx++;
      return endStr;
    } else if (numbersArr.indexOf(+current) > -1){
      newOccurences += current;
      strIdx++;
    } else if (current === '['){
      strIdx++;
      decoded += decodeStrings(inputStr, strIdx, decoded, +newOccurences);
      strIdx = findNewIdx(inputStr, strIdx);
      newOccurences = 0;
    } else {
      decoded += current;
      strIdx++;
    }
  }
  return decoded;
};

module.exports = decodeStrings;
