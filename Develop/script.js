// Assignment code here
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numberCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passwordLength = "";
var passwordArray = "";

//min length = 8 characters; max length = 128 characters
var length = Number(prompt("How long would you like your password to be? Must be between 8 to 128 characters long."));
if (length < 8 || length > 128) {
  alert("Passwords must be between 8 to 128 characters long.");
} else {
  passwordLength = length;
}

//Checks if the user input from Number(prompt("")); matches what is stored in the variable passwordLength.
console.log(passwordLength);

var specialSelect = confirm("Do you want to include special characters?");
//If the user selects OK, the specialCharacters array will be added to the passwordArray using the Addition Assignment Operator.
if (specialSelect == true) {
  passwordArray += specialCharacters;
}

var numberSelect = confirm("Do you want to include numbers?");
//If the user selects OK, the numberCharacters array will be added to the passwordArray using the Addition Assignment Operator in addition to any existing arrays in passwordArray.
if (numberSelect == true) {
  passwordArray += numberCharacters;
}

var uppercaseSelect = confirm("Do you want to include uppercase characters?");
//If the user selects OK, the uppercaseCharacters array will be added to the passwordArray using the Addition Assignment Operator in addition to any existing arrays in passwordArray.
if (uppercaseSelect == true) {
  passwordArray += uppercaseCharacters;
}

var lowercaseSelect = confirm("Do you want to include lowercase characters?");
//If the user selects OK, the lowercaseCharacters array will be added to the passwordArray using the Addition Assignment Operator in addition to any existing arrays in passwordArray.
if (lowercaseSelect == true) {
  passwordArray += lowercaseCharacters;
}

/*Confirms the selected arrays are selected and added to the variable passwordArray*/
console.log(passwordArray);

//create loop based on selected arrays


//if every selection question gets a no/cancel, add alert to say "Please restart"
if (specialSelect == false && numberSelect == false && uppercaseSelect == false && lowercaseSelect == false) {
  alert("Cannot generate password. Please restart.");
}

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
