import React ,{memo}from 'react';
import GlobalCategoryItem from '../global_category_item/global_category_item';
import styles from './global_nav_item.module.css';

const GlobalNavItem = memo(({menu, isShown, showCategory, hideCategory}) => {
  console.log('---------');
  const {title, link, category} = menu;
  return (
    <li className={`${styles.item} ${isShown === title ? styles.selected : ''}`}
    onMouseEnter={() => showCategory(title)}
    onMouseLeave={() => hideCategory('')}
    >
      <a href={link} >
        <span className={styles.title}>
          {title}
        </span>
      </a>
      <div className={`${styles.category} ${isShown ? styles.show : ''}`}>
        <div className={styles.container}>
          {
            category.map(item => (
              <GlobalCategoryItem key={item.title} 
              category={item}
              />
            ))
          }
        </div>
      </div>
    </li>

  );
});

export default GlobalNavItem;