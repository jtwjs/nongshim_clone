import React, {useRef} from 'react';
import styles from './swiper_dot.module.css';


const SwiperDot = ({currentSwiper, swiper:{index}}) => {
  const dotRef = useRef();
  return (
    <li ref={dotRef} className={`${styles.dot} ${dotRef.current.dataset.index === currentSwiper ? styles.active : ''}`} data-index={index}>
        <span aria-label={`go to ${index}-slide`} role="button">
        </span>
    </li>
  );
};

export default SwiperDot;