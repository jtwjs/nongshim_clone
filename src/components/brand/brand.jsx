import React from 'react';
import ArticleButton from '../article_button/article_button';
import styles from './brand.module.css';
import brand_0 from '../../assets/img/main/brand/brand_0.png';
import brand_1 from '../../assets/img/main/brand/brand_1.png';
import brand_2 from '../../assets/img/main/brand/brand_2.png';
import brand_3 from '../../assets/img/main/brand/brand_3.png';

const Brand = () => {

  const brands = [
    {
      id:0,
      category: 'instant noodles',
      img: brand_0,
      text: '한국의 맛으로 세계와 소통하다',
    },
    {
      id:1,
      category: 'snacks',
      img: brand_1,
      text: '장수 브랜드의 역사를 창조하다',
    },
    {
      id:2,
      category: 'beverages',
      img: brand_2,
      text: '프리미엄 생수 브랜드의 미래를 열다',
    },
    {
      id:3,
      category: 'import brand',
      img: brand_3,
      text: '세계일류의 다양한 맛을 즐기다',
    },
  ]

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
                brands.map(item => (
                  <li key={item.id} className={styles[`brand-list-item`]}>
                    <h3 className={styles.category}>{item.category}</h3>
                    <figure>
                      <img src={item.img} alt=''/>
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