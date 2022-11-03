const express = require("express");
const path = require("path");
const uuid = require("./helpers/uuid.js");
const { response } = require("./routes/index.js");

const api = require("./routes/index.js");
const PORT = 3001;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use("./api", api);

app.get("./notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
});
app.get("*", (req, res) => 
    res.sendFile(path.join(__dirname, "./public/index.html"))
);
app.get("./api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./db/db.json"))
});
app.post("./api/notes", (req, res) => {
    console.info(`${req.method} request to save recieved`)
    const { title, text } = req.body;
    if (title && text) {
        const newNotes = {
            title,
            text,
            note_id: uuid(),
        };
        const response = {
            status: "saved",
            body: newNotes,
        };
        console.log(response);
        res.status(201).json(response);
        } else {
            res.status(500).json("error saving");
        }
        
    });
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
