import React from 'react';
import ArticleButton from '../article_button/article_button';
import styles from './management.module.css';

const Management = () => {
  const managementList = [
    {
      id: 1,
      title: '사회공헌',
      desc: '작은 사랑의 실천을 통해 함께 사는 세상, 행복한 내일을 만들고자 합니다.',
    },
    {
      id: 2,
      title: '환경·안전',
      desc: '안전한 제조공정,식품의 생산을 통해 고객의 건강과 행복을 최우선으로 생각합니다.',
    },
    {
      id: 3,
      title: '소비자 중심경영',
      desc: '소비자 중심으로 구성하고, 관련 경영활동을 지속적으로 개선합니다.',
    }
  ];

  const buttonInfo = {
    title: '지속가능경영',
    link: '',
  };

  return (
    <article className={styles.management}>
      <h2>함께해서 더 아름다운 세상,<br/> 농심이 만들어갑니다</h2>
      <div className={styles.content}>
        <ul className={styles[`management-list`]}>
          {
            managementList.map(item => (
              <li key={item.id} className={styles[`management-list-item`]}>
                <dl>
                  <dt className={styles.subject}>{item.title}</dt>
                  <dd className={styles.info}>{item.desc}</dd>
                </dl>
              </li>
            ))
          }
        </ul>
      </div>
      <ArticleButton info={buttonInfo}/>
    </article>
  );
};

export default Management;