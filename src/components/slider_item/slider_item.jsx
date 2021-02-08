import React from 'react';
import styles from './slider_item.module.css';

const SliderItem = ({item, currentSlider}) => {
  const {index} = item;
  const backgroundImg = (item) => {
      return styles[`background-${index}`];
  }

  return (
    <li className={`${styles[`slider-item`]} 
      ${backgroundImg(item)} 
      ${currentSlider === index ? styles.active : ''} `}>
      <div className={styles.content}>
        {
          item.title && 
          <p>
            {item.title}
            {
            item.subTitle && 
            <span>{item.subTitle}</span>
            }
          </p>
        }
      </div>
    </li>
  );
};

export default SliderItem;
