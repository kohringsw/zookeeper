const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const express = require("express");
const { animals } = require("./data/animals.json");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// path to use apiRoutes
app.use('/api', apiRoutes);
// path to use htmlRoutes
app.use('/', htmlRoutes);
// path to allow access to public directories
app.use(express.static("public"));


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
