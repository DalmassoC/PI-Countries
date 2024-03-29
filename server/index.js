const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const PORT = 3001;

// Conexion entre la db y el server
conn
  .sync({ alter: true })
  .then(() => {
    //Servidor a la escucha ya en la conexion con la DB
    server.listen(PORT, async () => {
      const allCountries = await Country.count()
      if (!allCountries) {
        const { data } = await axios('http://localhost:5000/countries')
        const countryDB = data.map((country) => {
          return {
            id: country.cca3,
            name: country.name.common,
            flag: country.flags.png,
            continent: country.region,
            capital: country.capital
              ? country.capital[0]
              : 'This country does not have a capital',
            subregion: country.subregion
              ? country.subregion
              : 'This country does not have a subregion',
            area: country.area
              ? country.area
              : 'This country does not have an area',
            population: country.population,
          }
        })
        // Carga masiva de paises
        await Country.bulkCreate(countryDB)
      }
      console.log(`Server running on Port: ${PORT}`)
    })
  })
  .catch((error) => console.error(error.message))
