const express = require("express");
const app = express();
const cors = require("cors");
const timeout = require("connect-timeout");

const lights = require("./routes/lights");
const weather = require("./routes/weather");

app.use(cors());

app.use("/lights", lights);
app.use("/weather", weather);

const server = app.listen(4000, () => console.log("Listening!"));
server.setTimeout(10000);
