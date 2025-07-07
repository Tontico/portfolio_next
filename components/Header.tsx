import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SwitchTheme from "./SwitchTheme";
import { useEffect, useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  const [openBurger, setOpenBurger] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const darkModeStorage = localStorage.getItem("darkMode");
    if (darkModeStorage === "enabled") {
      setDarkMode(true);
    }

    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Nettoyage des event listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let bodyDetails: DOMTokenList = document.body.classList;
    if (darkMode) {
      bodyDetails.remove("light");
      bodyDetails.add("dark");
      localStorage.setItem("darkMode", "enabled");
    } else {
      bodyDetails.remove("dark");
      bodyDetails.add("light");
      localStorage.removeItem("darkMode");
    }
  }, [darkMode]);

  //enabled/disabled darkmode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  //enabled/disabled burger menu
  const toggleMenu = () => {
    setOpenBurger(!openBurger);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 h-28 flex items-center text-xl transition-all duration-300 p-20 ${
          isScrolled
            ? "bg-white/90 dark:bg-customDarkBg/90 shadow-lg backdrop-blur-sm"
            : "bg-transparent"
        }`}
        id="headerScrolled"
      >
        <nav className="flex justify-between items-center w-full px-10  phone:px-5">
          {/* Menu gauche */}
          {width >= 1024 ? (
            <ul className="flex items-center w-1/3">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li className="ml-10">
                <Link href="/project">Mes projets</Link>
              </li>
            </ul>
          ) : (
            <div className="w-1/3"></div>
          )}

          {/* Logo centré */}
          <div className="flex justify-center items-center  w-1/3">
            <Link href="/" className=" mx-auto">
              <Image
                src="/images/logo.svg"
                alt="AnthonyLogo"
                width={398}
                height={124}
                priority
                className="w-full"
              />
            </Link>
          </div>

          {/* Contact et menu burger */}
          <div className="flex justify-end items-center w-1/3">
            {width >= 1024 ? (
              <button
                className="px-8 py-2 text-white font-bold text-lg rounded-custom shadow-lg 
            bg-green-500 transition-transform transform  border-3 hover:scale-105 hover:border-neutral-950  hover:shadow-2xl focus:outline-none"
              >
                <Link href="/contact">START</Link>
              </button>
            ) : (
              <button
                id="burger"
                className="w-12 h-12 flex justify-center items-center"
                onClick={toggleMenu}
              >
                {openBurger ? (
                  <FontAwesomeIcon icon={faTimes} className="w-8 h-8" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="w-8 h-8" />
                )}
              </button>
            )}
          </div>
        </nav>
      </header>
      {openBurger && (
        <motion.ul
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.5 }}
          className="absolute z-50 w-full text-2xl flex flex-col justify-start items-center overflow-hidden bg-white dark:bg-customDarkBg phone:justify-self-end"
        >
          <li className="my-20">
            <Link href="/">Accueil</Link>
          </li>
          <li className="mb-20">
            <Link href="/project">Mes projets</Link>
          </li>
          <li className="mb-20">
            <Link href="/contact">Contacts</Link>
          </li>
        </motion.ul>
      )}
    </>
  );
};

export default Header;
