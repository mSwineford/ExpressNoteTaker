const express = require("express");
const note = require("./note.js");
const app = express();

app.use("/note", note);
module.exports = app;