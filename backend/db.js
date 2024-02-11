const monggose = require("mongoose");
monggose.connect("mongodb://localhost:27017");

const notesschema = monggose.Schema({
  title: String,
  description: String,
});

const Notes = monggose.model("notes", notesschema);
module.exports = {
  Notes,
};
