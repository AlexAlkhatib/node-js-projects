import http from 'node:http';
import { title } from 'node:process';

const PORT = 8000;

// TODO : we want to handle a POST request in the http server
// We want to send a string to the server when a GET request comes in

// res.end() ends the response by sending a stream to the body
// to send a stream to the server without terminating the responses we use the write() method (when we use res.write() we still need to use res.end() to finish the response) by the way res.end() can be empty

// console.log(req.url) to log out the request url
// Check the url property of the request only serve if our string is **/api**

// JSON stringify
// convert anything to JSON in HTTP
const human = {
    name: "Alex",
    title: "IT Engineer"
}
console.log(JSON.stringify(human)); // {"name":"Alex","title":"IT Engineer"}
console.log(typeof JSON.stringify(human)); // string


const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url === "/api" && req.method === "GET") {
        res.write("This is some data \n");
        res.write("This is some data \n");
        res.end("This is from the server");
    }
});

server.listen(PORT, () => {
    console.log(`Connected on port: ${PORT}`);
})