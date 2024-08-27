// routes/items.js
const express = require('express');
const router = new express.Router();
const items = require('./fakeDb');

// GET /items - Get all items
router.get('/', (req, res) => {
  return res.json(items);
});

// POST /items - Add a new item
router.post('/', (req, res) => {
  const newItem = { name: req.body.name, price: req.body.price };
  items.push(newItem);
  return res.status(201).json({ added: newItem });
});

// GET /items/:name - Get a single item by name
router.get('/:name', (req, res) => {
  const foundItem = items.find(item => item.name === req.params.name);
  if (foundItem) {
    return res.json(foundItem);
  }
  return res.status(404).json({ error: "Item not found" });
});

// PATCH /items/:name - Update a single item's name or price
router.patch('/:name', (req, res) => {
  const foundItem = items.find(item => item.name === req.params.name);
  if (foundItem) {
    foundItem.name = req.body.name || foundItem.name;
    foundItem.price = req.body.price || foundItem.price;
    return res.json({ updated: foundItem });
  }
  return res.status(404).json({ error: "Item not found" });
});

// DELETE /items/:name - Delete a single item
router.delete('/:name', (req, res) => {
  const itemIndex = items.findIndex(item => item.name === req.params.name);
  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
    return res.json({ message: "Deleted" });
  }
  return res.status(404).json({ error: "Item not found" });
});

module.exports = router;
