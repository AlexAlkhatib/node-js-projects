import express from 'express'
import { apiRouter } from './routes/apiRouter.js'

const PORT = 8000
const app = express()

// Mount router
app.use('/api', apiRouter)

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))

/* Challenge: 1. If the client’s 'field' is not supported, serve this object: {message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" } 2. Chain in the .status(<code>) method to set a status code. What status code should you set? 3. You might run into an error! Find a solution! hint.md for help! */