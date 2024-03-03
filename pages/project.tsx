import "../styles/globals.css";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectCardFormation from "@/components/ProjectCardFormation";
import ProjectCardPerso from "@/components/ProjectCardPerso";


export default function Projects() {

    const [isProjetFormation, setIsProjetFormation] = useState<boolean>(true);

    const toggleProjectFormation = () => {
        setIsProjetFormation(true);
    };

    const toggleProjectPerso = () => {
        setIsProjetFormation(false);
    };

    return (
        <>
            <Header />
            <main className="h-full flex flex-col w-11/12 mx-auto  flex justify-center items-start">
                <div className="mx-auto my-10  gap-4 text-xl flex justify-center items-center w-2/3">
                    <h2 onClick={toggleProjectFormation}>Projets de formations</h2>
                    <h2 onClick={toggleProjectPerso}>Projets personnels</h2>
                </div>
                {isProjetFormation ? (
                    <ProjectCardFormation />
                ) : (
                    <ProjectCardPerso />
                )}
            </main>
        </>
    )
}