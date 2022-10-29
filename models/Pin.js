const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
      min: 3,
    },
    desc: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
      min: 0,
      max: 5,
    },
    lat: {
      type: Number,
      require: true,
    },
    // lat means latitude
    long: {
      type: Number,
      require: true,
    },
    // long means longitude
  }
  // timestamps:true means that the user will have a createdAt and updatedAt field
  // yorum ekleyerek gidiyorum böylelikle ileride bir projede bu kavramlardan yardım alabilirim :)
);

module.exports = mongoose.model("Pin", PinSchema);
