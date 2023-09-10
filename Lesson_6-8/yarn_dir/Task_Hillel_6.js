//install with yarn https://www.npmjs.com/package/node-fetch - DONE

//send a request to get data from 
//https://reqres.in/api/users?page=1&per_page=5

import fetch from 'node-fetch';

fetch('https://reqres.in/api/users?page=1&per_page=5')
  .then(response => {
   return response.json();
  })
  .then(data => {
    console.log('Data:', data);
  })


//save the response in the json file

import fs from 'fs/promises';
  
const apiUrl = 'https://reqres.in/api/users?page=1&per_page=5';
const outputFile = 'response.json';
  
  (async () => {
    try {
      const response = await fetch(apiUrl);
  
      const data = await response.json();
      await fs.writeFile(outputFile, JSON.stringify(data, null, 2));
  
      console.log('Response data saved to', outputFile);
    } catch (error) {
      console.error('Error:', error);
    }
  })();


