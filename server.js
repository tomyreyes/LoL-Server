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