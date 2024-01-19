const router = require('express').Router();

//Controllers
const getCountries = require('../controllers/getCountries')
const getCountryById = require('../controllers/getCountryById')
const getCountryByName = require('../controllers/getCountryByName')

// Trae todos los paises
router.get('/', getCountries)
// Trae todos los paises segun su id
router.get('/:id', getCountryById)
// Trae todos los paises segun su nombre
router.get('/name', getCountryByName)

module.exports = router;