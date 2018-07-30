const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 4000
const app = express()
const axios = require('axios')
const routes = require('./routes')

require('dotenv').config()

app.use(cors())


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', routes)

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`)
})


// async function mock() {
// 	const user = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/tomy143/?api_key=${process.env.API_KEY}`)
// 	const { accountId } = user.data
// 	const matchDetails = await axios.get(`https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${accountId}/?api_key=${process.env.API_KEY}`)
// 	const { matches } = matchDetails.data
// 	console.log(matches)
// }
// mock()