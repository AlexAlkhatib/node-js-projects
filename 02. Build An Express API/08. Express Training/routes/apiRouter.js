import express from 'express'
import { getAllData, getDataByPathParams } from '../controllers/startupController.js'

export const apiRouter = express.Router()

// /api?industry=...&country=... etc
apiRouter.get('/', getAllData)

// /api/country/india
apiRouter.get('/:field/:term', getDataByPathParams)