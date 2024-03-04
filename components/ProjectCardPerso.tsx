import ProjectInterface from "@/interfaces/ProjectInterface";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ProjectCardPerso = () => {

    const [persoProject, setPersoProject] = useState<ProjectInterface[]>([]);
    const [toggleModalProject, setToggleModalProject] = useState<boolean>(false);
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

    const fetchProject = async () => {
        const personalResponse = await fetch('/data/PersonalProject.json');
        const personalData = await personalResponse.json();
        setPersoProject(personalData);
    }

    const toggleProject = (projectId: number) => {
        if (projectId) {
            setSelectedProjectId(projectId);
            setToggleModalProject(!toggleModalProject);
        }

    }

    const closeProject = () => {
        setToggleModalProject(false);
    }

    useEffect(() => {
        fetchProject();
    }, []);

    return (
        <>
            <div className="grid grid-cols-3 phone:grid-cols-1 w-full h-full gap-6">
                {
                    persoProject.map((project) => (
                        <div key={project.id} className="flex relative cursor-pointer p-1 transition-all hover:scale-105 justify-center h-full items-center flex-col border-2 border-slate-600 dark:border-slate-500 hover:border-none hover:p-0" onClick={() => toggleProject(project.id)}>
                            <div className="opacity-0  hover:opacity-100 absolute inset-0 flex flex-cols items-center justify-center transition-opacity text-white bg-customPr p-2 transition-opacity duration-300 ease-in-out">
                                <FontAwesomeIcon icon={faEye} className="w-10 h-10 shrink-0 fill-neutral-50" />
                            </div>
                            <img src={project.images} alt='photo projet' className="h-full border-b-2 border-slate-600 dark:border-slate-500 "></img>
                            <h3 className="my-3">{project.title}</h3>
                        </div>
                    ))
                }
                {toggleModalProject && selectedProjectId && (
                    <>
                        <div className="fixed top-0 left-0 w-full h-full bg-customBg" onClick={closeProject}></div>
                        <div key={selectedProjectId} className="fixed top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2  rounded-md shadow-lg z-50  bg-gray-100 dark:bg-customDarkBg h-custom ">
                            <div className="flex justify-center items-center mt-5 ">
                                <h2 className="w-5/6 text-start text-2xl px-5 ">{persoProject.find(project => project.id === selectedProjectId)?.title}: {persoProject.find(project => project.id === selectedProjectId)?.annee}</h2>
                                <span onClick={closeProject} className="w-1/6 text-4xl text-end me-5 cursor-pointer">&times;</span>
                            </div>
                            <div className="w-custom  p-3 mx-auto">
                                <a href={persoProject.find(project => project.id === selectedProjectId)?.link}>
                                    <img className="rounded-md" src={persoProject.find(project => project.id === selectedProjectId)?.images}></img>
                                </a>
                            </div>
                            <div className="flex flex-col  w-11/12 h-64 mx-auto justify-center items-center">
                                <div className=" w-full flex justify-evenly items-center">
                                    <h3 className=" mb-1 w-1/2 text-center text-xl">Descriptif du projet</h3>
                                    <h3 className="mb-1 w-1/2 text-center text-xl">Languages Utilisés</h3>
                                </div>
                                <div className="w-full p-2 gap-4 mb-3    flex justify-center items-center">
                                    <p className="w-1/2">{persoProject.find(project => project.id === selectedProjectId)?.description}</p>
                                    <div className="w-1/2 grid grid-cols-2  text-center gap-4 ">{persoProject.find(project => project.id === selectedProjectId)?.languages.map((langues, index) => (
                                        <span key={index} className="dark:bg-slate-500 dark:hover:bg-customColor dark:hover:text-white bg-slate-600 hover:bg-customColor  text-white cursor-pointer rounded-md p-2 w-11/12 mx-auto transition duration-200">{langues}</span>
                                    ))}</div>
                                </div>
                                <a href={persoProject.find(project => project.id === selectedProjectId)?.link} className="group w-12 hover:w-48 h-12 relative mx-auto mt-1 text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex items-center text-black bg-white cursor-pointer rounded-full border-2 border-customColor dark:bg-customDarkBg  ">
                                    <FontAwesomeIcon icon={faGithub} className="w-8 h-8 ml-1.5 shrink-0 fill-neutral-50 text-customColor" />
                                    <span className="origin-left inline-flex text-base duration-100 ml-1  group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 border-l-black dark:border-l-white px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                                        En savoir plus !
                                    </span>
                                </a>
                            </div>
                        </div>
                    </>
                )}
            </div>

        </>
    );

}
export default ProjectCardPerso;