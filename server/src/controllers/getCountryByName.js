const { Country } = require('../db')
const { Op } = require('sequelize')

//envia el pais por nombre
const getCountryByName = async (req, res) => {
  try {
    console.log("Aca estoy")
    // http://localhost:3001/:id
    // http://localhost:3001?name="Uganda"
    const { name } = req.query
    //envia el pais por nombre encontrado en la DB
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    })
    console.log(countries)
    if (!countries.length)
      return res.status(404).json({ error: `There aren't countries` })

    return res.status(200).json(countries)
  } catch (error) {
    return res.status(500).json({ error: 'Could not retrieve country' })
  }
}

module.exports = getCountryByName
