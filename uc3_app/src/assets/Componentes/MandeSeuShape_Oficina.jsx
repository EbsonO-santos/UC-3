// src/assets/Componentes/MandeSeuShape_Oficina.jsx
import React from 'react';
import styles from './MandeSeuShape_Oficina.module.css'; // módulo de estilo
import imageShape from '../img/imgem_skate.jpg'; // Caminho para a imagem

const MandeSeuShape = () => {
  return (
    <section className={styles.mandeseushapeContainer}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>Mande seu Shape</h2>
        <p className={styles.description}>Sabe aquele shape que tá encostado, todo riscado ou trincado? <br /> Não deixe ele morrer assim! Aqui, a gente transforma <br />o seu skate quebrado em um novo parceiro de rolê.</p>
        <button className={styles.button}>Mandar</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={imageShape} alt="Shape" className={styles.image} />
      </div>
    </section>
  );
};

export default MandeSeuShape;
