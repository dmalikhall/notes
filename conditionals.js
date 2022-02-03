// Conditionals

// IF Statements

// if a condition is true, execute some code. But if it is false the program will skip over our statement
// if the condition is false and we want to execute different code, we do that with and Else clause
if (condtion) {
    // run some code
} else {
    // run some different code
};

// example
let testScore = 51;
let grade = '';

if (testScore >= 90) {
    grade = 'A'
} else if (testScore >= 80) {
    grade = 'B'
} else if (testScore >= 70) {
    grade = 'C'
} else if (testScore >= 60) {
    grade = 'D'
} else {
    'you need help'
};

// Switch Statements
switch (expression OR value) {
            case choice1:
    // run some code
    break;
            case choice2:
    // run this different code
    break;
            // we can add as many cases as we need
            default:
    // run this code if no case matches
    // no need for a break here
};


// switch statements need strict data type matches... case 2 is not the same as '2'
// you can put if statements inside of switch
// switch statements are rarely used

// Ternary Operator
// A three part tool for making decisions in JS
condition ? if true : if false;

let soup = "Chicken Noodle Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "sorry, no soup for you" : soup
    ? `yes we have ${soup} today` : "nope no soup";
console.log(soupAccess)

let fruit = 'mango'
let anyMongos = true;
let groceryList = anyMongos ? 'yep we got them' : `no ${fruit}`

let score = 89;
let grade = '';
let didYouPass = score >= 90 ? grade = 'A' 
: score >= 80 ? grade = 'B'
: score >= 70 ? grade = 'C'
: score >= 60 ? grade = 'D'
: 'you need some help bruh';
console.log(didYouPass)



