const Careers = require('../models/Careers');
const fs = require('fs');

const careers = async (req, res) => {
    try {
        const { name, email, position, message } = req.body;

        // Validate required fields
        if (!name || !email || !position || !message) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Validate file upload
        if (!req.file) {
            return res.status(400).json({ message: 'Resume file is required.' });
        }

        // Read file data from disk
        const fileData = fs.readFileSync(req.file.path);

        const newApplication = new Careers({
            name,
            email,
            position,
            message,
            resume: {
                data: fileData,
                contentType: req.file.mimetype,
            },
        });

        await newApplication.save();

        // Delete temp file after saving to DB
        fs.unlinkSync(req.file.path);

        res.status(201).json({ message: 'Application submitted successfully.' });
    } catch (error) {
        console.error('Error submitting application:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

module.exports = { careers };
