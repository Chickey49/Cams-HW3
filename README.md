# Cams-HW3

# Contents

## Task
## Work accomplished
## Installation
## Licensing

=============================================================================================================================

# Task
    I was tasked with creating a random password generator. 

# Work accomplished

    The generator utilizes javasrcipt to loop through mutliple arrays and grab a single index. Similar to a raffle.
In my case I had a bucket of raffle tickets (indexes) that I randomly pulled from.

    When it came to userInput I needed two things, password length and desired characters.
The code was engineered to only add arrays of the user-specified character types to the bucket.
An example of this is: 

    if (userInput.includes("lowercase")) {
          var lowerCaseLetters = makeChildList(97, 122);
          master = addToMaster(master, lowerCaseLetters);
        }

Utilizing multiple if statements to add or not include the childlist.


    Then I needed the index's value (letter).
Once I had the the letter I needed to concatinate it to the masterlist (password). 
I repeated this process enough times to reach the desired password length from the user input.

  for (let index = 0; index < userLengthNum; index++) {
          // get random index
          // translate to a letter
          // concat to password 
          // length is a 1 based result and I needed the data at index 0-9 not 10 
          var letterIndex = minMax(0, master.length -1); // getting random index from master array
          var letter = String.fromCharCode(master[letterIndex]); // translating the data at the index from master to a character
          password = password + letter;
        }


# Installation

The password generator is browser based. To use the generator you can find it on my Github profile. [https://github.com/Chickey49/Cams-HW3]

Here is the link to the project's webpage. [https://chickey49.github.io/Cams-HW3/]


=============================================================================================================================

## Licensing

Open source




       

