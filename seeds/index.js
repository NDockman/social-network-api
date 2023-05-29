const { Thought, User } = require("../models");

const thoughtData = require("./thought-seeds");
const userData = require("./user-seeds");




//how do I insert documents?
const seedDatabase = async () => {
    await Thought.insertMany(thoughtData);
    await User.insertMany(userData);
}

//const thoughtSeedData = () => db.collection.insertMany(thoughtData);

//const thoughtSeedData = () => Thought.insertMany(thoughtData);



seedDatabase();