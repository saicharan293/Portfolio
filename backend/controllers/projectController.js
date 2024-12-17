// controllers/projectController.js

const cloudinary = require('cloudinary').v2;
const Project = require('../models/Project');
require('dotenv').config()

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Add Project with Image Upload
const addProject = (req, res) => {
  const { title, description, link, technologies } = req.body;
  const imageFile = req.file; // Get the uploaded image file

  if (!imageFile) {
    return res.status(400).json({ error: 'No image file uploaded' });
  }

  // Upload image to Cloudinary
  cloudinary.uploader.upload(imageFile.path, { tags: 'portfolio' })
    .then((result) => {
      const newProject = new Project({
        title,
        description,
        link,
        technologies: technologies.split(','),
        image: result.secure_url, // Save Cloudinary URL of the uploaded image
      });

      newProject.save()
        .then(() => res.status(200).json(newProject))
        .catch((error) => res.status(500).json({ error: 'Failed to save project', message: error.message }));
    })
    .catch((error) => {
      console.error('Error uploading image to Cloudinary:', error);
      res.status(500).json({ error: 'Failed to upload image' });
    });
};

// Get all Projects
const getAllProjects = (req, res) => {
  Project.find()
    .then((projects) => res.status(200).json(projects))
    .catch((error) => res.status(500).json({ error: 'Failed to fetch projects', message: error.message }));
};

module.exports = { addProject, getAllProjects };
