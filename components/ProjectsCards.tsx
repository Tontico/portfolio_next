import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import "../styles/globals.css";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

interface ProjectsCardsProps {
  jsonUrl: string;
}

export interface ProjectInterface {
  id: number;
  title: string;
  images: string;
  languages: string[];
  annee: string;
  estimatedTime: string;
  description: string[];
  link: string;
}

const ProjectsCards: React.FC<ProjectsCardsProps> = ({ jsonUrl }) => {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);
  const [toggleModalProject, setToggleModalProject] = useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  useEffect(() => {
    const fetchProject = async () => {
      const response = await fetch(jsonUrl);
      const data = await response.json();
      setProjects(data);
    };
    fetchProject();
  }, [jsonUrl]);

  const toggleProject = (projectId: number) => {
    if (projectId) {
      setSelectedProjectId(projectId);
      setToggleModalProject(!toggleModalProject);
    }
  };

  const closeProject = () => setToggleModalProject(false);

  return (
    <>
      <div className="grid grid-cols-3 phone:grid-cols-1 w-full h-full gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="flex cursor-pointer relative  p-1  justify-center h-full items-center flex-col border-2 border-slate-600 dark:border-slate-500 "
            onClick={() => toggleProject(project.id)}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            whileHover={{
              scale: 1.05,
              border: "none",
              padding: "0",
              transition: {
                stiffness: 50,
              },
            }}
            transition={{
              ease: "easeInOut",
              stiffness: 50,
              duration: 0.5,
            }}
          >
            <div className="opacity-0 hover:opacity-100 absolute inset-0 flex flex-cols items-center justify-center transition-opacity text-white bg-customPr p-2 transition-opacity duration-300 ease-in-out">
              <FontAwesomeIcon
                icon={faEye}
                className="w-10 h-10 shrink-0 fill-neutral-50"
              />
            </div>
            <Image
              src={project.images}
              alt="photo projet"
              className="h-full border-b-2 border-slate-600 dark:border-slate-500 "
              width={1920}
              height={880}
            />
            <h3 className="my-3">{project.title}</h3>
          </motion.div>
        ))}
        {toggleModalProject && selectedProject && (
          <ProjectModal
            selectedProject={selectedProject}
            onClose={closeProject}
          />
        )}
      </div>
    </>
  );
};

export default ProjectsCards;
