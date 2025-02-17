import React from 'react';
import projectsData from './projects.json';

const Project = ({ project, index }) => {
    const isEven = index % 2 === 0;
  
    return (
      <div className={`py-8 flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className="md:w-7/12 px-8 md:px-12 mb-4 md:mb-0"> 
        <a href={project.liveLink} target="_blank"> <img src={project.image}  alt={project.title} className="rounded-lg shadow-lg w-full h-auto object-cover border-2 border-[var(--custom-head-text)]" /> </a>
        </div>
        <div className="md:w-5/12 px-8 md:px-12 flex flex-col justify-center"> 
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-700 mb-6">{project.description}</p>
          <div>
            <a href={project.liveLink} target="_blank" className="bg-[var(--custom-red-btn)] hover:bg-[var(--custom-red-btn-hover)] text-white font-bold py-2 px-4 rounded mr-4">
              Visit site
            </a>
          </div>
        </div>
      </div>
    );
  };
  

  const Projects = () => {
    return (
     <section id='projects' className="px-0 py-20 bg-[var(--custom-bg)]"> {/* Removed container, px-4 changed to px-0 */}
    <div className="mx-auto max-w-7xl"> {/* Added max-w and mx-auto for centering */}
    <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
    {projectsData.map((project, index) => (
    <Project key={index} project={project} index={index} />
    ))}
 </div>
     </section>
    );
    };

export default Projects;