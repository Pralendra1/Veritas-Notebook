const monggose = require("mongoose");
monggose.connect("mongodb+srv://azizamanaaa97:2s3354LUZe0BzSu7@cluster0.tyjfznw.mongodb.net/Veritas-Notebook");

const notesschema = monggose.Schema({
  title: String,
  description: String,
});

const Notes = monggose.model("notes", notesschema);
module.exports = {
  Notes,
};
