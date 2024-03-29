const { Country, Activity } = require('../db')


//envia todos los paises
const getCountries = async (req, res) => {
  try {
    //envia todos los paises buscando en la DB
    const countries = await Country.findAll({
      include: [
        {
          model: Activity,
          attributes: ['name'],
          through: { attributes: [] },
        },
      ],
    })
    if (!countries.length)
      return res.status(404).json({ error: "There aren't countries" })
    return res.status(200).json(countries)
  } catch (error) {
    return res.status(500).json({ error: 'Failed to load countries' })
  }
}

module.exports = getCountries
