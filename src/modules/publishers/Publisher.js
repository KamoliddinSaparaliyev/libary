const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
});

const Publisher = mongoose.model("Publisher", publisherSchema);

module.exports = Publisher;
