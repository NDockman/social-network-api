const dayjs = require("dayjs");
const { Schema, Types, model } = require("mongoose");
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
      // Getter method to format the timestamp on query
      get: (timestamp) => {
        return dayjs(timestamp).format("DD/MM/YYYY")
      }
    }
  }
);

// Schema to create a Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Getter method to format the timestamp on query
      get: (timestamp) => {
        return dayjs(timestamp).format("DD/MM/YYYY")
      }
    },
    username: {
      type: String,
      required: true,
    },
    // Array of nested documents (rows) created with reactionSchema
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false
  }
);

thoughtSchema.virtual("reactionCount").get(function() {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
