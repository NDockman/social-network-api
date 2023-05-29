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

// Get a single user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findById(req.params.id)
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// Create a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

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
    const userData = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({ deleted: true });
  } catch (err) {
    res.status(400).json(err);
  }
})



module.exports = router;