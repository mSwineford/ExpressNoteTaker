const express = require("express");
const notes = require("./notes.js");
const app = express();

app.use("./note", notes);
module.exports = app;