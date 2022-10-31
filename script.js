// Assignment code here


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
  
function randomInt(min,max) {
  if (!max) {
    max = min
    min = 0
  }
  const rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}
function getRandomItem(list) {
  return list[randomInt(list.length)]
}


// Upon landing on the homepage, once you click on Generate Password, you will be greeted with a window prompt.

function generatePassword() {

  let userInput = window.prompt("How many charcters do you need the password to be?")
  let passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("This is NOT a number. Try again!")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Sorry, password length MUST be between 8 and 128 charcaters. Try again!")
    return
  }


// Once you pass the first window prompt, you will be asked 4 different questions relating to wanting numbers, special characters, lowercase, and uppercase letters in your secure password.

  const userWantsNumbers = window.confirm("Do you need numbers in your password?")
  const userWantsSpecialCharacters = window.confirm("Do you need special characters in your password?")
  const userWantsLowercase = window.confirm("Do you need lowercase letters in your password?")
  const userWantsUppercase = window.confirm("Do you need uppercase in your password?")
  
// Bellow are the array notations for the number, special characters, lower, and uppercase letters.

  const listNumbers = ["0","1","2","3","4","5","6","7","8","9"]
  const listSymbols = ["%","$","#","@","!","*","&","^","_","-"]
  const listLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const listUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


// Bellow are the if statements based on what the user selects for password requirments. 

  let userOptions = []

  if (userWantsNumbers === true) {
    userOptions.push(listNumbers)
  }
  
  if (userWantsSpecialCharacters === true) {
    userOptions.push(listSymbols)
  }

  if (userWantsLowercase === true) {
    userOptions.push(listLowercase)
  }

  if (userWantsUppercase === true) {
    userOptions.push(listUppercase)
  }

  if (userOptions.length === 0) {
    userOptions.push(listSymbols)
  }
  
// Bellow is the for loop for generating the random secure password. After running, returns a random generated password. 

  let genPassword = ""

  for (let i = 0; i < passwordLength; i++) {
    let randomList = getRandomItem(userOptions)
    let randomCharacters = getRandomItem(randomList)
    genPassword += randomCharacters
  }
  return genPassword
}

// Writes password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
   
  

