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

routerCountry.get("/countries",(req,res)=>{
    const info = req.query  //Buzon de entrada
    if(!info.name){ //Si en el buzon No tengo nombre
        res.json({
            msj:"ruta countries",
            info,
            resultado:"Toda la data" //Respondo con todos los paises
        }) 
    } else{ //Si en el buzon tengo un nombre
        res.json({
            msj:"ruta countries",
            info,
            resultado:`Solo trae name: ${info.name}` //Solo respondo con ese pais
        })
    }
})

routerCountry.get("/countries/:id",(req,res)=>{
    const {id} = req.params
    res.send(`Ruta countries 
    id: ${id}`)   
})

module.exports = routerCountry;