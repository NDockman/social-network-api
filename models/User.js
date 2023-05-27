const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Assignment');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      //trimmed
      max_length: 20,
    },
    email: {
      type: String,
      required: true,
      //unique
      //must match a valid email address
      max_length: 30,
    },
    thoughts: {
      //array of _id values referencing Thought model
    },
    friends: {
      //array of _id values referencing User model
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
