const router = require('express').Router();
const { User } = require('../../models');

// Get all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.find({})
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// Alternative way to get all users
// const getAllUsers = async () => {
//   const users = await User.find()
//   return users
// }

// Get a single user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findById(req.params.id)
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// Alternative way to get one user
// const getOneUsers = async (id) => {
//   const user = await User.findById(id)
//   return user
// }

// Create a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Alternative way to create a user
// const createUser = async (data) => {
//   const user = await User.create(data)
//   return user
// }

// Update a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a user
router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ deleted: true });
  } catch (err) {
    res.status(400).json(err);
  }
});

//add a new friend to a user's friend list
router.post("/:userId/friends/:friendId", async (req, res) => {
  try {
    const userData = await User.findById(req.params.userId);
    // console.log(userData)
    // console.log(userData.friends)
    const friendData = await User.findById(req.params.friendId);

    userData.friends = friendData.username;
    friendData.friends = userData.username;

    res.status(200).json(userData.friends);
  } catch (err) {
    res.status(400).json(err);
  }
});

  //remove a friend from a user's friend list
router.delete("/:userId/friends/:friendId", async (req, res) => {

  try {
    const userData = await User.findById(req.params.userId);
    
    res.status(200).json(userData.friends);
  } catch {
    res.status(400).json(err)
  }
})



module.exports = router;