const note = require("express").Router();
const { writeToFile, readFromFile, readAndAppend } = require("../helpers/fsUtils");

notes.get ("/", (req, res) =>
    readFromFile("./db/db.json").then((data) =>
        res.json(JSON.parse(data)))
);
notes.post("/", (req, res) => {
    const {title, text} = req.body;
    if (title && text) {
        const newNote = { 
            title, 
            text, 
            note_id: uuid(),
        };
        readAndAppend(newNote, "./db/db.json");
        const response = {
            status: "success",
            body: newNotes,
        };
        res.json(response);
    } else {
        res.json("Error posting note.");
    }
});