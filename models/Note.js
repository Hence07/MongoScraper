var mongoose = require("mongoose");

// Store our dependency in variable name Schema
var Schema = mongoose.Schema;

// Creating a newSchema object
var NoteSchema = new Schema({
  
  title: String,

  body: String
});


var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;
