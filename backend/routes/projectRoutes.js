// routes/projectRoutes.js

const express = require('express');
const multer = require('multer');
const path=require('path')
const { addProject, getAllProjects } = require('../controllers/projectController');

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Define routes
router.post('/', upload.single('image'), addProject); // Add a new project
router.get('/', getAllProjects); // Get all projects

module.exports = router;
