import http from 'http';
import { getDataFromDB } from './database/db.js';
import { sendJSONReponse } from './util/sendJSONResponse.js';
import { getDataByPathParams } from './util/getDataByPathParams.js';
import { getDataByQueryParams } from './util/getDataByQueryParams.js';

const PORT = 8000;

// http://localhost:8000/api
// GetDataFromDB is an async function so we need to make our function async and await the response
// res.setHeader : to set the content type to application/json

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB();

    const urlObj = new URL(req.url, `http://${req.headers.host}`)

    const queryObj = Object.fromEntries(urlObj.searchParams) 

    if(urlObj.pathname === "/api" && req.method === "GET"){
        let filteredDestinations = getDataByQueryParams(destinations, queryObj)

        sendJSONReponse(res, 200, filteredDestinations);
    } else if (req.url.startsWith("/api/continent") && req.method === "GET") { // Check if the url starts with /api/continent
        // Get what comes after /api/contient/ OR req.url.substring(15);
        const continent = req.url.split('/').pop();
        const filteredData = getDataByPathParams(destinations, 'continent', continent);
        sendJSONReponse(res, 200, filteredData);
    } else if (req.url.startsWith("/api/country") && req.method === "GET") { // Check if the url starts with /api/country
        // Get what comes after /api/country/ OR req.url.substring(15);
        const country = req.url.split('/').pop();
        const filteredData = getDataByPathParams(destinations, 'country', country);
        sendJSONReponse(res, 200, filteredData);
    }
    else {
        sendJSONReponse(res, 404, {error: "not found", message: "The requested route does not exist"});
    }
});

server.listen(PORT, () => {
    console.log(`Connected on port: ${PORT}`);
});

// DRY : Don't Repeat Yourself
// Create a JS file with a function

// Browser : localhost:8000/api/continent/europe

// Query Parameters : /api?name=Alex&country=France in the next Lecture