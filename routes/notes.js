const notes = require("express").Router();
const uuid = require("../helpers/uuid");
const { readFromFile, writeToFile, readAndAppend } = require("../helpers/fsUtils");

notes.get ("/", (req, res) =>
    readFromFile("./db/db.json").then((data) => 
        res.json(JSON.parse(data)))
);
notes.post("/", (req, res) => {
    const {title, text} = req.body;
    if (title && text) {
        const newNotes = { 
            title, 
            text, 
            note_id: uuid(),
        };
        readAndAppend(newNotes, "./db/db.json");
        const response = {
            status: "success",
            body: newNotes,
        };
        res.json(response);
    } else {
        res.json("Error posting note.");
    }
});

module.exports = notes;