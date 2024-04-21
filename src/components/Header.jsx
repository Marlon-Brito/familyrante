import Logo from '../../public/assets/images/logo-p.png';
import '../../public/assets/css/header.css';

export default function Header(){
    return(
        <header className='cabecalho'>
            <nav className='menu'>
            <a href="./index.html">
                <img src={Logo} alt='Logo Familyrante' className='logo'/>
            </a>

            <ul>
            <a href="#sobre"><li>Sobre</li></a>
            <a href="#funcionamento"><li>Serviços</li></a>
            <a href="#contato"><li>Contato</li></a>
            </ul>
            </nav>
        </header>
    )
}