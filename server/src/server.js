const express = require("express"); //Manipula los servidores
const router = require("./routes/index.js");
const morgan = require("morgan"); // monitoreador de eventos http (GET,POST,PUT,DELETE)
const cors = require("cors");

const server = express();

server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use(morgan("dev"))
server.use(cors())

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", router); //Define la ruta raiz

module.exports = server;
