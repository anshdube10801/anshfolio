import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import experiences from "./experience.json";
import projects from "./resumeProjects.json";
import { Link } from "react-router-dom";


const Resume = () => {
    return (
      <>
        {/* Back Button */}
        <div className="flex p-5 sm:ml-20 cursor-pointer">
          <Link to="/">
            <IoMdArrowBack size={20} />
          </Link>
        </div>
  
        {/* Main Container */}
        <div className="max-w-2xl mx-auto px-5 sm:px-0"> 
          {/* Resume Download */}
          <a
            href="https://drive.google.com/file/d/1Vtxz0CQ0bFf8yAt_idKCl-cXJ8o3-yty/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-end mb-1 cursor-pointer">
              <LuDownload size={20} />
            </div>
          </a>
  
          {/* Name Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-[var(--custom-head-text)] via-[var(--custom-head-text)] to-[var(--custom-head-text)] text-transparent bg-clip-text">
                A
              </span>
              <span>nsh</span>
              <span className="ml-2 sm:ml-4 bg-gradient-to-r from-[var(--custom-head-text)] via-[var(--custom-head-text)] to-[var(--custom-head-text)] text-transparent bg-clip-text">
                D
              </span>
              <span>ube</span>
            </h1>
          </div>
  
          {/* Work Experience */}
          <div className="mb-12">
            <h2 className="text-lg sm:text-[20px] font-bold mb-4">Work Experience</h2>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10">
                <a href={exp?.link} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-2">
                    <p className="text-[var(--custom-head-text)] font-bold underline text-[16px] sm:text-[18px]">
                      {exp.company}
                    </p>
                    <FaArrowUpRightFromSquare />
                  </div>
                </a>
                <p className="mt-1 font-semibold text-[14px]">{exp.role} | {exp.duration}</p>
                <ul className="list-disc list-outside mt-2 space-y-1 text-gray-700 text-[14px] pl-5">
                  {exp.highlights.map((point, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          {/* Projects */}
          <div className="mb-12">
            <h2 className="text-lg sm:text-[20px] font-bold mb-4">Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-10">
                <a href={project?.link} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-2">
                    <p className="text-[16px] sm:text-[18px] font-bold">{project.projectTitle}</p>
                    <FaArrowUpRightFromSquare />
                  </div>
                </a>
                <p className="mt-1 font-semibold text-[var(--custom-head-text)] underline text-[14px]">{project.tech}</p>
                <ul className="list-disc list-outside mt-2 space-y-1 text-gray-700 text-[14px] pl-5">
                  {project.highlights.map((point, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          {/* Education */}
          <div className="mb-12">
            <h2 className="text-lg sm:text-[20px] font-bold mb-4">Education</h2>
            <div className="mb-10">
              <p className="font-bold text-[16px] sm:text-[18px]">Medi-Caps University, Indore</p>
              <p className="mt-1 font-semibold text-[14px]">Bachelor of Engineering in IT | June 2019 - June 2023</p>
              <ul className="list-disc list-outside mt-2 space-y-1 text-gray-700 text-[14px] pl-5">
                <li>Graduated with CGPA of <strong>8.5 / 10</strong>.</li>
              </ul>
            </div>
          </div>
  
          {/* Honors & Awards */}
          <div className="mb-12">
            <h2 className="text-lg sm:text-[20px] font-bold mb-4">Honors & Awards</h2>
            <div className="mb-10">
              <ul className="list-disc list-outside mt-2 space-y-1 text-gray-700 text-[14px] pl-5">
                <li>Awarded with <strong>On the Spot award</strong> by the project in <strong>TCS</strong>.</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Resume;
  