//let age = 10;

//let incremented_age = age + 1;

//let first_name = 'Cheng Wee';
// let name = `Cheng Wee`;

// let details = {
//    first_name: "Cheng Wee",
//    last_name: "Yeam",
//    Mobile: "93221121",
//};

//let records = [
//    {
//        first_name: "Cheng Wee",
//        last_name: "Yeam",
//        phone: 93939384,
//    },
//    {
//        first_name: "Mush",
//       last_name: "95",
//        email: "mush95@gmail.com",
//    },
//];

//let myList = [12, "Cheng Wee", 3.4];

// JSON = Javascript Object Notation
//console.log("My name is: " + details.first_name + " " + details.Mobile + records[0].first_name);

//console.log("Name of first record: " + myList[1]);

//let age = 8;

//if (age >= 18){
//    console.log("Eligible for Moderna and Pfizer");
//} else if (age >= 12 && age < 18){
//    console.log("Eliglble for Pfizer only");
//} else {
//    console.log("Not eligible for now.");
//}

// Defining the function
// 1. Normal way
//function function_name (parameter1, parameter2){
//    console.log("Inside the function");
//};

// 2. Anonymous function
//let anon_fn = function(parameter1, parameter2){
//    console.log("Inside the function");
//};

// 3. Arrow function
//let arrow_fn = (parameter1, parameter2) => {
//    console.log("Inside the arrow function");
//};

// Calling the function
//function_name();
//anon_fn();
//arrow_fn();

//function add(p1,p2){
//    return p1 + p2;
//}

//add(4,8);

// Callback Functions
// Function as a parameter to another function
// operator: callback function
// Code should be open to extension, close to modification.

function apply_operation(number1, number2, operator){
    let result = operator(number1,number2);
   return result;
};

function add(n1, n2){
    return n1 + n2;
};

function subtraction(n1, n2){
    return n1-n2;
};

function product(n1, n2){
    return n1*n2;
};

console.log("Sum is: " + apply_operation(10,4,add)); //not using add()
console.log("Subtraction is: " + apply_operation(10,4,subtraction));
console.log("Product is: " + apply_operation(10,4,product));


let year = 2000;

if (year % 4 != 0){
    console.log("Not a leap year!");
} else if (year % 100 == 0){
    console.log("Not a leap year!");
} else {
    console.log("Leap year!");
}


let length = 5
console.log("Inches is: " + apply_operation(length,2.5, (n1,n2) => {
    return n1 * n2;
})
);

let input = "0"
if (input == ""){
    console.log("Null/Blank");
} else {
    console.log("Good!");
}


//function toolkit1(){
//    return "What is the use of <br> tag?";
//}
//function toolkit2(){
//    return "What is the role of backend programming?";
//}

//function conduct_quiz(student_name,module){
    // Print the instructions
//    console.log("Welcome: " + student_name);
    // Print the quiz questions
//    console.log(module());

    // Print completion message
//    console.log("The quiz is submitted successfully.");
//};

//conduct_quiz("Cheng Wee", toolkit2);