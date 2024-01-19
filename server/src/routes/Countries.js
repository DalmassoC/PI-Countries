const { Router } = require("express");

const controllerCountry = require("../controllers/ControllerCountry");

const routerCountry = Router();

/*
    get: 
    1- 
        /countries
        /countries/name?="..."
    
    2-  /countries/:idPais
*/

const router = require('express').Router()
const getCountries = require('../controllers/getCountries')
const getCountryById = require('../controllers/getCountryById')
const getCountryByName = require('../controllers/getCountryByName')

router.get('/name', getCountryByName)
router.get('/', getCountries)
router.get('/:id', getCountryById)

module.exports = router