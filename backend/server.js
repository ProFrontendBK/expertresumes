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

// Enable Mongoose Debugging
mongoose.set('debug', true);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/expertresumes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

// Data Models
const resumeSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    education: String,
    experience: String,
    skills: [String],
    projects: String,
    github: String,
    linkedin:String
});

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const Resume = mongoose.model('Resume', resumeSchema);
const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/',async (req , res) => {
    try{

        res.status(200).send("this is backend Successfully running")

    }catch (err){
        res.status(400).send(err)
    }
})
app.post('/api/resume', async (req, res) => {
    try {
        console.log('Received resume data:', req.body); // Log request body
        const resume = new Resume(req.body);
        await resume.save();
        res.status(201).send(resume);
    } catch (error) {
        console.error('Error saving resume:', error); // Log errors
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
        console.error('Error fetching resume:', error); // Log errors
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
        res.setHeader('Content-Disposition', `attachment; filename=${resume.name.replace(' ', '_')}-resume.pdf`);

        doc.pipe(res);

        // Header
        doc.fontSize(20).font('Helvetica-Bold').text(resume.name, { align: 'center' });
        doc.moveDown();

        //Horizontal Email and Phone
        const topY = doc.y;
        doc.fontSize(10).font('Helvetica').text(`Email: ${resume.email}`, 50, topY, { continued: true });
        doc.text(' | ', doc.x, topY, { continued: true });
        doc.text(`Phone: ${resume.phone}`, doc.x, topY);
        
        
        doc.moveDown(2);
  
        // Section Separator
        const addSectionSeparator = () => {
            doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
            doc.moveDown();
        };
        //skills
        doc.fontSize(10).font('Helvetica-Bold').fillColor('black').text('Skills');
        addSectionSeparator();
        const skillsList = resume.skills.join(' \u2022 '); // Use middle dot as bullet
        doc.fontSize(10).fillColor('black').font('Helvetica').text(skillsList);
        doc.moveDown();

         // Section: Experience
         doc.fontSize(10).font('Helvetica-Bold').fillColor('black').text('Experience');
         addSectionSeparator();
         doc.fontSize(10).fillColor('black').font('Helvetica').text(resume.experience);
 
         doc.moveDown(1);
        

        
         
          // Section: Projects
        doc.fontSize(10).font('Helvetica-Bold').fillColor('black').text('Projects');
        addSectionSeparator();

        // Add clickable project links
        const projects = resume.projects.split('\n');
        projects.forEach(project => {
            const match = project.match(/\[(.*?)\]\((.*?)\)/); // Matches [Link Text](URL)
            if (match) {
                const [fullMatch, text, url] = match;
                const description = project.replace(fullMatch, '');
                doc.fontSize(10).fillColor('black').font('Helvetica').text(description, { continued: true });
                doc.fillColor('blue').font('Helvetica').text(text, {
                    link: url,
                    underline: true,
                    continued: false
                });
            } else {
                doc.fontSize(10).fillColor('black').font('Helvetica').text(project);
            }
        });

        doc.moveDown(1);

        // Section: Education
        doc.fontSize(10).font('Helvetica-Bold').fillColor('black').text('Education');
        addSectionSeparator();
        doc.fontSize(10).fillColor('black').font('Helvetica').text(resume.education);
        
        doc.moveDown(1);

       

        // Section: Contact Us
        doc.fontSize(10).font('Helvetica-Bold').fillColor('black').text('Summary');
        addSectionSeparator();
        doc.fontSize(10).fillColor('black').font('Helvetica').text(`For more information, visit our website or reach out to us directly.`);

        doc.moveDown();
        doc.opacity(0.2);
        doc.fontSize(10).fillColor('black').font('Helvetica').text(`Website: www.expertresumes.com`, { align: 'center', link: 'https://www.expertresumes.com' });
        doc.end();
    } catch (error) {
        console.error('Error generating PDF:', error); // Log errors
        res.status(400).send(error);
    }
});

// New Contact Us Route
app.post('/api/contact', async (req, res) => {
    try {
        console.log('Received contact data:', req.body); // Log request body
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).send(contact);
    } catch (error) {
        console.error('Error saving contact message:', error); // Log errors
        res.status(400).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
