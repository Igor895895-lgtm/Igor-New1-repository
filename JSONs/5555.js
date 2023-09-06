
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


const objMy = {First_name: 'Igor', Last_Name: 'Stolbtsov', age: 1600}
function addNumberProperty(obj, propName, propValue) {
    if (typeof propValue === "number") {
      obj[propName] = propValue;
    } else {
      console.log(`Property "${propName}" can't be added. Value must be a number.`);
    }
  }
  addNumberProperty(objMy, 'myNumber', 1700)
  addNumberProperty(objMy, 'myAddress', 'City')



