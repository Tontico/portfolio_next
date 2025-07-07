import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectInterface } from "./ProjectsCards";

interface ProjectModalProps {
    selectedProject: ProjectInterface;
    onClose: () => void;
}

const ProjectModal = ({ selectedProject, onClose }: ProjectModalProps) => {
    const [descriptionProject, setDescriptionProject] = useState<boolean>(false);

    const toggleDescription = () => setDescriptionProject(!descriptionProject);
    const closeDescription = () => setDescriptionProject(false);

    return (
        <>
            <div className="fixed phone:relative top-0 left-0 w-full h-full overflow-auto bg-customBg" onClick={onClose}></div>
            <motion.div
                className="fixed top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2  rounded-md shadow-lg z-50 text-white dark:text-customDarkBg bg-neutral-800 dark:bg-gray-100 h-custom phone:h-modal media-modal phone:w-11/12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "tween", stiffness: 50, duration: 0.3 }}
            >
                <div className="flex justify-center items-center mt-5">
                    <h2 className="w-5/6 text-start text-2xl ms-10 phone:ms-2">{selectedProject.title}</h2>
                    <span onClick={onClose} className="w-1/6 text-5xl text-end me-5 cursor-pointer">&times;</span>
                </div>

                {!descriptionProject ? (
                    <>
                        <div className="w-custom phone:w-full mx-auto p-3">
                            <a href={selectedProject.link} className="phone:w-full phone:mx-auto">
                                <Image className="rounded-md w-full phone:w-full phone:h-auto" src={selectedProject.images} alt="photo-projet" width={1920} height={880} />
                            </a>
                        </div>
                        <div className="flex h-auto w-full h-64 mx-auto justify-center items-center phone:flex-col phone:mt-0 phone:p-1">
                            <div className="w-full h-40 media-queries relative p-3 flex flex-col justify-start items-center">
                                <h3 className="w-full mb-2 w-1/2 text-center text-xl">Descriptif du projet</h3>
                                <button className="bg-slate-500 dark:hover:bg-customColor dark:hover:text-white hover:bg-customColor text-white cursor-pointer rounded-md p-3 w-2/5 mx-auto transition duration-200" onClick={toggleDescription}>
                                    Voir plus
                                </button>
                            </div>
                            <div className="w-full h-40 p-3 media-queries-two phone:p-1 flex-col flex justify-start items-center">
                                <h3 className="mb-2 w-full text-center text-xl">Languages Utilisés</h3>
                                <div className={selectedProject.languages.length < 3 ?
                                    "w-2/5 mt-1 media-queries-three grid grid-cols-1 text-center gap-4" :
                                    "w-full mt-1 media-queries-three grid grid-cols-2 text-center gap-4"}
                                >
                                    {selectedProject.languages.map((language, index) => (
                                        <span key={index} className="bg-customColor w-full dark:hover:bg-customColor dark:hover:text-white hover:bg-customColor text-white rounded-md p-3 phone:w-11/12 mx-auto transition duration-200">
                                            {language}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <motion.div className="w-custom phone:w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "tween", stiffness: 20, duration: 0.5 }}
                    >
                        <div className="w-full mx-auto h-full mt-5">
                            <div className="flex justify-center items-center mb-5">
                                <FontAwesomeIcon icon={faArrowLeft} className="h-6 ml-5 mr-auto cursor-pointer" onClick={closeDescription} />
                                <h2 className="text-xl w-2/3 pl-5 phone:p-0 phone:mr-10 text-customColor">Description du projet</h2>
                            </div>
                            <div className="w-11/12 mx-auto flex phone:flex-col justify-center items-center">
                                <h4 className="w-1/2 text-center phone:w-full mx-auto phone:mb-2">Date de réalisation : <strong>{selectedProject.annee}</strong></h4>
                                <h4 className="w-1/2 mx-auto text-center phone:w-full">Durée de réalisation : <strong>{selectedProject.estimatedTime}</strong></h4>
                            </div>
                            <ul className={selectedProject.description.length < 8 ?
                                "w-11/12 mx-auto p-3 overflow-scroll scrollbar-thin border-2 rounded-md border-customColor border h-auto text-sm mt-5 leading-relaxed phone:leading-snug tracking-wide phone:tracking-normal" :
                                "w-11/12 mx-auto p-3 overflow-scroll scrollbar-thin border-2 rounded-md border-customColor border h-80 phone:h-72 text-sm mt-5 leading-relaxed phone:leading-snug tracking-wide phone:tracking-normal"}
                            >
                                {selectedProject.description.map((description, index) => (
                                    <li key={index} className="w-full phone mb-2">{description}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}

                {selectedProject.link !== "" && (
                    <div className="flex justify-center items-center mt-5 media-button">
                        <a href={selectedProject.link} className="group w-12 phone:w-48 hover:w-48 h-12 relative bg-transparent text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex items-center text-black cursor-pointer rounded-full border-2 border-customColor phone:mx-auto">
                            <FontAwesomeIcon icon={faGithub} className="w-8 h-8 ml-1.5 shrink-0 fill-neutral-50 text-customColor" />
                            {window.innerWidth <= 1024 ? (
                                <>
                                    <span className="border-l-2 h-2/3 ml-2 border-gray-100 dark:border-customDarkBg"></span>
                                    <span className="w-full ml-2 text-slate-600 text-white dark:text-customDarkBg">En savoir plus</span>
                                </>
                            ) : (
                                <span className="origin-left inline-flex text-base duration-100 ml-1 dark:text-customDarkBg text-white group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 border-l-gray-100 dark:border-l-customDarkBg px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                                    En savoir plus !
                                </span>
                            )}
                        </a>
                    </div>
                )}
            </motion.div>
        </>
    );
};

export default ProjectModal;
