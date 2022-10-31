const express = require("express");
const path = require("path");

// add path to line 5
const indexData = require("./db/db.json")
const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "./public/index.html"))
});
app.get("/notes", (req, res) => {
    res.sendFile(path.join(_dirname, "./public/notes.html"))
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
