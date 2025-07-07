import "../styles/globals.css";
import Header from "@/components/Header";
import { useState } from "react";
import ProjectsCards from "@/components/ProjectsCards";


export default function Projects() {

    const [isProjet, setIsProjet] = useState<boolean>(true);
    const [currentUrl, setCurrentUrl] = useState<string>(
        process.env.NEXT_PUBLIC_FORMATION_PROJECT_URL || ""
    );

    //display formation project
    const toggleProjectFormation = () => {
        setIsProjet(true);
        setCurrentUrl(process.env.NEXT_PUBLIC_FORMATION_PROJECT_URL || "");
    };

    //display personal project
    const toggleProjectPerso = () => {
        setIsProjet(false);
        setCurrentUrl(process.env.NEXT_PUBLIC_PERSONAL_PROJECT_URL || "");
    };

    return (
        <>
            <Header />
            <main className="h-full oveflow-hidden mb-10 flex flex-col w-11/12 mx-auto  flex justify-center items-start">
                <div className="mx-auto my-10  gap-4 text-xl flex justify-center items-center w-2/3 phone:w-full phone:text-center">
                    <h2 onClick={toggleProjectFormation} className={isProjet ? "text-customColor cursor-pointer transition-colors transition-duration-300" : "hover:text-customColor cursor-pointer transition-colors transition-duration-300"}>Projets de formations</h2>
                    <h2 onClick={toggleProjectPerso} className={isProjet ? "hover:text-customColor cursor-pointer transition-colors transition-duration-300" : "text-customColor cursor-pointer transition-colors transition-duration-300"}>Projets personnels</h2>
                </div>
                <section className="transition-all duration-300">
                    <ProjectsCards jsonUrl={currentUrl} />
                </section>
            </main>
        </>
    )
}