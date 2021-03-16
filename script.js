// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  
  
  //________________________________________________
  var pwLength = prompt(`How long would you like your password to be?
  (It must be between 8 and 128 characters long.)`);
  if (parseInt(pwLength) >= 8 && parseInt(pwLength) <= 128) {
    console.log(`${pwLength}`);
    var text_1 = document.querySelector(".text1").innerHTML = `
    You chose to have your password be ${pwLength} characters long and have...`;
    
  }else{
    console.log("Not a valid answer.");
    var text_1 = document.querySelector(".text1").innerHTML = `
    ${pwLength} is not a valid answer. Must be between 8 and 128`;
    return;
  }

  var pwUpper = confirm(`would you like uppercase characters?`)
  if (pwUpper === true) {
    console.log(`Ok so we'll add uppercase`);
    var text_2 = document.querySelector(".text2").innerHTML = `
    Uppercase`;
    
  }else{
    console.log(`No uppercases then`);
  }
  
  var pwLower = confirm(`would you like lowercase characters?`)
  if (pwLower === true) {
    console.log(`Ok so we'll add lowercase`);
    var text_3 = document.querySelector(".text3").innerHTML = `
    Lowercase`;
    
  }else{
    console.log(`No lowercases then`);
  }
  
  var pwNum = confirm(`would you like numbers?`)
  if (pwNum === true) {
    console.log(`Ok so we'll add numbers`);
    var text_4 = document.querySelector(".text4").innerHTML = `
    Numbers`;
    
  }else{
    console.log(`No numbers then`);
  }
  
  var pwSpecial = confirm(`would you like special characters?`)
  if (pwSpecial === true) {
    console.log(`Ok so we'll add special characters`);
    var text_5 = document.querySelector(".text5").innerHTML = `
    Special Characters`;
    
  }else{
    console.log(`No special characters then`);
  }
  
  
  //________________________________________________
  // var test = pwLength
  // return test;
  if (pwLower == false && pwUpper == false && pwNum == false && pwSpecial == false) {
    console.log(`Must contain at least one character option`);
    var noChoices = document.querySelector(".nochoices").innerHTML = `
    You must select at least one character option.`;
  }


//________________________________________________
var pw = [];
var lt = ["a","b","c","d","e","f","g","h","i","k","l","m","n",
  "o","p","q","r","s","t","u","v","w","x","y","z"];
  var sp = ["!", "#", "$", "%", "&", "'", "(", ")", "*",
  "+", ",", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]",
  "^", "_", "`", "{", "|", "}", "~"];

for (var iterate = 0; iterate < pwLength;) {
  var ranUpLt = Math.floor(Math.random() * lt.length);
  var ranLwLt = Math.floor(Math.random() * lt.length);
  var ranSp = Math.floor(Math.random() * sp.length);
  
  if (pwUpper == true && iterate < pwLength) {
    pw.push(`${lt[ranUpLt].toUpperCase()}`)
    iterate ++
  }
  
  if (pwLower == true && iterate < pwLength) {
    pw.push(`${lt[ranLwLt].toLowerCase()}`)
    iterate ++
  }
  
  if (pwNum == true && iterate < pwLength) {
    pw.push(`${Math.floor(Math.random() * 10)}`)
    iterate ++
  }
  
  if (pwSpecial == true && iterate < pwLength) {
    pw.push(`${sp[ranSp]}`)
    iterate ++
  }
  
   
}

//________________________________________________
  
var results = document.querySelector(".results").innerHTML = `Here are your results:`;
var pwText = pw.toString().replace(/,/g, "");
var passwordText = document.querySelector("#password").innerHTML = pwText;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
