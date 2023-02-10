const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/datademo", {
useNewUrlParser: true,
})
.then(() => {
console.log("Successfully connected to the database");
})
.catch((err) => {
console.log("Could not connect to the database. Error...", err);
process.exit();
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
res.json({"message": "Server is running :D"});//on peut mettre res.send mais c plus rapide de mettre.json
});
let PORT = 3000
require("./app/routes/app.routes.js")(app);
app.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`);
});
