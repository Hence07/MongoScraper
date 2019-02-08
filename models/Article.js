var mongoose = require("mongoose");

// Store  ref to the Schema constructor
var Schema = mongoose.Schema;

// Create a new UserSchema object

var ArticleSchema = new Schema({
  // title required
  title: {
    type: String,
    required: true
  },
  //Link required
  link: {
    type: String,
    required: true
  },
  // This allows us to populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// Creating our models
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;