const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/assets/projects'); // Save images to this folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Endpoint to handle project submission
app.post('/api/projects', upload.single('image'), (req, res) => {
  const { title, link, description, technologies } = req.body;

  if (!title || !link || !description || !technologies || !req.file) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  res.status(200).json({
    message: 'Project added successfully!',
    project: {
      title,
      link,
      description,
      technologies: technologies.split(',').map((tech) => tech.trim()),
      image: req.file.filename,
    },
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
