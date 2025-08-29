const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());

let items = [
  { id: 1, name: "Learn Node.js", completed: false },
  { id: 2, name: "Build my first API", completed: false },
  { id: 3, name: "Test API with Postman", completed: true }
];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const item = { id: items.length + 1, name: req.body.name };
  items.push(item);
  res.status(201).json(item);
});

app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);

  if (!item) return res.status(404).json({ message: 'Item not found' });

  item.name = req.body.name;
  res.json(item);
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
