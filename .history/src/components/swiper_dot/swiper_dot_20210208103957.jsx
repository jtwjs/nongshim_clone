import React, {useRef} from 'react';
import styles from './swiper_dot.module.css';


const SwiperDot = ({currentSwiper, swiper:{index}}) => {
  const dotRef = useRef();
  console.log(dotRef.current.dataset);
  return (
    <li ref={dotRef} 
      className={`${styles.dot}`}
       data-index={index}>
        <span aria-label={`go to ${index}-slide`} role="button">
        </span>
    </li>
  );
};

export default SwiperDot;