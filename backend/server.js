require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const mealRoutes = require('./routes/meals')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

app.use('/api/meals', mealRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listening
        app.listen(process.env.PORT, () => {
            console.log(`Connected to MONGO, Listening on port`, process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


