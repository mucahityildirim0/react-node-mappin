const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      // require:true means that the username field is required
      min: 3,
      max: 20,
      unique: true,
      //unique:true means that the username field must be unique
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
  },
  { timestamps: true }
  // timestamps:true means that the user will have a createdAt and updatedAt field
  // yorum ekleyerek gidiyorum böylelikle ileride bir projede bu kavramlardan yardım alabilirim
);

module.exports = mongoose.model("User", UserSchema);
