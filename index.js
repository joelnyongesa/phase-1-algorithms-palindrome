function isPalindrome(word) {
  // Write your algorithm here
  // Create two arrays to store the words, one to store the words and the other to store the words in a reversed manner
  let wordArray = [...word] 
  let wordArrayReversed = structuredClone(wordArray).reverse() //Deep copy

  // Join the two arrays, then compare them.
  if (wordArray.join('') === wordArrayReversed.join('')){
    // return true
    return true
  } else{
    // return false
    return false
  }
}


/* 
  Add your pseudocode here
  Create an array to store the words 
  Create another array to store the words, in a reversed manner.
  Compare the two arrays after joining them to see if they match:
    if they match:
      return true
    else:
      return false
*/

/*
  Add written explanation of your solution here
  The isPalindrome() function takes a word as a parameter.
  Create an array to store the single elements of the word.
  Create another array of reversed array created in previous step.
  Loop over the individual elements of the array, if they are equal, return true
  If the individual elements are not equal, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
