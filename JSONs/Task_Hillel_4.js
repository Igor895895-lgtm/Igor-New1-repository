// create a function that takes one param and inside makes the value Uppercase
// if the parameter not string type - console message about the incorrect type of data.

const stringVariable = "task 4";
function changeToUpperCase(hometask) {
  if (typeof stringVariable !== "string") {
    console.log("incorrect type of data");
    }
    return hometask.toUpperCase();
}
console.log(changeToUpperCase(stringVariable));



// create js function that add properties for the object, allowing only number

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


//create JS object with 5 different properties


function Student(fname, lname, country, city, school) {
    this.fname = fname;
    this.lname = lname;
    this.country = country;
    this.city = city;
    this.school = school;
  }

const thisStudent = new Student("Igor", "Stolbtsov", "Ukraine", "Odesa", "Hillel");
console.log(thisStudent)

// with previously created function add a new property



function addSpecialization(student, specializationValue) {
  student.specialization = specializationValue;
}

addSpecialization(thisStudent, "QA");
console.log(thisStudent);







// thisStudent.specialization = "QA"
// console.log(thisStudent)


//check the function syntax and if some issues propose

//check the function syntax and if some issues propose

//let sum == function{a, b} (
 //return a + b;
//) // - there are issues

function Add(a, b) {
    return a + b;
   }
   var sum = Add(17, 16);
   console.log(sum)