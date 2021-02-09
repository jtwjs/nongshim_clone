import React from 'react';
import styles from './intro.module.css';
import introImg from '../../assets/img/main/intro/intro.png';
import introImg_m from '../../assets/img/main/intro/intro_m.png';
import ArticleButton from '../article_button/article_button';

const Intro = () => {
  const buttonInfo = {
    title: '농심소개',
    link: '',
  };

  const intro = [
    {
      id: 1,
      title: '경영이념',
      desc: '글로벌 식품 기업을 위한 힘찬 비상, 농심은 고객과 함께 세계를 향해 나아갑니다',
    },
    {
      id: 2,
      title: '연혁',
      desc: '대한민국 식품 문화의 새로운 역사를 쓴 농심의 발자취입니다.',
    },
    {
      id: 3,
      title: '농심 50년',
      desc: '50년간 이어온 농심의 한결같은 마음으로 한국의 대표기업이 되었습니다.',
    }
  ];

  const introList = intro.map((item) => (
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