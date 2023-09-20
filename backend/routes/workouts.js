const express = require('express')
const {getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require auth for all workout routes
router.use(requireAuth)

//GET all workouts
router.get('/', getWorkouts)

//GET single workout
router.get('/:id', getWorkout)

//POST workout
router.post('/', createWorkout)

//DELETE workout
router.delete('/:id', deleteWorkout)

//UPDATE workout
router.patch('/:id', updateWorkout)

module.exports = router