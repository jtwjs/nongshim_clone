import React from 'react';
import styles from './intro.module.css';
import introImg from '../../assets/img/main/intro/intro.png';
import introImg_m from '../../assets/img/main/intro/intro_m.png';
import ArticleButton from '../article_button/article_button';
import mainData from '../../data/main.json';

const Intro = () => {
  const buttonInfo = {
    title: '농심소개',
    link: '',
  };


  const introList = mainData.intro.map((item) => (
    <dl key={item.id} className={styles[`intro-item`]}>
      <dt>{item.title}</dt>
      <dd>{item.desc}</dd>
    </dl>
  ));

  return (
    <article className={styles.intro}>
      <h2>
        한국을 대표하는 맛,<br/> 
        세계를 감동시킨 우리의 맛
      </h2>
      <div className={styles.content}>
        <div className={styles[`item-img`]}>
          <img className={styles[`hidden-mobile`]} src={introImg} alt='라면 이미지'/>
          <img className={styles[`hidden-desktop`]} src={introImg_m} alt='라면 이미지'/>
        </div>
        <div className={styles[`intro-list`]}>
          {introList}
        </div>
      </div>
      <ArticleButton info={buttonInfo}/>
    </article>
  );
};

export default Intro;