import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Admin = () => {
  const [project, setProject] = useState({
    title: '',
    link: '',
    description: '',
    technologies: '',
    imageFile: null,
  });
  const [projects, setProjects] = useState([]); // Initialize state with an empty array
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch projects from backend API when the component mounts
  const fetchProjects = async () => {
    try {
      const response = await axios.get('https://my-website-backend-1keq.onrender.com/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setError('Failed to fetch projects');
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProject((prev) => ({
      ...prev,
      imageFile: file,
    }));
  };

  // Handle logout functionality
  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  // Handle form submission for adding a new project
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!project.title || !project.link || !project.description || !project.technologies || !project.imageFile) {
      setError('All fields are required.');
      return;
    }

    // Create a FormData object to handle the file upload
    const formData = new FormData();
    formData.append('title', project.title);
    formData.append('link', project.link);
    formData.append('description', project.description);
    formData.append('technologies', project.technologies);
    formData.append('image', project.imageFile);

    // Submit the new project data to the backend
    try {
      const response = await axios.post('https://my-website-backend-1keq.onrender.com/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      // Refresh the list of projects after submission
      setProjects((prev) => [...prev, response.data]);

      // Reset the form
      setProject({
        title: '',
        link: '',
        description: '',
        technologies: '',
        imageFile: null,
      });
      setError('');
    } catch (error) {
      console.error('Error adding project:', error);
      setError('Failed to add project.');
    }
  };

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Page</h1>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {error && <p className="text-red-400 mb-4">{error}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-lg font-medium">Project Title</label>
          <input
            type="text"
            name="title"
            value={project.title}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium">Project Link</label>
          <input
            type="url"
            name="link"
            value={project.link}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium">Description</label>
          <textarea
            name="description"
            value={project.description}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded-md"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-lg font-medium">Technologies</label>
          <input
            type="text"
            name="technologies"
            value={project.technologies}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded-md"
            placeholder="Comma-separated values"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium">Upload Project Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full mt-1 text-gray-300"
            required
          />
        </div>

        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
          Add Project
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Uploaded Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {projects.map((proj, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded-md">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <p>{proj.description}</p>
              <p className="mt-2 text-sm text-gray-400">
                {Array.isArray(proj.technologies)
                  ? proj.technologies.join(', ')
                  : proj.technologies.split(',').join(', ')}
              </p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-cyan-400"
              >
                Visit Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
