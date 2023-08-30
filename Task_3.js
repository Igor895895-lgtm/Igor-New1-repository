// rewrite to while
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

let number = 0
    while (number < 3) {
    console.log(number)
    number++
}


// create a loop from 0 to 10, inside create a variable 'NotDivide', and assign numbers that can't divide 2
// and console every time that number.

let NotDivide = 10
    for (let NotDivide = 0; NotDivide <= 10; NotDivide+=1) {
    if (NotDivide % 2 !== 0) { 
    console.log(NotDivide);
   }
}

//create loop with condition from 0 to 10, and jump to the next iteration when i is 5.

let jump = 10
for (let i = 0; i <= 10; i++) { 
    if (i == 5) {continue};
    console.log (i) 
    jump += i
}


//create if/else for checking numbers, if lower than 10 console 'Hello', if higher than 10 console 'Bye'

let k = 3
if (k < 10) {
    console.log('Hello')
} else
{
    console.log('Bye')
}


