const express = require("express");
const colors = require('colors')
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port =  5000;

connectDB()

const app = express();
//the request we wanna listen for
// get(endpoint, (req,res)=> { res.usually we will return json})and add status(200)
// in postman > headers the content-type should be application/json
// basically each resourse in your API will have its own rout folder

//to read body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//instead of use endpoint use / if you hit /api/goals it will look to this file
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

//overwrite the default Express error
app.use(errorHandler);

app.listen(port, () => console.log(`server started on ${port}`));
