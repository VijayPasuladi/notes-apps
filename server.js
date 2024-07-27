// server.js
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(express.json());
app.use(cors());

// Save note route
app.post('/notes', (req, res) => {
  const { title, content } = req.body;
  db.run(`INSERT INTO notes(title, content) VALUES(?, ?)`, [title, content], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ noteId: this.lastID });
  });
});

// List notes route
app.get('/notes', (req, res) => {
  db.all(`SELECT * FROM notes`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json(rows);
  });
});

// Delete note route
app.delete('/notes/:id', (req, res) => {
  db.run(`DELETE FROM notes WHERE id = ?`, req.params.id, err => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ message: "Note deleted" });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
