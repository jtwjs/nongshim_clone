import React from 'react';
import styles from './swiper_item.module.css';

const SwiperItem = ({item}) => {
  const backgroundImg = (item) => {
      const index = item.index;
      return styles[`background-${index}`];
  }

  return (
    <li className={`${styles[`swiper-item`]} ${backgroundImg(item)}`}>
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