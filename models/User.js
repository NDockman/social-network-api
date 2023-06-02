const { Schema, model } = require('mongoose');
//const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

// Schema to create User model
const userSchema = new Schema(
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
      unique: true,
      //must match a valid email address
      validate: {
        validator: function (value) {
          // Return statement executes when the validator succeeds
          return value !== userSchema.email
        },
        // This message is sent when the validator fails
        message: "That email is already being used. Please pick a different email."
      }
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

const User = model('user', userSchema);

module.exports = User;
