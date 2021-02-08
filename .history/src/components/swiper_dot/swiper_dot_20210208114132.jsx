import React , {memo} from 'react';
import styles from './swiper_dot.module.css';


const SwiperDot = memo(({currentSwiper, swiper:{index}, onClick}) => {
  const currentIndex = () => {
    return currentSwiper === 5 ? 0 : currentSwiper;
  }
  return (
    <li className={`${styles.dot} ${index === currentIndex() ? styles.active : ''}`} 
    onClick={() => onClick(index)}
      >
        <span aria-label={`go to ${index}-slide`} role="button">
        </span>
    </li>
  );
});

export default SwiperDot;