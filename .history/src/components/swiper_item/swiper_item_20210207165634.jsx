import React from 'react';
import styles from './swiper_item.module.css';

const SwiperItem = ({item}) => {
  const backgroundImg = (item) => {
      const index = item.index;
      return styles[`background-${index}`];
  }

  return (
    <li className={`${styles[`swiper.item`]} ${backgroundImg(item)}`}>
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