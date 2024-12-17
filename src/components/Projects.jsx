import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects from the API when the component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/projects');
        console.log('res', response.data);
        setProjects(response.data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading projects...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">{error}</div>;
  }

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {projects && projects.length > 0 ? (
          projects.map((project, idx) => (
            <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    width={150}
                    height={150}
                    className="mb-6 rounded"
                    src={project.image}
                    alt={project.title}
                  />
                </a>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-34"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h6 className="mb-2 font-semibold">{project.title}</h6>
                </a>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div>
                  {project.technologies && project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))
        ) : (
          <div className="text-center text-lg">No projects to display.</div>
        )}
      </div>
    </div>
  );
};

export default Projects;
