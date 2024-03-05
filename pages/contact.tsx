
import "../styles/globals.css";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import FormContact from "@/components/FormContact";

export default function Contact() {



    return (
        <>
            <Header />
            <main className="section-index ">
                <section className="h-full flex justify-center items-center">
                    <FormContact />
                </section>
            </main>
        </>
    );
}