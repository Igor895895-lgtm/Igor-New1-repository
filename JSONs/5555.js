
// function addNumberProperty(obj, propName, propValue) {
//     addNumberProperty.obj = "Object";
//     addNumberProperty.propName = "Igor";
//     addNumberProperty.propValue = "wqeqwe";
//     if (typeof propValue === "number") {
//         obj[propName] = propValue;
//       } else {
//         console.log(`Property "${propName}" can't be added. Value must be a number.`);
//     console.log(addNumberProperty)
// }
// }
// addNumberProperty()


// 


// const objMy = {First_name: 'Igor', Last_Name: 'Stolbtsov', age: 1600}
// function addNumberProperty(obj, propName, propValue) {
//     if (typeof propValue === "number") {
//       obj[propName] = propValue;
//     } else {
//       console.log(`Property "${propName}" can't be added. Value must be a number.`);
//     }
//   }
//   addNumberProperty(objMy, 'myNumber', 1700)
//   addNumberProperty(objMy, 'myAddress', 'City')



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



