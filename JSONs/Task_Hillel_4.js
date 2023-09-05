// create a function that takes one param and inside makes the value Uppercase
// if the parameter not string type - console message about the incorrect type of data.

function changeToUpperCase(hometask) {
    return hometask.toUpperCase();
}
const result = changeToUpperCase("task 4");
const stringVariable = "task 4";
console.log(result);

if (typeof stringVariable !== "string") {
console.log("incorrect type of data");
}


// create js function that add properties for the object, allowing only number


function addPropertiesToObject (object, p1) {
    return object, p1};
const object = "Igor";
const p1 = "qqq"
console.log (addPropertiesToObject (object, p1))
if (typeof(p1) === 'number') {
    object.prop2 = p1;
} else {
    console.log('At least one properties is not a number');
}

  

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

thisStudent.specialization = "QA"
console.log(thisStudent)


//check the function syntax and if some issues propose

//let sum == function{a, b} (
 //return a + b;
//) // - there are issues

  function Add(a, b) {
    return a + b;
   }
   var sum = Add(17, 16);
   console.log(sum)