const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const contactRoutes = require('./routes/contact-routes')

const app = express()

app.set("view engine", 'ejs')


mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => console.log('Connected to DB'))
  .catch((error) => console.log(error));


app.listen(process.env.PORT, (error) => {
	error ? console.log(error) : console.log(`listening port ${process.env.PORT}`);;
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.urlencoded({extended: false}))

app.use(contactRoutes)