const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT;
const app = express();

require('dotenv').config({
	path: './config/index.env'
})

app.use(express.urlencoded({extended: true}))
app.use(cors('dev'))
app.use(morgan())

app.get('/', (req, res) => {
	res.send('send');
})

app.use((req, res) => {
	res.status(404).json({
		msg: "Page not found"
	})
})


app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`)
})