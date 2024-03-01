import ProjectInterface from "@/interfaces/ProjectInterface";
import { useEffect, useState } from "react";



const ProjectCardFormation = () => {
    const [formationProject, setFormationProject] = useState<ProjectInterface[]>([]);

    const fetchProject = async () => {
        const formationResponse = await fetch('/data/FormationProject.json');
        const formationData = await formationResponse.json();

        setFormationProject(formationData);
    }
    useEffect(() => {
        fetchProject();
    }, []);

    return (
        <>
            <section className="grid grid-cols-3 w-11/12 h-screen gap-4">
                {
                    formationProject.map((project) => (
                        <div key={project.id} className="flex justify-center f-full items-center flex-col border-2 border-slate-600 dark:border-slate-500 ">
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
            </section>

        </>
    );

}
export default ProjectCardFormation;