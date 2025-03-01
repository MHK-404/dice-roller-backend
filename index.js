const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// RESTful API to roll a dice
app.get('/roll-dice', (req, res) => {
  const result = Math.floor(Math.random() * 6) + 1;
  res.json({ result });
});

// RESTful API to wake up the server
app.get('/wake-up', (req, res) => {
  res.json({ message: 'Server is awake' });
});

// Route to demonstrate CORS failure
app.get('/no-cors', (req, res) => {
  res.json({ message: 'This route has no CORS' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});