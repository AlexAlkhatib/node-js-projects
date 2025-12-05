import express from 'express'
import { startups } from './data/data.js'

const PORT = 8000
const app = express()

app.get('/api', (req, res) => {
  const { industry, country, continent, is_seeking_funding, has_mvp } = req.query

  // Convert "true"/"false" strings to booleans when needed
  const parseBool = (value) => {
    if (value === undefined) return undefined
    return value.toLowerCase() === "true"
  }

  const seekingFundingBool = parseBool(is_seeking_funding)
  const hasMvpBool = parseBool(has_mvp)

  let filteredData = startups

  if (industry) {
    filteredData = filteredData.filter(s =>
      s.industry.toLowerCase() === industry.toLowerCase()
    )
  }

  if (country) {
    filteredData = filteredData.filter(s =>
      s.country.toLowerCase() === country.toLowerCase()
    )
  }

  if (continent) {
    filteredData = filteredData.filter(s =>
      s.continent.toLowerCase() === continent.toLowerCase()
    )
  }

  if (is_seeking_funding !== undefined) {
    filteredData = filteredData.filter(s =>
      s.is_seeking_funding === seekingFundingBool
    )
  }

  if (has_mvp !== undefined) {
    filteredData = filteredData.filter(s =>
      s.has_mvp === hasMvpBool
    )
  }

  res.json(filteredData)
})

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))


/*
Challenge:
1. When a user hits the /api endpoint with query params, filter the data so 
we only serve objects that meet their requirements. 
     
The user can filter by the following properties:
  industry, country, continent, is_seeking_funding, has_mvp

Test Cases

/api?industry=renewable%20energy&country=germany&has_mvp=true
  Should get the "GreenGrid Energy" object.

/api?industry=renewable%20energy&country=germany&has_mvp=false
  Should not get any object

/api?continent=asia&is_seeking_funding=true&has_mvp=true
  should get for objects with IDs 3, 22, 26, 29
*/