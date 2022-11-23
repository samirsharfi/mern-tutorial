const mongoose = require("mongoose");

const goalSchema = {
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  text: {
    type: String,
    required: [true, "Please add a text value"],
  },
};

module.exports = mongoose.model("Goal", goalSchema);
