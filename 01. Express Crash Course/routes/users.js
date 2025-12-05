const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('User List')
})

// create a new user
// localhost:8000/users/
router.post('/', (req, res) => {
    const isValid = true
    if(isValid) {
        users.push({ firstName : req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log('Error');
        res.render('users/new', { firstName: req.body.firstName })
    }
});

// localhost:8000/users/new
router.get('/new', (req, res) => {
    res.render('users/new', {firstName: 'Test'})
})

// access a user based on ID
// localhost:8000/users/123
router.get('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Get User With ID: ${id}`)
})

// Update user with ID
// localhost:8000/users/123
router.put('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Update user with ID: ${id}`)
})

// Delete user with ID
// localhost:8000/users/123
router.put('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Delete user with ID: ${id}`)
})

// chaine togeather all the code (get, post, delete)
// router.route('/:id').get('all code').post('all code').put('all code').delete('all code')

// function params
// Whenever you go to a route that has id
// I want you to run the code will the params (req, res, next and id)
// http://localhost:8000/users/123 LOG OUT : 123
// Get the user with that id

const users = [{name: 'Alex'},{name: 'Adam'},{name: 'John'}]

// Query Params
/*
router.param('id', (req, res, next, id) => {
    console.log(users[id].name)
    next()
})
*/

// we can use the logger in the router, we would just create a function called logger and then type: router.use()

module.exports = router