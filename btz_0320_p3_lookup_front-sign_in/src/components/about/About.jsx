/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './About.module.css';

const antonin = require('./Antonin.jpg');

export default function About() {
  return (
    <div className={styles.center}>
      <img className={styles.img_about} src={antonin} alt="A propos" />
      <h3 className={styles.title_about}>Humain, Nature & Technologie </h3>
      <p>
        Mieux travailler en prenant en compte ces 3 paramètres fondamentaux dans
        une société qui se digitalise de plus en plus. <br /> Sensibiliser
        l'humain pour qu'il améliore sa relation avec les outils modernes tout
        en lui donnant des solutions concrètes et faciles à mettre en place.
        <br /> Le tout en valorisant une approche environnementale globale.
      </p>
    </div>
  );
}
