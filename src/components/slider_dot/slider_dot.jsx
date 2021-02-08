import React , {memo} from 'react';
import styles from './slider_dot.module.css';


const SliderDot = memo(({currentSlider, slider:{index}, onClick}) => {
  const currentIndex = () => {
    return currentSlider === 5 ? 0 : currentSlider;
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

export default SliderDot;