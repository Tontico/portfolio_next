
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
            <img src="images/Img-portfolio.jpg" className="w-64 h-64 rounded-full border-2 border-amber-600 "></img>
          </div>
          <div className="flex flex-col gap-4 justify center items-center">
            <div className="text-center flex gap-1 flex-col justify center items-center">
              <p>Bonjour, je suis</p>
              <h1 className="text-4xl text-amber-600">Anthony Suraci</h1>
              <h2>Developpeur Web Full-Stack</h2>
            </div>
            <div className="text-center flex gap-4 justify center items-center">
              <button className="bg-amber-600 rounded-full p-3">Voir le cv</button>
              <button className="border rounded-full p-3">En savoir plus !</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
