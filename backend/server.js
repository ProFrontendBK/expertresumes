const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const pdfkit = require('pdfkit');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/expertresumes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

// Data Model
const resumeSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    education: String,
    experience: String,
    skills: [String],
    projects: String
});

const Resume = mongoose.model('Resume', resumeSchema);

// Routes
app.post('/api/resume', async (req, res) => {
    try {
        const resume = new Resume(req.body);
        await resume.save();
        res.status(201).send(resume);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/api/resume/:id', async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id);
        if (!resume) {
            return res.status(404).send('Resume not found');
        }
        res.send(resume);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/api/resume/:id/pdf', async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id);
        if (!resume) {
            return res.status(404).send('Resume not found');
        }

        const doc = new pdfkit();

        res.setHeader('Content-type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=${resume.name}-resume.pdf`);

        doc.pipe(res);

        doc.fontSize(25).text(resume.name, { align: 'center' });
        doc.fontSize(20).text(`Email: ${resume.email}`, { align: 'center' });
        doc.fontSize(20).text(`Phone: ${resume.phone}`, { align: 'center' });

        doc.moveDown();
        doc.fontSize(15).text(`Education: ${resume.education}`, { align: 'left' });
        doc.fontSize(15).text(`Experience: ${resume.experience}`, { align: 'left' });
        doc.fontSize(15).text(`Skills: ${resume.skills.join(', ')}`, { align: 'left' });
        doc.fontSize(15).text(`Projects: ${resume.projects}`, { align: 'left' });

        doc.end();
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
