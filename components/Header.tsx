import Link from "next/link";


const Header = () => {

    return (
        <>
            <header className="h-24 flex items-center ">
                <nav className="flex justify-around w-full p-5">
                    <Link href="/home " className="w-1/3"><img src="" alt="logo"></img></Link>
                    <ul className="flex justify-end w-2/3">
                        <li className="mr-4">Accueil</li>
                        <li className="mr-4">Mes projets</li>
                        <li className="mr-4">Contacts</li>
                    </ul>
                </nav>
            </header>
            <div className="border-b border-yellow-700 w-2/3 mx-auto"></div>
        </>
    );
}

export default Header;