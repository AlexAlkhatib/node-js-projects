import express from 'express'

const app = express()

/*
Challenge: 
1. Update the code so a GET request to api/metals/gold
    logs an object {category: ‘metals’, type: ‘gold’}

But a GET request to api/crypto/eth
    logs an object {category: crypto-name, type: eth}
*/

app.get('/api/:category/:type', (req, res) => {
    const { category, type } = req.params
    
    console.log({ category, type })

    res.json({ category, type })
}) 


app.listen(8000, () => console.log('listening 8000'))