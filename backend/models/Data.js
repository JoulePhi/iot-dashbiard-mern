const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  topic: String,
  message: Object,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Data", DataSchema);
