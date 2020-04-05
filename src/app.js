const express = require("express");
const cors = require("cors");
const projectController = require("./controllers/ProjectController");
const userController = require("./controllers/userController");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// app.use(projectController)(app);
// app.use(userController)(app);

require("./controllers/ProjectController")(app);
require("./controllers/userController")(app);
// app.use(routes);
// app.use(errors());

module.exports = app;
