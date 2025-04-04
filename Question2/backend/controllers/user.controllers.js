// Description: This file contains the controller for fetching the top users from the API.
const axios = require('axios');

const getTopUsers = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: 'Authorization header missing' });
    }

    const response = await axios.get(`${process.env.API_URL}/users`, {
      headers: {
        Authorization: authHeader,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

module.exports = { getTopUsers };

