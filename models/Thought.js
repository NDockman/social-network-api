const { Schema, model } = require('mongoose');

// Schema to create a Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      //must be between 1 and 280 characters
    },
    createdAt: {
      type: Date,
      //set default value to current timestamp
      default: Date.now(),
      //use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
      //array of nested documents created with the reactionSchema
    }
  },
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  //   id: false
  // }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
