import React from 'react';
import styles from './global_nav_item.module.css';

const GlobalNavItem = ({menu}) => {

  const {title, link, category} = menu;
  return (
    <li className={styles.item}>
      <a href={link}>
        <span>
          {title}
        </span>
      </a>
      <div className={styles.category}>

      </div>
    </li>

  );
};

export default GlobalNavItem;