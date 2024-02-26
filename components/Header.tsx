import Link from "next/link";


const Header = () => {

    return (
        <>
            <header className="h-24 flex items-center ">
                <nav className="flex  w-full p-5">
                    <Link href="/home " className="w-1/3"><img src="" alt="logo"></img></Link>
                    <ul className="flex justify-evenly w-1/3">
                        <li className="">Accueil</li>
                        <li className="">Mes projets</li>
                        <li className="">Contacts</li>
                    </ul>
                </nav>
            </header>
            <div className="border-b border-amber-600 w-96 mx-auto"></div>
        </>
    );
}

export default Header;