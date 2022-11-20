// Assignment code here
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numbersCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passwordLength = "";

// var length = Number(prompt("How long would you like your password to be?", ""));
//min length = 8 characters; max length = 128 characters
// var specialSelect = confirm("Do you want to include special characters?");
// var numberSelect = confirm("Do you want to include numbers?");
// var upperSelect = confirm("Do you want to include uppercase characters?");
// var lowerSelect = confirm("Do you want to include lowercase characters?");

//create loop based on selected arrays

//if every selection question gets a no/cancel, add alert to say "Please restart"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
