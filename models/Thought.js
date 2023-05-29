//Types?
const { Schema, Types, model } = require('mongoose');
//const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //getter method to format the timestamp on query
    }
  }
);

// Schema to create a Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280
    },
    createdAt: {
      type: Date,
      //set default value to current timestamp
      default: Date.now,
      //use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    // Array of nested documents (rows) created with reactionSchema
    reactions: [reactionSchema]
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
