console.log("Hello from NodeJS");

//1. TERMINAL : node server.js

// create a json package by typing the command : **npm init** in the terminal
// name: wild-horizon
// version: default
// description: a dataset of most interesting planet's places
// entry point: server.js
// test command: default
// git repository: default
// keywords: default
// author: [YOUR NAME]
// license: default

console.log("We have a package.json !!!");

// Open up the terminal
//2. Type **npm start**

// To create a server we need the HTTP module
// In package.json add "type": 'module,
// 3. TERMINAL : npm start
import http from 'node:http';

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.end("Hello from the server !"); // sends data over the http and end the response
});

server.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`);
})

// TERMINAL : npm start
// Browser : localhost:8000