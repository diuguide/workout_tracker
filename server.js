const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const apiRoutes = require("./routes/routes");
const htmlRoutes = require("./routes/html");

app.use(apiRoutes);
app.use(htmlRoutes);
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout")

app.listen(PORT, () => {
    console.log("listening on: " + PORT); 
})