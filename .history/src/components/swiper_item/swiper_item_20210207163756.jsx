import React from 'react';
import styles from './swiper_item.module.css';

const SwiperItem = ({item}) => {
  return (
    <li className={styles[`style.item`]} style={{backgroundImage: `${item.backgroundImag}`}}>
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