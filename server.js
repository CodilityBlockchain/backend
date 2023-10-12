const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");
const dotenv =require("dotenv").config();
connectDb();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/contacts",require("./routes/contactRoutes"));
app.use("/user",require("./routes/userRoutes"));
app.use(errorHandler)
app.listen(port,()=>{
    console.log (`server is running on port ${port}`);
})