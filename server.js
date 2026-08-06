const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// In-Memory Database Array (Production me MongoDB ya MySQL use karein)
const clientLeads = [];

// API Endpoint to Receive Contact Leads
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
    console.log("New Lead Received for TechNova:", newLead);

    return res.status(200).json({
        status: "success",
        message: "Thank you! TechNova team will contact you soon."
    });
});

// Admin API Endpoint to View All Leads
app.get('/api/leads', (req, res) => {
    res.json(clientLeads);
});

// Start Server
app.listen(PORT, () => {
    console.log(`TechNova Backend running on http://localhost:${PORT}`);
});