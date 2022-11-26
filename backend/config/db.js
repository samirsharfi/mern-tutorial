const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://boom1234:boom1234@boomcluster.qz4257e.mongodb.net/mernapp?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true }
    );
  } catch (error) {
    console.log(error);
    //close the process
    process.exit(1);
  }
};

module.exports = connectDB;
