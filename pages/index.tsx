
import "../styles/globals.css";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

  const [aboutVisible, setAboutVisible] = useState<boolean>(false);

  const toggleAboutSection = () => {
    setAboutVisible(!aboutVisible);
  }

  const scrollIntoStart = () => {
    const headerId = document.getElementById('headerScrolled');
    if (headerId) {
      setTimeout(() => {
        headerId.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }, 300);
    }
  }

  useEffect(() => {
    if (aboutVisible) {
      const section = document.getElementById('sectionScrolled');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }, 300);
      }
    }
  }, [aboutVisible])

  return (
    <>
      <Header />
      <main className="flex justify-center flex-col items-center" id="mainScrolled">
        <section className="flex w-full justify-center gap-6 items-center">
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 18,
              restDelta: 1,
            }}
          >
            <div>
              <img src="images/Img-portfolio.jpg" className="w-64 h-64 rounded-full border-2 border-customColor"></img>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 justify center items-center">
            <motion.div initial={{ y: -400, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 18,
                restDelta: 1,
              }}>
              <div className="text-center flex gap-1 flex-col justify center items-center">
                <p className="text-lg">Bonjour, je suis</p>
                <h1 className="text-6xl text-customColor mb-2">Anthony Suraci</h1>
                <h2 className="text-2xl">Developpeur Web Full-Stack</h2>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.5,
                type: "tween",
                stiffness: 10,
                duration: 1.5,
                restDelta: 1,
              }}>
              <div className="text-center flex gap-4 justify center items-center">
                <button className="bg-customColor  rounded-full p-3 w-40"><a href="/cv/CV_Anthony_Suraci.pdf" className="text-white">Voir le CV</a></button>
                <button className="rounded-full p-3 w-40 bg-slate-600 dark:bg-slate-500 text-white" onClick={toggleAboutSection}>En savoir plus !</button>
              </div>
            </motion.div>
          </div>
        </section>
        {aboutVisible &&
          (<section className='w-full'>
            <h2 className="text-4xl text-center mb-3">A propos de moi</h2>
            <div className="border border-customColor w-32 mx-auto"></div>
            <div className="flex flex-col items-center h-full">
              <div id="sectionScrolled" className="h-5/6 w-full gap-4  pt-5 flex justify-center items-start ">
                <div className="flex flex-col w-3/5">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 1,
                      type: "tween",
                      stiffness: 10,
                      duration: 1,
                      restDelta: 1,
                    }}>
                    <div className="flex items-center gap-4 justify-center h-80 ">
                      <div className="border-4 p-1 border-customColor flex flex-col items-center rounded-lg w-1/2 h-56">
                        <h3 className="text-2xl">Experience Professionnelles</h3>
                        <FontAwesomeIcon icon={faCode} className="text-customColor w-7 h-7"/>
                        <div className="w-full mt-1 px-1">
                          <strong>10/01/2024 - aujourd'hui</strong>
                          <h4>Alternant développeur Web fullStack - <em>WyTest Montpellier</em></h4>
                        </div>
                        <div className="w-full px-1">
                          <strong>2022 - 2023</strong>
                          <h4>Mise en rayon - <em>Intermarché Frontignan</em></h4>
                        </div>
                        <div className="w-full px-1">
                          <strong>2021 - 2022</strong>
                          <h4>Contrat étudiant équipier polyvalent - <em>Lidl Mèze</em></h4>
                        </div>
                      </div>
                      <div className="border-4  p-1 border-customColor flex flex-col items-center rounded-lg w-1/2 h-56">
                        <h3 className="text-2xl">Diplomes et formations</h3>
                        <FontAwesomeIcon icon={faGraduationCap} className="text-customColor w-7 h-7" />
                        <div className="w-full mt-1 px-1">
                          <strong>2023-2024</strong>
                          <h4>Developpeur web et web mobile RNCP5 - <em>Diginamic Peyrols</em></h4>
                        </div>
                        <div className="w-full px-1">
                          <strong>2019-2021</strong>
                          <h4>Licence Informatique BAC+2 - <em>Université de Montpellier</em></h4>
                        </div>
                        <div className="w-full px-1">
                          <strong>2017-2018</strong>
                          <h4>Bac Scientifique - <em>Lycée privée St Joseph</em></h4>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 3,
                      type: "tween",
                      stiffness: 10,
                      duration: 1,
                      restDelta: 1,
                    }}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia suscipit ullam qui sed at pariatur ab obcaecati numquam totam asperiores corporis deserunt aspernatur porro nisi inventore ad, beatae quaerat deleniti.</p>
                  </motion.div>
                </div>
                <motion.div
                  className="w-1/3 flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 2,
                    type: "tween",
                    stiffness: 10,
                    duration: 1,
                    restDelta: 1,
                  }}>
                  <img src="images/about-me.jpg" alt="about me img" className="rounded-lg h-11/12 w-11/12"></img>
                </motion.div>
              </div>
              <motion.div
                className="text-center h-1/6  w-5/6 flex gap-4 justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 4,
                  type: "tween",
                  stiffness: 10,
                  duration: 1,
                  restDelta: 1,
                }}>
                <button className="bg-customColor  rounded-full p-3 w-40"><a href="/cv/CV_Anthony_Suraci.pdf" className="text-white">Mes projets</a></button>
                <button className="rounded-full p-3 w-40 bg-slate-600 dark:bg-slate-500 text-white" onClick={toggleAboutSection}>Contactez moi !</button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-slate-500 transform rotate-180 hover:text-customColor transition-colors duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={scrollIntoStart}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a1 1 0 00-.707.293l-9 9a1 1 0 000 1.414l9 9a1 1 0 001.414-1.414L3.414 11H20a1 1 0 000-2H3.414l7.293-7.293A1 1 0 0010 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            </div>
          </section>)}
      </main >
    </>
  );
}
