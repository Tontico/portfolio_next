import ProjectInterface from "@/interfaces/ProjectInterface";
import { useEffect, useState } from "react";

const ProjectCardFormation = () => {
    const [formationProject, setFormationProject] = useState<ProjectInterface[]>([]);
    const [toggleModalProject, setToggleModalProject] = useState<boolean>(false);
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

    const fetchProject = async () => {
        const formationResponse = await fetch('/data/FormationProject.json');
        const formationData = await formationResponse.json();

        setFormationProject(formationData);
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
            <section className="grid grid-cols-3 w-full h-full gap-4">
                {
                    formationProject.map((project) => (
                        <div key={project.id} className="flex justify-center h-full items-center flex-col border-2 border-slate-600 dark:border-slate-500 " onClick={() => toggleProject(project.id)}>
                            <img src={project.images} alt='photo projet' className="h-full border-b-2 border-slate-600 dark:border-slate-500 "></img>
                            <h3 className="my-3">{project.title}</h3>
                            {/* <div>
                                {project.languages.map((langues, index) => (
                                    <span key={index}>{langues}</span>
                                ))}
                            </div> */}
                        </div>
                    ))

                }
                {toggleModalProject && selectedProjectId && (
                    <>
                        <div className="absolute top-0 left-0 w-full h-full bg-customBg" onClick={closeProject}></div>
                        <div key={selectedProjectId} className="fixed top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2  rounded-md shadow-lg z-50  bg-white dark:bg-customDarkBg h-5/6 ">
                            <div className="flex justify-center items-center mt-5 ">
                                <h2 className="w-5/6 text-start text-2xl px-5 ">{formationProject.find(project => project.id === selectedProjectId)?.title}</h2>
                                <span onClick={closeProject} className="w-1/6 text-4xl text-end me-5 cursor-pointer">&times;</span>
                            </div>
                            <div className="w-11/12 p-3 mx-auto">
                                <img className="rounded-md" src={formationProject.find(project => project.id === selectedProjectId)?.images}></img>
                            </div>
                            <div className="flex flex-col w-11/12 mx-auto justify-center items-center p-3 mt-2">
                                <div className=" w-full flex justify-evenly items-center">
                                    <h3 className="mb-1 w-1/2 text-center text-xl">Descriptif du projet</h3>
                                    <h3 className="mb-1 w-1/2 text-center text-xl">Languages Utilisés</h3>
                                </div>
                                <div className="w-full p-3 gap-2 flex justify-center items-center">
                                    <p className="w-1/2">{formationProject.find(project => project.id === selectedProjectId)?.description}</p>
                                    <p className="w-1/2 text-center flex justify-center items-center gap-4 ">{formationProject.find(project => project.id === selectedProjectId)?.languages.map((langues, index) => (
                                        <span key={index}>{langues}</span>
                                    ))}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </section >

        </>
    );

}
export default ProjectCardFormation;