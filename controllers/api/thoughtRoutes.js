const router = require('express').Router();
const { Thought } = require('../../models');

// Get all thoughts
router.get("/", async (req, res) => {
  try {
    const thoughtData = await Thought.findAll({
      //include: Reaction
    });
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// Get a single thought
router.get("/:id", async (req, res) => {
  try {
    const thoughtData = await Thought.findOne({
      where: {
        id: req.params.id
      },
      //include: Reaction
    });
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// Create a thought
router.post('/', async (req, res) => {
    try {
      const newThought = await Thought.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newThought);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // Delete a thought
  router.delete('/:id', async (req, res) => {
    try {
      const thoughtData = await Thought.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!thoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
  
      res.status(200).json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  