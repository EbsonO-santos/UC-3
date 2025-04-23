import Styles from './Header.module.css'
import fundo from '../img/background.png'
import logo from '../img/logorua.png'

function Header() {
    return (
        <header className={Styles.header}>
            <img src={logo} alt="logo rua" className={Styles.logo} />
            <nav className={Styles.nav}>
                <a href="">Inicio</a>
                <a href="">Arte de RUA</a>
                <a href="">Voz da RUA</a>
                <a href="">Drip da RUA</a>
                <a href="">Oficina da RUA</a>
            </nav>
            {/* <img src={fundo} alt="imagem de fundo" className={Styles.fundo} /> */}
        </header>
    )
}
export default Header;