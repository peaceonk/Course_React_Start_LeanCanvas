// import './Card1.css'; // 일반적인 CSS import
import styles from './Card1.module.css';
import React from 'react';

const Card1: React.FC = () => {
  return <article className={styles.card}>Card1</article>;
};

export default Card1;
