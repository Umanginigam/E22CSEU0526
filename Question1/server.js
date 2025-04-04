const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// API to calculate the average of an array of numbers
app.post("/calculate-average", (req, res) => {
    const { numbers } = req.body;
    
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return res.status(400).json({ error: "Invalid input. Provide an array of numbers." });
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    res.json({ average });
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
