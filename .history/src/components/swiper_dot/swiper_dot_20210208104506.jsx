import React from 'react';
import styles from './swiper_dot.module.css';


const SwiperDot = ({currentSwiper, swiper:{index}}) => {
  return (
    <li className={`${styles.dot} ${index === currentSwiper ? styles.active : ''}`} data-index={index}>
        <span aria-label={`go to ${index}-slide`} role="button">
        </span>
    </li>
  );
};

export default SwiperDot;