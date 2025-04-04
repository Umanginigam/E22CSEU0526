// routes/userRoutes.js
const express = require('express');
const { getTopUsers } = require('../controllers/user.controllers');
// This route handles GET requests to fetch the top users based on their post counts
const router = express.Router();

router.get('/users', getTopUsers);
module.exports = router;
