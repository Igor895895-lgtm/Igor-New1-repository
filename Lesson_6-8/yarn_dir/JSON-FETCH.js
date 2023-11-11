import fs from 'fs-extra';
 let arrN = []
async function readJsonAndWriteName(path) {
let jsonData2 = await fs.readJson(path)

for (let element of jsonData2.data) {
    arrN.push(element['first_name'])
}
console.log(arrN)
await fs.writeFile('names.json', JSON.stringify(arrN))
}

readJsonAndWriteName('./response_1694287579730 (2).json')


// let arrN = []
// async function readJsonAndWriteName(path) {
// let jsonData2 = await fs.readJson(path)

//  for (let element of jsonData2.data) {
//     arrN.push(element['first_name'])
// }
// console.log(arrN)
// await fs.writeFile('names.json', JSON.stringify(arrN))
// }

//readJsonAndWriteName()


// import fetch from 'node-fetch';
// async function getDataReqres () {
//     let response = await fetch ('https://reqres.in/api/users?page=2&per_page=5')
//     let data = await response.json()
//     await fs.writeFile('responseRreqres.json', JSON.stringify(data))
// }
//getDataReqres()

//readJsonAndWriteName('responseReqres.json')
import fetch from 'node-fetch'
const dataUser = {
    "username": "Frank",
    "email": "frank@mail.com",
    "password": "345hhfg53@gbf"
  }
async function createUser(data) {
    try {
const response = await fetch ('https://reqres.in/api/user/register',
{method: 'POST',
body: JSON.stringify(data),
headers: {'Content-Type': 'application/json'}
})
const dataRStatusCode = await response.status
const responsed = await response.json()
console.log(dataRStatusCode)
console.log(responsed)
} catch (error) {
    console.log(error)
}
}
createUser(dataUser)