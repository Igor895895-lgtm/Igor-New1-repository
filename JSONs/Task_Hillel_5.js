// create array with 10 elements

const football_clubs = ["Liverpool", "West Ham", "Dortmund", "Union", "Napoli", "Inter", "Barcelona", "Lyon", "Lens", "Celtic"]
console.log (football_clubs)

// create a function that will add value to array under index 500

function insertElement() {
    let arr = [1, 2, 3, 4, 5];
    let index = 500;
    let element = 745;
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = element;
    console.log(arr);
} 
insertElement();


// create a function with for inside and conditions to create two new arrays - one with string elements only, another only with numbers

function splitArrayElements(inputArray) {
    const strings = [];
    const numbers = [];
  
    for (const value of inputArray) {
      if (typeof value === 'string') {
        strings.push(value);
      } else if (typeof value === 'number') {
        numbers.push(value);
      }
    }
    return {strings, numbers};
  }

  const inputArray = ["Igor", "Stolbtsov", 21147, "Odesa", 333777];
  const {strings, numbers} = splitArrayElements(inputArray);
  
  console.log("String", strings);
  console.log("Number", numbers);