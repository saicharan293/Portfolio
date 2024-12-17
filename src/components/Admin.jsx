import React, { useState } from 'react';
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
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProject((prev) => ({
      ...prev,
      imageFile: file,
    }));
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!project.title || !project.link || !project.description || !project.technologies || !project.imageFile) {
      setError('All fields are required.');
      return;
    }

    const formData = new FormData();
    formData.append('title', project.title);
    formData.append('link', project.link);
    formData.append('description', project.description);
    formData.append('technologies', project.technologies);
    formData.append('image', project.imageFile);

    try {
      const response = await axios.post('http://localhost:5000/api/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert(response.data.message);
      setProject({
        title: '',
        link: '',
        description: '',
        technologies: '',
        imageFile: null,
      });
    } catch (err) {
      setError('Error submitting the project. Please try again.');
    }
  };

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Page</h1>
        <div>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mr-4"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
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
    </div>
  );
};

export default Admin;
