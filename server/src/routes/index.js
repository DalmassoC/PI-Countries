const {Router} = require("express");
const {Country} = require("../db.js")
const fs = require ("fs");


const routerCountry = require("./RouterCountry")
const routerActivity = require("./RouterActivity")


const router = Router();

const axios = require('axios')


//Carga Por hook
router.use(async (req, res, next) => {
  const countries = await Country.count();
  if (!countries) {
      const apiResult = await fs.readFile()
      const array_country = apiResult.countries.map((country) => ({
          id: country.cca3,
          name: country.name,
          flag: country.flags.png,
          region: country.region,
          capital: country.capital[0],
          subregion: country.subregion,
          area: country.area,
          population: country.population
      }));
      await Country.bulkCreate(array_country).then(c => console.log('Done!')).catch(err=> console.error(err))
  }
  next();
});

router.use(routerCountry);
router.use(routerActivity);

module.exports = router;
