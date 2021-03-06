const mongoose = require("mongoose");

//schema
const PostSchema = mongoose.Schema({
  title: {
    type: Object,
    required: true,
  },
  description: String,
});

module.exports = mongoose.model("frameData", PostSchema);
