const express = require('express')
const app = express()

app.set('view engine', 'ejs')
// We can use that middleware function with app.use()
app.use(logger)
// Use the url encoded to get body properties
// To access information coming from forms
app.use(express.urlencoded({ extended: true }))

// to use json request we use
// app.use(express.json())

// serve static html file
// serve all static files within a folder
app.use(express.static('public'))
/*
    app.get('/', (req, res) => {
        res.status(200)
        // pass info from your server to your view
        res.render('index', {text: 'World'})
    })
*/
const userRouter = require('./routes/users')
app.use('/users', userRouter)

// Print out the URL in terminal
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(8000)