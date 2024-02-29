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
            <div>
                {
                    formationProject.map((project) => (
                        <div key={project.id} className="">
                            <h3>{project.title}</h3>
                        </div>
                    ))
                }
            </div>

        </>
    );

}
export default ProjectCardFormation;