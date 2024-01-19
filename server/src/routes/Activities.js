
const router = require('express').Router()
const postActivity = require('../controllers/postActivity')
const getActivities = require('../controllers/getActivities')


// Ruta activity: Crea una actividad
router.post('/', postActivity)

// Ruta activity: Mostrar las actividades
router.get('/', getActivities)

module.exports = router