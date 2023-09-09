const express = require('express')

const router = express.Router()

//GET all meals
router.get('/', (req, res) => {
    res.json({mssg: 'GET all meals'})
})

//GET single meal
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single meal'})
})

//POST meal
router.post('/', (req, res) => {
    res.json({mssg: 'POST meal'})
})

//DELETE meal
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE meal'})
})

//UPDATE meal
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE meal'})
})

module.exports = router