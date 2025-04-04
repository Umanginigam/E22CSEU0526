// app.js
const express = require('express');
const app = express();
require('dotenv').config();

const userRoutes = require('./routes/users');
const postRoutes = require('./routes/post');

app.use(express.json());
app.use('/', userRoutes);
app.use('/', postRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
