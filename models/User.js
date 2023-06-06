const { Schema, model } = require("mongoose");
//const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      // $trim: { input: "" }
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // Must match a valid email address
      validate: {
        validator: function (value) {
          // Return statement executes when the validator succeeds
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
        },
        // This message is sent when the validator fails
        message: "That email is invalid."
      }
    },
    // Array of _id values referencing Thought model
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "thought"
    }],
    // Array of _id values referencing User model
    friends: [{
      type: Schema.Types.ObjectId,
      ref: "user"
    }]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

userSchema.virtual("friendCount").get(function() {
  return this.friends.length;
})


const User = model("user", userSchema);

module.exports = User;
