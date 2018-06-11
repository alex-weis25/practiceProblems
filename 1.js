/*
Question 1: sortByStrings
  Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".
*/

// Helper function used to keep track of unique letter occurences
const createHash = string => {
  let stringHash = {};

  for (let i = 0; i < string.length; i++){
    let current = string[i];
    if (!stringHash[current]){
      stringHash[current] = 1;
    } else {
      stringHash[current]++;
    }
  }
  return stringHash;
};

// Helper function to build string given occurences
const buildStr = (number, string) => {
  let returnStr = '';

  while (number > 0){
    returnStr += string;
    number--;
  }
  return returnStr;
};

/* sortByStrings
  This function creates a hash map with key-value pairs corresponding
  to each unique character in string s and the corresponding occurences of each letter. It then loops through each character in string t, checking to see if the current letter was also in s. If so, the function takes the key value pair from the hashmap and passes it to buildStr to concatenate the returned value to the final string.
*/

const sortByStrings = (s, t) => {
  const stringHash = createHash(s);
  let lettersSearched = {}; // Just in case there's repitition :)
  let returnValue = '';

  for (let i = 0; i < t.length; i++){
    let current = t[i];
    if (!lettersSearched[current]){
      lettersSearched[current] = true;
      if (stringHash[current]){
        let occurences = stringHash[current];
        returnValue += buildStr(occurences, current);
      }
    }
  }
  return returnValue;
};

module.exports = {
  sortByStrings,
  buildStr
  };
