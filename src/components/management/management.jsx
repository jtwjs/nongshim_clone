import React from 'react';
import ArticleButton from '../article_button/article_button';
import styles from './management.module.css';
import mainData from '../../data/main.json';

const Management = () => {
  

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
            mainData.management.map(item => (
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