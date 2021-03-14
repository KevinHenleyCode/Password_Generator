// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  var pwLength = prompt(`How long would you like your password to be?
  (It must be a minimum of 8 characters)`);
  if (parseInt(pwLength) >= 8) {
    console.log(`${pwLength}`);
  }else{
    console.log("Not a valid answer");
    return;
  }

  var pwLower = confirm(`would you like lowercase characters?`)
  if (pwLower === true) {
    console.log(`Ok so we'll add lowercase`);
  }else{
    console.log(`No lowercases then`);
  }

  var pwUpper = confirm(`would you like uppercase characters?`)
  if (pwUpper === true) {
    console.log(`Ok so we'll add uppercase`);
  }else{
    console.log(`No uppercases then`);
  }

  var pwNum = confirm(`would you like numbers?`)
  if (pwNum === true) {
    console.log(`Ok so we'll add numbers`);
  }else{
    console.log(`No numbers then`);
  }

  var pwSpecial = confirm(`would you like special characters?`)
  if (pwSpecial === true) {
    console.log(`Ok so we'll add special characters`);
  }else{
    console.log(`No special characters then`);
  }
  var test = pwLength
  return test;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
