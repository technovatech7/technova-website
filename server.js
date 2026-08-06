const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Main HTML Page Serve Karne Ke Liye Code
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Database Array
const clientLeads = [];

// API Endpoint to Receive Leads
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ status: "error", message: "All fields are required." });
    }

    const newLead = {
        id: clientLeads.length + 1,
        name,
        email,
        message,
        date: new Date()
    };

    clientLeads.push(newLead);

    return res.status(200).json({
        status: "success",
        message: "Thank you! TechNova team will contact you soon."
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
