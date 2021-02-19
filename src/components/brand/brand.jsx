import React from 'react';
import ArticleButton from '../article_button/article_button';
import mainData from '../../data/main.json';
import styles from './brand.module.css';
import brand_0 from '../../assets/img/main/brand/brand_0.png';
import brand_1 from '../../assets/img/main/brand/brand_1.png';
import brand_2 from '../../assets/img/main/brand/brand_2.png';
import brand_3 from '../../assets/img/main/brand/brand_3.png';

const Brand = () => {

  const imgList = [brand_0, brand_1, brand_2, brand_3];
  const buttonInfo = {
    title: '브랜드관',
    link: '',
  }
  return (
    <article className={styles.brand}>
      <h2>모두의 일상에 즐거움을 선사합니다</h2>
      <div className={styles.content}>
        <div className={styles.visual}>
          <h3 className={styles[`visual-text`]}>best brand</h3>
        </div>
        <div className={styles.brands}>
          <ul className={styles[`brand-list`]}>
              {
                mainData.brand.map((item,idx )=> (
                  <li key={item.id} className={styles[`brand-list-item`]}>
                    <h3 className={styles.category}>{item.category}</h3>
                    <figure>
                      <img src={imgList[idx]} alt=''/>
                      <figcaption>
                        {item.text}
                      </figcaption>
                    </figure>
                  </li>
                ))
              }
          </ul>
          <ArticleButton info={buttonInfo}/>
        </div>
      </div>
      
    </article>
  );
};

export default Brand;