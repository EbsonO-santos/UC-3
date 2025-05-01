// src/assets/Componentes/Header_Oficina.jsx
import styles from './Header_Oficina.module.css';
import logoRua from '../img/logorua.png';
import duvidaIcon from '../img/icone_duvida.png';
import carrinhoIcon from '../img/icone_carrinho.png';
import usuarioIcon from '../img/icone_usuario.png';
import configIcon from '../img/icone_config.png';



export default function Header_Oficina() {
  return (
    <header className={styles.header}>
      <div className={styles.topo}>
        <div className={styles.logo}>
        <img src={logoRua} alt="Logo RUA" className={styles.logo} />
        </div>

        <div className={styles.searchContainer}>
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div className={styles.icons}>
        <button><img src={duvidaIcon} alt="Dúvida" className={styles.icon} /></button>
        <button><img src={carrinhoIcon} alt="Carrinho" className={styles.icon} /></button>
        <button><img src={usuarioIcon} alt="Usuário" className={styles.icon} /></button>
        <button><img src={configIcon} alt="Configurações" className={styles.icon} /></button>
        </div>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Arte da RUA</a></li>
          <li><a href="#">Voz da RUA</a></li>
          <li><a href="#">Drip da RUA</a></li>
          <li><a href="#">Oficina da RUA</a></li>
        </ul>
      </nav>
    </header>
  );
}
