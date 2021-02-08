import React from 'react';
import styles from './article_button.module.css';

const ArticleButton = ({info}) => {
  const {title, link} = info;
  return (
    <div className={styles.button}>
      <a href={link}>
        {title}
      </a> 
    </div>
  );
};

export default ArticleButton;