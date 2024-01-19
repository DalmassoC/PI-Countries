const countries = require("./Countries")
const activities = require('./Activities')

const router = require('express').Router();

        //    PATH    -  otras rutas
router.use('/countries', countries)
router.use('/activities', activities)

module.exports = router;
