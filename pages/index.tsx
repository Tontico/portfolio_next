
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

  useEffect(() => {
    aboutVisible ? document.body.style.overflow = "auto" : document.body.style.overflow = 'hidden';
    if (aboutVisible) {
      const section = document.getElementById('sectionScrolled');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }, 500);
      }
    }
  }, [aboutVisible])

  return (
    <>
      <Header />
      <main className="flex justify-center flex-col items-center">
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
                <div className="flex flex-col w-1/2">
                  <div className="flex items-center gap-4 justify-center h-72 ">
                    <div className="border-2 border-slate-600 dark:border-slate-500 flex flex-col items-center rounded-lg w-1/2 h-48">
                      <h3 className="text-lg">Experience Professionnelles</h3>
                      <FontAwesomeIcon icon={faCode} className="text-customColor" />
                    </div>
                    <div className="border-2 border-slate-600 dark:border-slate-500 flex flex-col items-center rounded-lg w-1/2 h-48">
                      <h3 className="text-lg">Diplomes et formations</h3>
                      <FontAwesomeIcon icon={faGraduationCap} className="text-customColor" />
                    </div>
                  </div>
                  <div className="w-full">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia suscipit ullam qui sed at pariatur ab obcaecati numquam totam asperiores corporis deserunt aspernatur porro nisi inventore ad, beatae quaerat deleniti.</p>
                  </div>
                </div>
                <div className="w-1/3 flex justify-center">
                  <img src="images/about-me.jpg" alt="about me img" className="rounded-lg h-5/6 w-5/6"></img>
                </div>
              </div>
              <div className="text-center h-1/4 flex gap-4 justify center items-center">
                <button className="bg-customColor  rounded-full p-3 w-40"><a href="/cv/CV_Anthony_Suraci.pdf" className="text-white">Voir le CV</a></button>
                <button className="rounded-full p-3 w-40 bg-slate-600 dark:bg-slate-500 text-white" onClick={toggleAboutSection}>En savoir plus !</button>
              </div>
            </div>
          </section>)}
      </main >
    </>
  );
}
