const findCharIndex = (str, char) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
};

const concatenateStrings = (str1, str2) => {
  return str1 + str2;
};

const reverseString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

const isPalindrome = (str) => {
  const reversed = reverseString(str);
  return str === reversed;
};

const toLowerCase = (str) => {
  let lowercased = "";
  for (let i = 0; i < str.length; i++) {
    lowercased += str[i].toLowerCase();
  }
  return lowercased;
};

const toUpperCase = (str) => {
  let uppercased = "";
  for (let i = 0; i < str.length; i++) {
    uppercased += str[i].toUpperCase();
  }
  return uppercased;
};

let myString = "Hello, World!";
console.log("Original String:", myString);

console.log("Index of 'o' in the string:", findCharIndex(myString, "o"));

let newString = concatenateStrings(myString, " How are you?");
console.log("Concatenated String:", newString);

let reversedString = reverseString(myString);
console.log("Reversed String:", reversedString);

console.log("Is the string a palindrome?", isPalindrome(myString));

let lowercasedString = toLowerCase(myString);
console.log("Lowercased String:", lowercasedString);

let uppercasedString = toUpperCase(myString);
console.log("Uppercased String:", uppercasedString);
