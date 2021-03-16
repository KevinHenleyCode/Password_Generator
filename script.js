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
  // var test = pwLength
  // return test;
  if (pwLower == false && pwUpper == false && pwNum == false && pwSpecial == false) {
    console.log(`Must contain at least one character option`);
  }

  var pw = [];
  for (var iterate = 0; iterate < pwLength;) {
    
    if (pwUpper == true && iterate < pwLength) {
      pw.push(`pwUpper ${iterate} `)
      iterate ++
    }

    if (pwLower == true && iterate < pwLength) {
      pw.push(`pwLower ${iterate} `)
      iterate++
    }

    if (pwNum == true && iterate < pwLength) {
      pw.push(`pwNum ${iterate} `)
      iterate++
    }

    if (pwSpecial == true && iterate < pwLength) {
      pw.push(`pwSpecial ${iterate} `)
      iterate++
    }
    
    
    
    
  }
  
  var pwText = pw.toString();
  console.log(`This is only a test ${pwText}`);

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
