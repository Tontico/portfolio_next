import "../styles/globals.css";
import Header from "@/components/Header";
import FormContact from "@/components/FormContact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  return (
    <>
      <Header />
      <main className="h-full">
        <section className="h-full flex justify-center items-center">
          <FormContact />
      <div className="w-1/3 phone:w-2/4 flex justify-center phone:justify-center items-center mt-2 phone:m-0 phone:absolute phone:top-1/2 phone:left-1/2 phone:transform phone:-translate-x-1/2 phone:-translate-y-1/2">
        <a
          href={githubUrl}
          className="group w-12  hover:w-44 h-12 hover:bg-customColor relative bg-customColor rounded-full text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start items-center p-2"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="w-8 h-8  shrink-0 fill-neutral-50"
          />
          <span className="origin-left inline-flex text-base duration-100 ml-1 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
            Tontico
          </span>
        </a>
        <a
          href={linkedinUrl}
          className="group mx-5 w-12 hover:w-44 h-12 hover:bg-customColor relative bg-customColor rounded-full text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start items-center p-2"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-8 h-8 shrink-0 fill-neutral-50"
          />
          <span className="origin-left inline-flex w-full text-base duration-100 ml-1 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all whitespace-nowrap overflow-hidden">
            Anthony Suraci
          </span>
        </a>
      </div>
        </section>
      </main>
    </>
  );
}
