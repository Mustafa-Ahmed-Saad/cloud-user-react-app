// import React from 'react';
import axios from 'axios';

async function GetUsers() {
   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
   console.log(response);
   return response;
}
// or you can use then
// function GetUsers() {
//    let response = axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
//       return response;
//    });
//    return response;
// }

async function DeleteUser(id) {
   const response = await axios.delete('https://jsonplaceholder.typicode.com/users/' + id);
   console.log(response);
   return response;
}
// or you can use then
// function DeleteUser(id) {
//    let response = axios.get('https://jsonplaceholder.typicode.com/users/' + id).then((response) => {
//       return response;
//    });
//    return response;
// }

async function updateUser(id, values) {
   const response = await axios.put('https://jsonplaceholder.typicode.com/users/' + id, values);
   console.log(response);
   return response;
}

async function addUser(values) {
   const response = await axios.post('https://jsonplaceholder.typicode.com/users/', values);
   console.log(response);
   return response;
}

export { GetUsers, DeleteUser, updateUser, addUser };
