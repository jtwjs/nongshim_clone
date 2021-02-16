import React, {memo} from 'react';
import styles from './article_button.module.css';

const ArticleButton = memo(({info}) => {
  const {title, link} = info;
  return (
    <div className={styles.button}>
      <a href={link}>
        {title}
      </a> 
    </div>
  );
});

export default ArticleButton;