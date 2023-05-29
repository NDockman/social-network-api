const router = require('express').Router();
const { Thought } = require('../../models');

// Get all thoughts
router.get("/", async (req, res) => {
  try {
    const thoughtData = await Thought.find({})
    //include: Reaction
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single thought
router.get("/:id", async (req, res) => {
  try {
    const thoughtData = await Thought.findById(req.params.id)
    //include: Reaction
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a thought
router.post('/', async (req, res) => {
    try {
      const newThought = await Thought.create({
        // ...req.body,
      });
  
      res.status(200).json(newThought);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Update a thought
router.put('/:id', async (req, res) => {
  try {
    const thoughtData = await Thought.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(400).json(err);
  }
});
  
// Delete a thought
router.delete('/:id', async (req, res) => {
  try {
    const thoughtData = await Thought.findByIdAndDelete(req.params.id)

    res.status(200).json({ deleted: true });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
