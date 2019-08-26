const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressValidator = require('express-validator');

dotenv.config()

//db
mongoose.connect(process.env.MONGO_URI,
    {useNewUrlParser:true }
)
.then(() => console.log("DB connected"))

mongoose.connection.on('error' ,err => {
    console.log(`DB connection error :${err.message}`)
})

// bring in route
const postRoutes = require('./routes/port')

//middleware
app.use(morgan("dev"));
app.use("/", postRoutes)
app.use(bodyParser.json())
app.use(expressValidator())
app.use(express.json())

const port = process.env.PORT || 8080;

app.listen(port , () => {
    console.log(`Node Api is listening on this: ${port}`);
})