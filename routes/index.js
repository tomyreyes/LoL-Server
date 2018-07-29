const express = require('express')
const router = express.Router()
const axios = require('axios')

router.post('/getName', async (req, res) => {
	const { username } = req.body
	const user = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${username}`)
	console.log(user)
})



