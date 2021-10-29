# Mr. Roboger's Neighborhood

#### By Curtis Brooks

#### This application takes a number from the user and returns an array with certain numbers replaced with words.

## Technologies Used

* HTML
* CSS
* Javascript

## Description

This application will take a number as an input and return a range from 0 to the input number, replacing "Beep!" for 1, "Boop!" for 2, and "Won't you be my neighbor?" for 3. All other digits will return as normal. If a number has multiple digits, the rule for 3 will take precedence, then the rule of 2, followed by the rule of 1 (i.e. if input is 123, output will be "Won't you be my neighbor?")

## Setup/Installation Requirements

* Clone [this](https://github.com/curtisbrooks678/mr-robogers-neighborhood) repository to your desktop
* Navigate to the top of the directory
* Open index.html in your browser

## Known Bugs

* No known bugs

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License) 

Copyright (c) 10/29/2021 Curtis Brooks

____________________________________

TESTS

Describe: neighborBot()

Test: "It will return a 0 if the user inputs 0" 
Code: neighborBot(0) 
Expected Output:(0)
COMP

Test: "It will return "Beep!" if the user inputs 1" 
Code: neighborBot(1) 
Expected Output:("Beep!")
COMP

Test: "It will return "Boop!" if the user inputs 2" 
Code: neighborBot(2) 
Expected Output:("Boop!")
COMP

Test: "It will return "Won't you be my neighbor?" if the user inputs 3" 
Code: neighborBot(3) 
Expected Output:("Won't you be my neighbor?")
COMP

Test: "It will return a range of 0-9 if the user inputs a number 0-9" 
Code: neighborBot(5) 
Expected Output:("0, "Beep!", "Boop", "Won't you be my neighbor?", 4, 5")
COMP

Test: "It will return a string for a multi-digit number with rules of most important to least important outlined in assignment prompt" 
Code: neighborBot(12) 
Expected Output:("Boop")
COMP












