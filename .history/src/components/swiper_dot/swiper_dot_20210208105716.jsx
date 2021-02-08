import React from 'react';
import styles from './swiper_dot.module.css';


const SwiperDot = ({currentSwiper, swiper:{index}}) => {
  const currentIndex = () => {
    return currentSwiper === 0 ? 1 : currentSwiper;
  }
  return (
    <li className={`${styles.dot} ${index === currentIndex() ? styles.active : ''}`} 
     }
      >
        <span aria-label={`go to ${index}-slide`} role="button">
        </span>
    </li>
  );
};

export default SwiperDot;