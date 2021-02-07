import React from 'react';
import styles from './swiper_item.module.css';

const SwiperItem = ({item}) => {
  const backgroundImg = (item) => {
      const id = item.id;
      return styles[`background-${id}`];
  }
  
  return (
    <li className={`${styles[`swiper.item`]} ${backgroundImg}`}>
      <div className={styles.content}>
        {
          item.title && 
          <h2>{item.title}</h2>
        }
        {
          item.subTitle && 
          <p>{item.subTitle}</p>
        }
      </div>
    </li>
  );
};

export default SwiperItem;