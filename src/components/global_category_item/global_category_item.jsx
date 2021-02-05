import React from 'react';
import styles from './global_category_item.module.css';

const GlobalCategoryItem = ({category, category:{subMenu}}) => {


  return (
    <div className={`${styles.col} ${subMenu.length > 3 ? styles[`col-2`] : ''}`}>
      <a href={category.link}>
        <span className={styles.title}>{category.title}</span>
        <i className="fas fa-chevron-circle-right"></i>
      </a>
      {
        category.subMenu && 
        <div className={styles[`sub-menu`]}>
          {
            subMenu.map(item => (
              <a key={item.title} href={item.link}>
                <span>{item.title}</span>
              </a>
            ))
          }
        </div>
      }
    </div>
  );
};

export default GlobalCategoryItem;