import { useEffect, useState } from "react";
import Logo from '../../public/assets/images/logo-familyrante.png';

export default function Header(){
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <header className={`cabecalho ${scrolled ? "scrolled" : ""}`}>
            <img src={Logo} alt="Logo Familyrante" className='logo'/>

            <nav>
                <ul className="menu">
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#cardapio">Cardápio</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}