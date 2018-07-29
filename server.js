const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cords')
const PORT = process.env.PORT || 4000
const app = express()

require('dotenv').config()

app.use(cors())


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`)
})