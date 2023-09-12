const express = require('express')
const {getMeals, getMeal, createMeal, deleteMeal, updateMeal} = require('../controllers/mealController')

const router = express.Router()

//GET all meals
router.get('/', getMeals)

//GET single meal
router.get('/:id', getMeal)

//POST meal
router.post('/', createMeal)

//DELETE meal
router.delete('/:id', deleteMeal)

//UPDATE meal
router.patch('/:id', updateMeal)

module.exports = router