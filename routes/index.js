const express = require('express')
const router = express.Router()
const axios = require('axios')


router.post('/user-matches', async (req, res) => {
	try {
		const { summonerName } = req.body
		const summoner = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summonerName}/?api_key=${process.env.API_KEY}`)
		const { accountId } = summoner.data
		const matchData = await axios.get(`https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${accountId}/?api_key=${process.env.API_KEY}`)
		const { matches } = matchData.data
		const latestMatches = matches.slice(0, 4)
		res.send({ summonerData: summoner.data, latestMatches })
	} catch (err) {
		console.log(err)
	}
})

router.post('/match-details', async (req, res) => {
	try {
		const { matchID } = req.body
		const matchData = await axios.get(`https://na1.api.riotgames.com/lol/match/v3/matches/${matchID}/?api_key=${process.env.API_KEY}`)
		res.send({ matchDetails: matchData.data })
	} catch (err) {
		console.log(err)
	}
})

module.exports = router



