import http from 'node:http';

const PORT = 8000

const server = http.createServer((req, res) => {
    // URL : /api/?name=alex&country=france, BASE URL : http://localhost:8000
    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    // console.log(urlObj)
    const queryObj = urlObj.searchParams;
    console.log(queryObj)
})

server.listen(PORT, () => {
    console.log(`Connected on port: ${PORT}`)
})

// on GET : http://localhost:8000/api/?name=alex&country=france

/**
 * URL {
    href: 'http://localhost:8000/api/?name=alex&country=france',
    origin: 'http://localhost:8000',
    protocol: 'http:',
    username: '',
    password: '',
    host: 'localhost:8000',
    hostname: 'localhost',
    port: '8000',
    pathname: '/api/',
    search: '?name=alex&country=france',
    searchParams: URLSearchParams { 'name' => 'alex', 'country' => 'france' },
    hash: ''
 */

/**
 * URLSearchParams { 'name' => 'alex', 'country' => 'france' }
 */