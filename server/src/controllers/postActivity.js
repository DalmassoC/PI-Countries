const { Activity, Country } = require('../db')
const { Op } = require('sequelize')


// Generar la actividad
const postActivity = async (req, res) => {
  try {
    // Atrapar la actividad por body
    const { name, difficulty, duration, season, countryName } = req.body
    if (!name || !difficulty || !duration || !season || !countryName) {
      return res.status(404).json({
        error: 'Please fill all the inputs and add countries to the activity',
      })
    }
    // Verificar la existencia de la actividad en la DB
    const activityFound = await Activity.findOne({
      where: {
        name: {
          [Op.iLike]: name,
        },
      },
    })
    // Si la actividad se encuentra en la DB no se crea
    if (activityFound)
    return res.status(404).json({ error: 'Activity already exists' })
  
  // Caso contrario procede a cargarla en la DB
  const created = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  })
  
  // Y relacionarla a un pais de la DB
    await created.addCountries(countryName)
    const activityCreated = await Activity.findOne({
      where: { id: created.id },
      include: {
        model: Country,
      },
    })
  
  // si la actividad fue creada con exito envia el msj correspondiente
    if (activityCreated)
      return res.status(200).json({ message: 'Activity successfully created' })
  } catch (error) {
    return res
      .status(500)
      .send({ error: 'There was a problem creating the Activity' })
  }
}

module.exports = postActivity
