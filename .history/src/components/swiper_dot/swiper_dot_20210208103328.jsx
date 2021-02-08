import React from 'react';
import styles from './swiper_dot.mdoule.css';


const SwiperDot = ({currentSwiper, swiper:{index}}) => {
  return (
    <li className={styles.dot} data-index={index}>
        <span aria-label={`go to ${index}-slide`} role="button">
        </span>
    </li>
  );
};

export default SwiperDot;