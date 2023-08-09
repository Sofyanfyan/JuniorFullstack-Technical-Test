const router = require('express').Router()
const Controller = require('../controllers')
const { Product } = require('../models')


router.get('/', Controller.fetchProduct);


module.exports = router