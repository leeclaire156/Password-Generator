// Assignment code here
function generatePassword() {
  var specialCharacters = "!@#$%^&*()";
  var numberCharacters = "1234567890";
  var uppercaseCharacters = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var lowercaseCharacters = "qwertyuiopasdfghjklzxcvbnm";
  //Min length = 8 characters; max length = 128 characters
  var passwordLength = "";
  var passwordArray = "";


  var length = Number(prompt("How long would you like your password to be? Must be between 8 to 128 characters long."));
  if (length < 8 || length > 128) {
    //If the user picks a number lower than 8 or higher than 128, this alert appears.
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

  //Confirms the selected arrays are selected and added to the variable passwordArray
  console.log(passwordArray);

  //Create loop based on selected arrays
  var passwordSelected = "";

  //Loop runs until the passwordLength value is met.
  for (var i = 0; i < passwordLength; i++) {
    // The variable passwordPicking stores random integers generated from the Math.floor and Math.random functions, and the length of passwordArray whose length is based on the users character type choices.
    var passwordPicking = Math.floor(Math.random() * passwordArray.length);
    // The previously established variable passwordSelected is using the Addition Assignment Operator to create a string based on passwordPicking's value and the corresponding string value in passwordArray.
    passwordSelected += passwordArray.charAt(passwordPicking);
  }

  console.log(passwordSelected);


  //If every selection question gets a no/cancel, add alert to say "Please restart"
  if (specialSelect == false && numberSelect == false && uppercaseSelect == false && lowercaseSelect == false) {
    alert("Cannot generate password. Please restart.");
  }

  //Returns value of passwordSelected to the generatePassword function
  return passwordSelected;
}

//Get references to the #generate element
//The js variable generateBtn is going to select the first element from html that has the generate id (to which there should only be one since it's an id) using the querySelector function.
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  //Stores the content of the generatePassword function into a variable called password
  var password = generatePassword();
  //The js variable passwordText is going to select the first element from html that has the password id (to which there should only be one since it's an id) using the querySelector function.
  var passwordText = document.querySelector("#password");
  //Passes the value of the password variable along to the password text box on html.
  passwordText.value = password;
}

//Add event listener to generate button
//When the button is clicked, a password will be generated using the above writePassword function.
generateBtn.addEventListener("click", writePassword);
