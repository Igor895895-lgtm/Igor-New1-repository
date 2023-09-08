//          0       1       2       3      4
let arr1 = ['kil', 'ooo', 343, 'jdujf', 2390, true, function() {console.log('Hi from array')}]
// let value = arr1[3]
// console.log(value)

arr1[3] = 'New'

// console.log(arr1[3])
// console.log(arr1)

// arr1[6]()

// let lArr1 = arr1.length
// console.log(lArr1)

// console.log(arr1.at(-3))

async function getOnlyString(baseArr) {
let result = [];
resultWithUpperC = [];

// for (let i = 0; i < arr1.length; i++) {
//     //console.log(arr1[i])

//     if(typeof arr1[i] === 'string') {
//     result.push(arr1[i])
//     }
// }
//     for (let y = 0; y < result.length; y++) {
//     let word = result.at(y)
//     let firstLetter = String(word[0]).toUpperCase()
//     let restLetters = String(word.slice(1))
//     resultWithUpperC.push(firstLetter + restLetters)
// }
// //console.log(result)
// console.log(resultWithUpperC)


for (let i = 0; i < baseArr.length; i++) {
    //console.log(arr1[i])

    if(typeof baseArr[i] === 'string') {
    await result.push(baseArr[i])
    }
}
    for (let y = 0; y < result.length; y++) {
    let word = result.at(y)
    let firstLetter = await String(word[0]).toUpperCase()
    let restLetters = await String(word.slice(1))
    await resultWithUpperC.push(firstLetter + restLetters)
}
//let resultR = getOnlyString(arr1)
//console.log(resultWithUpperC)
}
getOnlyString(arr1)
//console.log(result)
//console.log(resultWithUpperC)


let mArr22 = [
    [1, 3, 'Shrek'],
    [4, 10],
    [40, 50]
]
let nameShrek = mArr22[0][2]
console.log(nameShrek)

for (let i = 0; i < mArr22.length; i++) {
    let smalArr = mArr22[i];
    console.log(mArr22[i]);
    for (let y = 0; y < smalArr.length; y++) {
        console.log("all array [" + i + "][" + y +"] = "+ smalArr[y])
    }
}


const objMy = {name: 'Igor', lName: 'Stolbtsov', age: 1222}
const testDataEnv1 = {url: 'url1', username: 'user1'}
const testDataEnv2 = {url: 'url2', username: 'user2'}

console.log(Object.keys(testDataEnv1))