require('dotenv').config()

const express = require('express')
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

//listening
app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port`, process.env.PORT)
})
