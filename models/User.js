const { Schema, model } = require('mongoose');
//const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

// Schema to create User model
const userSchema = new /*mongoose.*/Schema(
  {
    username: {
      type: String,
      required: true,
      //trimmed
      $trim: { input: "" }
    },
    email: {
      type: String,
      required: true,
      //unique
      unique: true,
      //must match a valid email address
    },
    thoughts: {
      //array of _id values referencing Thought model
      type: Schema.Types.ObjectId,
      ref: ["Thought"]
    },
    friends: {
      //array of _id values referencing User model
      type: Schema.Types.ObjectId,
      ref: ["User"]
    }
  },
  // {
  //   toJSON: {
  //     getters: true
  //   }
  // }
);

const User = /*mongoose.*/model('user', userSchema);

module.exports = User;
