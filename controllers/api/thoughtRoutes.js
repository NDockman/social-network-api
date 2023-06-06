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
      console.log({...req.body})
      const newThought = await Thought.create({...req.body});
  
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

//create a reaction stored in a single thought's reactions array field
router.post("/:thoughtId/reactions", async (req, res) => {
  try {
    const thoughtData = await Thought.findById(req.params.thoughtId);

    const newReaction = await thoughtData.reactions.create(req.body);
    // const newReaction = await thoughtData.reactions.push({
    //   reactionBody: ,
    //   username:
    // })

    res.status(200).json(newReaction);
  } catch (err) {
    res.status(400).json(err);
  }
});

//pull and remove a reaction by the reaction's reactionId value
router.delete(":thoughtId/reactions", async (req, res) => {
  try {
    const thoughtData = await Thought.findById(req.params.thoughtId)

    res.status(200).json({  });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
