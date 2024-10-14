import { useState } from "react";
import Project1 from "@/scenes/allProjects/project1.tsx"; 
import Project2 from "@/scenes/allProjects/slm.tsx"; 
import Project3 from "@/scenes/allProjects/designs.tsx"; 

const projectsData = [
  { id: 1, title: "MemPal", component: <Project1 /> },
  { id: 2, title: "Foster Care Data Analysis", component: <Project2 /> },
  { id: 3, title: "Design Exercises", component: <Project3 /> },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full pt-24">
      <h1 className="text-4xl mb-8">Welcome to my projects page!</h1>

      <div className="flex w-full">
        {/* Sidebar with Project Buttons */}
        <div className="flex flex-col justify-start w-3/5 h-full ">
          {projectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)} // Update the selected project on click
              className={`p-4 text-3xl ${
                selectedProject.id === project.id
                  ? "bg-pale-blue"
                  : "bg-light-blue"
              } hover:bg-mid-blue`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Project Details Section */}
        <div className="flex-grow p-12 bg-pale-blue">
          {selectedProject.component} {/* Render the selected project's component */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
