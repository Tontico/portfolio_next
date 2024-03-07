import "../styles/globals.css";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProjectCardFormation from "@/components/ProjectCardFormation";
import ProjectCardPerso from "@/components/ProjectCardPerso";


export default function Projects() {

    const [isProjet, setIsProjet] = useState<boolean>(true);

    //display formation project
    const toggleProjectFormation = () => {
        setIsProjet(true);
    };
    //display personal project
    const toggleProjectPerso = () => {
        setIsProjet(false);
    };

    return (
        <>
            <Header />
            <main className="h-full mb-10 flex flex-col w-11/12 mx-auto  flex justify-center items-start">
                <div className="mx-auto my-10  gap-4 text-xl flex justify-center items-center w-2/3 phone:w-full phone:text-center">
                    <h2 onClick={toggleProjectFormation} className={isProjet ? "text-customColor cursor-pointer transition-colors transition-duration-300" : "hover:text-customColor cursor-pointer transition-colors transition-duration-300"}>Projets de formations</h2>
                    <h2 onClick={toggleProjectPerso} className={isProjet ? "hover:text-customColor cursor-pointer transition-colors transition-duration-300" : "text-customColor cursor-pointer transition-colors transition-duration-300"}>Projets personnels</h2>
                </div>
                <section className="transition-all duration-300">
                    {isProjet ? (
                        <ProjectCardFormation />
                    ) : (
                        <ProjectCardPerso />
                    )}
                </section>
            </main>
        </>
    )
}