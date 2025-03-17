const mongoose = require('mongoose');

const CareersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    resume: {
        data: Buffer,           // File content stored as binary
        contentType: String,    // MIME type of file (e.g., application/pdf)
    }
});

module.exports = mongoose.model('Careers', CareersSchema);
