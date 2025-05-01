// src/assets/Componentes/Banner_Oficina.jsx
import styles from './Banner_Oficina.module.css';
import bannerImage from '../img/Banner_Oficina.png'; 

const Banner_Oficina = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerText}>
        <h1>Oficina</h1>
        <p>Da RUA</p>
      </div>
    </div>
  );
};

export default Banner_Oficina;
