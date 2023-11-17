// console.log("Hello test terminal");

/* 
====================================================
                                                    PASSSWORD CONDITION
====================================================
 */

const password = "aBcdeF09";
const inputpass = "aBcdF09";

if (password === inputpass) {
    console.log("User Valid")
}
else {
    console.log("Try Again. Your Passwod is Not Correct ")
}


/*====================================================
                                                        SEACRH AND FIND
======================================================
 */

const JavaScript = "JavaScript is a versatile scripting language that can be used to create interactive web pages, dynamic applications, and even games. It is a popular choice for web developers because it is easy to learn and use, and it has a large and active community."

// console.log(JavaScript);

// console.log(upperCase);
upperCase = JavaScript.toUpperCase()

// console.log(lowerCase);
lowerCase = JavaScript.toLowerCase()

/* convert String to lowerCase  
~~~~Search anything from JavaScript Variable..........!!!!!!!!! */
const find = lowerCase.includes("no");

// IF BOTH ARE FALSE "This Search Item Is not Available"
if (find === false) {
    console.log("This Search Item Is not Available")
}
else {
    console.log("Item Is Available")
}

// console.log(find);

