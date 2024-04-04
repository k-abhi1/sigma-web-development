// console.log("Hello World");


// let a=prompt("Enter the number of students");

// let b=prompt("Enter the second of students");

// let c=prompt("choce");
// let r;



// switch(c){

//     case 1:
//        r=a+b;
//          console.log(r);
//          break;

//     case 2:
//         r=a-b;
//         console.log(r);
//         break;

//     case 3:
//         r=a*b;
//         console.log(r);
//         break;

//     case 4:
//         r=a/b;
//         console.log(r);
//         break;
      
//     default:
//         console.log("Invalid input");
//         break;



    
// }



console.log("Hello World");

let a = parseFloat(prompt("Enter the first number"));
let b = parseFloat(prompt("Enter the second number"));
let c = parseInt(prompt("Choose an operation: \n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"));

let r;

switch(c){
    case 1:
        r = a + b;
        console.log("Result: " + r);
        break;
    case 2:
        r = a - b;
        console.log("Result: " + r);
        break;
    case 3:
        r = a * b;
        console.log("Result: " + r);
        break;
    case 4:
        if (b !== 0) {
            r = a / b;
            console.log("Result: " + r);
        } else {
            console.log("Division by zero is not allowed");
        }
        break;
    default:
        console.log("Invalid input");
        break;
}
