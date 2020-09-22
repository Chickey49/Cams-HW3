
///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////


// generate password
function generatePassword() {
    /* first approach was to make each ascii table range and took a rondaom from that range 
    like a raffle. second approach was like a raffle. I added each applicable array to the bucket and selected randomly an index. 
    I then converted each index to its data. Loop that for password length.
    */
      var userLength = prompt('enter password length');
      var userLengthNum = parseInt(userLength);
      if (userLengthNum < 8 || userLengthNum > 128) {
        alert("please enter a number between 8-128")
      } else {
        var master = new Array();
        var password = "";
    
        
        
        
        
        var userInput = prompt('would you like, lowercase, uppercase, numbers, and/or special characters')
        // if user asked for lowercase, add losercase to the master list.
        // if user asked for uppercase, add upper to masteer list.
        // if....
        if (userInput.includes("lowercase")) {
          var lowerCaseLetters = makeChildList(97, 122);
          master = addToMaster(master, lowerCaseLetters);
        }
        if (userInput.includes("uppercase")) {
          var upperLetters = makeChildList(65, 90);
          master = addToMaster(master, upperLetters);
        }
        if (userInput.includes("numbers")) {
          var numberLetters = makeChildList(48, 57);
          master = addToMaster(master, numberLetters);
        }
        if (userInput.includes("special")) {
          var specLetters = makeChildList(33, 46);
          master = addToMaster(master, specLetters);
        }
        for (let index = 0; index < userLengthNum; index++) {
          // get random index
          // translate to a letter
          // concat to password 
          // length is a 1 based result and i needed the data at index 0-9 not 10 
          var letterIndex = minMax(0, master.length -1); // getting random index from master array
          var letter = String.fromCharCode(master[letterIndex]); // translating the data at the index from master to a character
          password = password + letter;
        }
        return password;
      }
    }
    
    function addToMaster(masterList, childList) {
      // implement guts
      // push all the child list onto the master list.   
      // for (let letter = min; letter < max; letter++) {
      for (let index = 0; index < childList.length; index++) {
        // add to list.
        var letter = childList[index];
        masterList.push(letter);
      }
      return masterList;
    }
    
    // example usage: lowercaseLetters = makeChildLIst(90,123);
    function makeChildList(min, max) {
      // stuff here
      var list = new Array();  // declare list (array)
      // for each item in range (min, max), add an item to list.
      for (let letter = min; letter < max; letter++) {
        // add to list.
        list.push(letter);
      }
      console.log("Just added " + list.length + " letters to a child.");
      return list;
    }
    
    
    function minMax(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // DO NOT TOUCH THIS CODE
    //
    // This code handles:
    // * clicking the Generate Password
    // * writing the password to the screen
    //
    
    var generateBtn = document.querySelector("#generate");
    
    // Write password to the #password input
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    }
    
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    
    //////////////////////////////////////////////////////////////////////
    
    
    
    
    
    
    