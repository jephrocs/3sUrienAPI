//express
const express = require("express");
const app = express();
const port = 3000;
//for terminal
var colors = require("colors");
//to convert to json
const bodyParser = require("body-parser");
app.use(bodyParser.json());
//mongo
const mongoose = require("mongoose");
//hide db
require("dotenv/config");

//middleware routes
const postsRoute = require("./routes/illuminati");

//illuminati route
app.use("/illuminati", postsRoute);

//home
app.get("/", (req, res) => {
  res.send("GET READY TO DIE");
});

//db
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to database".blue.underline)
);

app.listen(port, () => {
  console.log(
    `AEGIS REFLECTOR!! http://localhost:${port}`.underline.brightMagenta.bgGrey
  );
});
