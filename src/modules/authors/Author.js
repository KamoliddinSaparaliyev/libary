const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
