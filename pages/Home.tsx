import Image from "next/image";
import "../styles/globals.css";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function Home() {

  const [headerHeight, setHeaderHeight] = useState(0);



  return (
    <>
      <Header />
      <main className="flex justify-center items-center">
        <section className="m-5 flex justify-center gap-4 items-center">
          <div>
            <img src="images/Img-portfolio.jpg" className="w-64 h-64 rounded-full border-4 border-yellow-700 "></img>
          </div>
          <div className="text-center">
            <p>Bonjour, je suis</p>
            <h1>Anthony Suraci</h1>
            <h2>Developpeur Web Full-Stack</h2>
            <button>Voir le cv</button>
            <button>En savoir plus sur moi !</button>
          </div>
        </section>
      </main>
    </>
  );
}
