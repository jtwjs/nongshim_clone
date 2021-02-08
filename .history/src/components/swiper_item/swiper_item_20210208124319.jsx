import React from 'react';
import styles from './swiper_item.module.css';

const SwiperItem = ({item, currentSwiper}) => {
  const {index} = item;
  const backgroundImg = (item) => {
      return styles[`background-${index}`];
  }

  return (
    <li className={`${styles[`swiper-item`]} 
      ${backgroundImg(item)} 
      ${currentSwiper === index ? styles.active : ''} `}>
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

export default SwiperItem;