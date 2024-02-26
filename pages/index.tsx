
import "../styles/globals.css";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function Home() {

  const [headerHeight, setHeaderHeight] = useState(0);



  return (
    <>
      <Header />
      <main className="flex justify-center items-center">
        <section className="m-5 flex justify-center gap-6 items-center">
          <div>
            <img src="images/Img-portfolio.jpg" className="w-64 h-64 rounded-full border-2 border-customColor"></img>
          </div>
          <div className="flex flex-col gap-4 justify center items-center">
            <div className="text-center flex gap-1 flex-col justify center items-center">
              <p className="text-slate-700">Bonjour, je suis</p>
              <h1 className="text-4xl text-customColor">Anthony Suraci</h1>
              <h2>Developpeur Web Full-Stack</h2>
            </div>
            <div className="text-center flex gap-4 justify center items-center">
              <button className="bg-customColor rounded-full p-3 w-40"><a href="/cv/CV_Anthony_Suraci.pdf">Voir le CV</a></button>
              <button className="rounded-full p-3 w-40 bg-slate-700 text-white">En savoir plus !</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
