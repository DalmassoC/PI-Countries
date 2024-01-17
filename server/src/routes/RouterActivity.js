const { Router } = require("express");

const controllerActivity = require("../controllers/ControllerActivity");

const routerActivity = Router();

// routerActivity.use(controllerActivity)
routerActivity.get("/activities",(req,res)=>{
    res.send("Ruta activities")   
})
routerActivity.post("/activities",(req,res)=>{
    res.send("Ruta activities")   
})

module.exports = routerActivity;