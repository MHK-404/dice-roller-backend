const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for the frontend domain
app.use(cors({
  origin: 'https://green-smoke-0e27ad900.6.azurestaticapps.net' // Allow requests from the frontend
}));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Dice Roller Backend!');
});

// RESTful API to wake up the server
app.get('/wake-up', (req, res) => {
  res.json({ message: 'Server is awake' });
});

// RESTful API to roll a dice
app.get('/roll-dice', (req, res) => {
  const result = Math.floor(Math.random() * 6) + 1;
  res.json({ result });
});

// Route to demonstrate CORS failure
app.get('/no-cors', (req, res) => {
  res.json({ message: 'This route has no CORS' });
});

// Start the server
const PORT = process.env.PORT || 8080; // Use 8080 as the default port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
