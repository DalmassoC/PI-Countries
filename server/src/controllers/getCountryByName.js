const { Country } = require('../db')
const { Op } = require('sequelize')

//envia el pais por nombre
const getCountryByName = async (req, res) => {
  try {
    const { name } = req.query
    //envia el pais por nombre encontrado en la DB
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    })
    if (!countries.length)
      return res.status(404).json({ error: `There aren't countries` })

    return res.status(200).json(countries)
  } catch (error) {
    return res.status(500).json({ error: 'Could not retrieve country' })
  }
}

module.exports = getCountryByName
