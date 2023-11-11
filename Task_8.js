//Create a function that receives one parameter.

function oneParam(parameter) {
    console.log("Working Environment:", parameter)
  }
  oneParam("Computer Notebook")

//Check if a given string has all symbols in upper case. If the string is empty or doesn't have any letter in it - the function should return false.  
function UpperCaseSymbols(inputString) {
    if (inputString.length === 0 || !/[a-zA-Z]/.test(inputString)) {
      return false
    }
    return inputString === inputString.toUpperCase()
  }

  console.log(UpperCaseSymbols("COMPUTER"))
  console.log(UpperCaseSymbols(""))
  console.log(UpperCaseSymbols("951357"))
  console.log(UpperCaseSymbols("Computer"))
  