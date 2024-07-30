require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const pdfkit = require("pdfkit");
const pdfMake = require("pdfmake");
const fonts = {
	Roboto: {
		normal: "fonts/Roboto-Regular.ttf",
		bold: "fonts/Roboto-Bold.ttf",
		italics: "fonts/Roboto-Italic.ttf",
		bolditalics: "fonts/Roboto-BoldItalic.ttf",
	},
};

const printer = new pdfMake(fonts);
const app = express();
const PORT = process.env.PORT || 4000;
const mongoURI = process.env.MONGODB_URI;
// const HOST = '192.168.29.40'

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Enable Mongoose Debugging
mongoose.set("debug", true);

// MongoDB Connection
mongoose
	.connect(
		mongoURI
	)
	.then(() => {
		console.log("Connected to MongoDB")
	})
	.catch((err) => {
		console.error("Error connecting to MongoDB", err);
	});

// Data Models
const resumeSchema = new mongoose.Schema({
	name: String,
	email: String,
	phone: String,
	github: String,
	linkedin: String,
	education: [
		{
			id: { type: String, required: true },
			schoolName: { type: String, required: true },
			schoolLocation: { type: String, required: true },
			degree: { type: String, required: true },
			fieldOfStudy: { type: String, required: true },
			endDate: { type: String, required: true },
			startDate: { type: String, required: true },
			courseWork: { type: "String", required: true },
		},
	],
	experience: [
		{
			id: { type: String, required: true },
			jobTitle: { type: String, required: true },
			city: { type: String, required: true },
			employer: { type: String, required: true },
			country: { type: String, required: true },
			jobDescription: { type: "String", required: true },
			startDate: { type: String, required: true },
			endDate: { type: String },
		},
	],
	skills: { type: "String", required: true },
	project: [
		{
			id: { type: String, required: true },
			projectTitle: { type: String, required: true },
			projectDescription: { type: String, required: true },
			projectLink: String,
		},
	],
});

const contactSchema = new mongoose.Schema({
	name: String,
	email: String,
	message: String,
	date: { type: Date, default: Date.now },
});

const Resume = mongoose.model("Resume", resumeSchema);
const Contact = mongoose.model("Contact", contactSchema);

// Routes
app.get("/", async (req, res) => {
	try {
		res.status(200).send("this is backend Successfully running");
	} catch (err) {
		res.status(400).send(err);
	}
});
app.post("/api/resume", async (req, res) => {
	try {
		console.log("Received resume data:", req.body); // Log request body
		const resume = new Resume(req.body);
		await resume.save();
		res.status(201).send(resume);
	} catch (error) {
		console.error("Error saving resume:", error); // Log errors
		res.status(400).send(error);
	}
});

// app.get("/api/resume/:id", async (req, res) => {

// });

app.get("/api/resume/:id/pdf", async (req, res) => {
	const pdfMake = require("pdfmake/build/pdfmake");
	const pdfFonts = require("pdfmake/build/vfs_fonts");
	pdfMake.vfs = pdfFonts.pdfMake.vfs;

	try {
		const resume = await Resume.findById(req.params.id);
		if (!resume) {
			return res.status(404).send("Resume not found");
		}

		const docDefinition = {
			content: [
				// Header
				{ text: resume.name, style: "header" },
				{
					columns: [
						{
							text: `Email: ${resume.email}`,
							link: `mailto:${resume.email}`,
							style: "contactInfo",
						},
						{
							text: `GitHub: ${resume.github}`,
							link: resume.github,
							style: "contactInfo",
						},
						{
							text: `LinkedIn: ${resume.linkedin}`,
							link: resume.linkedin,
							style: "contactInfo",
						},
						{ text: `Phone: ${resume.phone}`, style: "contactInfo" },
					],
					columnGap: 10, // Adjust the gap between columns as needed
				},
				{
					canvas: [
						{ type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 },
					],
					margin: [0, 5, 0, 5], // Adjust the margin as needed
				},

				// Skills
				{ text: "SKILLS", style: "subheader" },
				{ text: resume.skills, margin: [0, 0, 0, 10] },

				// Education
				{ text: "EDUCATION", style: "subheader" },
				...resume.education.map((edu) => [
					{
						columns: [
							{
								text: `${edu.degree} in ${edu.fieldOfStudy}`,
								style: "eduTitle",
							},
							{
								text: `${edu.schoolLocation} (${edu.startDate} - ${edu.endDate})`,
								style: "eduSubTitle",
								alignment: "right",
							},
						],
					},
					{
						text: edu.schoolName,
						style: "eduSubTitle",
					},
					{ text: "", margin: [0, 0, 0, 10] },
					{
						text: `Relevant Coursework: ${edu.courseWork}`,
						margin: [0, 0, 0, 20],
					},
				]),

				// Experience
				{ text: "EXPERIENCE", style: "subheader" },
				...resume.experience.map((exp) => [
					{
						columns: [
							{ text: exp.jobTitle, style: "expTitle" },
							{
								text: `${exp.employer}, ${exp.city}, ${exp.country}`,
								style: "expSubTitle",
								alignment: "right",
							},
						],
					},
					{
						text: `From: ${exp.startDate} To: ${exp.endDate || "Present"}`,
						style: "expSubTitle",
						alignment: "right",
					},
					{ text: "", margin: [0, 0, 0, 10] },
					{ text: exp.jobDescription, margin: [0, 0, 0, 20] },
				]),

				// Projects
				{ text: "PROJECTS", style: "subheader" },
				...resume.project.map((proj) => [
					{ text: proj.projectTitle, style: "projTitle" },
					{ text: proj.projectDescription },
					{
						text: proj.projectLink,
						link: proj.projectLink,
						margin: [0, 0, 0, 10],
					},
				]),
			],
			styles: {
				header: {
					fontSize: 22,
					bold: true,
					alignment: "center",
					margin: [0, 0, 0, 10],
				},
				contactInfo: {
					fontSize: 12,
					alignment: "center",
					margin: [0, 0, 0, 5],
				},
				subheader: { fontSize: 16, bold: true, margin: [0, 10, 0, 5] },
				eduTitle: { fontSize: 12, bold: true },
				eduSubTitle: { fontSize: 10, italics: true, alignment: "right" },
				expTitle: { fontSize: 12, bold: true },
				expSubTitle: { fontSize: 10, italics: true },
				projTitle: { fontSize: 12, bold: true },
			},
		};

		const pdfDoc = pdfMake.createPdf(docDefinition);
		pdfDoc.getBuffer((buffer) => {
			res.writeHead(200, {
				"Content-Type": "application/pdf",
				"Content-Disposition": `attachment; filename=${resume.name.replace(
					" ",
					"_"
				)}-resume.pdf`,
				"Content-Length": buffer.length,
			});
			res.end(buffer);
		});
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});

// New Contact Us Route
app.post("/api/contact", async (req, res) => {
	try {
		console.log("Received contact data:", req.body); // Log request body
		const contact = new Contact(req.body);
		await contact.save();
		res.status(201).send(contact);
	} catch (error) {
		console.error("Error saving contact message:", error); // Log errors
		res.status(400).send(error);
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
