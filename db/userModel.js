const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },

  password: {
      type:String,
      required: [true, "Please provide a password!"],
      unique: false,

  },
})

module.exports = mongoose.model.User1 || mongoose.model("User1", UserSchema);