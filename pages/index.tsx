import "../styles/globals.css";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

export default function Home() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <main
        className="flex justify-center  flex-col items-center"
        id="mainScrolled"
      >
        <section className=" section-index phone:h-svh flex w-full justify-center items-center phone:justify-start phone:mt-14 phone:flex-col gap-6">
          <div>
            <Image
              src="/images/homeImg.svg"
              alt="img-portfolio"
              width={514}
              height={440}
            />
          </div>
          <div className="flex w-2/3 px-10  border-l-4 border-customColor flex-col  justify center items-center">
            <div className="text-center flex mb-10 flex-col  justify-center items-start">
              <h1 className="text-8xl  text-customColor font-bold text-left">
                Présentation
              </h1>
              <p className="text-2xl  p-10 text-left me-10 ">
                25 ans, diplômé d’un bac+2 …., moi c’est Anthony. Depuis mon
                plus jeune âge, je suis passionné de sport, développement et
                jeux vidéos. J’ai donc décidé …
              </p>
            </div>
            <div className="text-center flex gap-4 justify center items-center">
              <button className="bg-customColor rounded-full p-4 w-44 transition-transform transform hover:scale-105">
                <a
                  href={process.env.NEXT_PUBLIC_CV_URL}
                  className="text-white"
                  download
                >
                  Voir le CV
                </a>
              </button>
              <button className="bg-transparent border-2 border-customColor border- rounded-full p-4 w-44 transition-transform transform hover:scale-105">
                <Link href="/project">Mes projets</Link>
                <span></span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
