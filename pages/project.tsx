import "../styles/globals.css";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectCardFormation from "@/components/ProjectCardFormation";


export default function Projects() {

    const [projetFormation, setProjetFormation] = useState<boolean>(false);


    return (
        <>
            <Header />
            <main>
                <ProjectCardFormation />
            </main>
        </>
    )
}