/**
 * Write a function that takes a string and returns the number of vowels in the string.
 * Vowels = "AEIOUaeiou"
 *
 * "Hello"; 2 vowels
 * "Goodbye Sad World"; 5 vowels
 *
 */

function numberOfVowels(str) {
  let numberOfVowels = 0;

  //   const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  const vowels = "AEIOUaeiou";
  for (char of str) {
    if (vowels.includes(char)) {
      numberOfVowels++;
    }
  }

  console.log(`There are ${numberOfVowels} vowels in ${str}`);
}

numberOfVowels("Goodbye Sad World");
