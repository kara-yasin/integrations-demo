// index.js
const express = require('express');
const app = express();
app.use(express.json());

/*
 POST /transform
 Body: { "name": "...", "age": 30, "city": "..." }
 Response: { "fullName": "...", "yearsOld": 30, "location": "..." }
*/
app.post('/transform', (req, res) => {
  const { name, age, city } = req.body || {};
  if (!name || age === undefined || !city) {
    return res.status(400).json({ error: 'Missing name, age or city in request body' });
  }
  const transformed = {
    fullName: name,
    yearsOld: age,
    location: city
  };
  return res.json(transformed);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));