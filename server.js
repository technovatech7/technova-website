const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Main Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// GOOGLE SCRIPT URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyaSLqV_HB_KfB0paok9HwqxW19__I_01oYrueBscBHq9kevC4qiCW0sOHpo5XXHKSV/exec";

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ status: "error", message: "All fields are required." });
    }

    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        return res.status(200).json({
            status: "success",
            message: "Thank you! TechNova team will contact you soon."
        });
    } catch (error) {
        console.error("Error saving lead:", error);
        return res.status(500).json({ status: "error", message: "Something went wrong." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
