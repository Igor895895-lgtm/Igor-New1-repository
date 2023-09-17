import fs from 'fs-extra'
import fetch from 'node-fetch'
import log4js from 'log4js'

const logger = log4js.getLogger()
logger.level = "debug"

// import fs from 'fs-extra';
// let arrN = []
// async function readJsonAndWriteName(path='./response_1694287579730 (1).json') {
//     let jsonData2 = await fs.readJson(path)

//     for (let element of jsonData2.data) {
//         arrN.push(element['first_name'])
//         await fs.writeJson('111names.json', JSON.stringify(arrN))

//     }
//     console.log(arrN)
// }

// readJsonAndWriteName('./response_1694287579730 (1).json')

// import fs from 'fs-extra';
// import fetch from 'node-fetch';
// async function getDataReqres() {
//     let response = await fetch('https://reqres.in/api/users?page=2&per_page=5')
//     let data = await response.json()
//     await fs.writeFile('respnseRRReqres.json', JSON.stringify(data))
// }
// getDataReqres()


// let arrN = []
// async function readJsonAndWriteName(path) {
//     let jsonData2 = await fs.readJson(path)

//     for (let element of jsonData2.data) {
//         arrN.push(element['first_name'])
//         await fs.writeJson('111names.json', JSON.stringify(arrN))
//     }
//     console.log(arrN)
// }

// // //readJsonAndWriteName('./response_1694287579730 (1).json')

// import fs from 'fs-extra';
// import fetch from 'node-fetch';
// async function getDataReqres() {
//     let response = await fetch('https://reqres.in/api/users?page=2&per_page=5')
//     let data = await response.json()
//     await fs.writeFile('respnseRRReqres.json', JSON.stringify(data))
// }
// getDataReqres()

// readJsonAndWriteName('respnseRRReqres.json')



let arrN = []
async function readJsonAndWriteName(path) {
    let jsonData2 = await fs.readJson(path)

    for (let element of jsonData2.data) {
        arrN.push(element['first_name'])
        await fs.writeJson('111names.json', JSON.stringify(arrN))
    }
    console.log(arrN)
}

//readJsonAndWriteName('./response_1694287579730 (1).json')

// import fs from 'fs-extra';
// import fetch from 'node-fetch';
async function getDataReqres() {
    let response = await fetch('https://reqres.in/api/users?page=2&per_page=5')
    let data = await response.json()
    await fs.writeFile('respnseRRReqres.json', JSON.stringify(data))
}


const dataUser = {
    "username": "Igor",
    "email": "Stolbtsov",
    "password": "175rrr7"
}

// async function createUser(data) {
//     const response = await fetch('https://reqres.in/api/user/register',
//     {method: 'POST',
//     body: JSON.stringify(data),
//     headers: {'Content-Type': 'application/json'}
// })
// //const dataR = await response.json()
// const dataRStatusCode = await response.status
// const responsed = await response.json()
// console.log(dataRStatusCode)
// console.log(responsed)
// }

// createUser(dataUser)



async function createUser(data) {
    try {
        const response = await fetch('https://reqres.in/api/user/register',
        {method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })
    logger.debug("reaquest was send successfully")

    logger.debug("Got cheese.");
    logger.info("Chhese is Comte");
    logger.warn("Cheese is quite smelly");
    logger.error("Cheese is too ripe!");
    logger.fatal("Cheese was breeding ground for listeria");
    //const dataR = await response.json()
        const dataRStatusCode = await response.status
        const responsed = await response.json()
        logger.debug(dataRStatusCode)
        console.log(dataRStatusCode)
        console.log(responsed)
    } catch(error) {
    console.log(error)
}
}
createUser(dataUser)