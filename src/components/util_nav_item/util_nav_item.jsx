import React from 'react';
import styles from './util_nav_item.module.css';

const UtilNavItem = ({info, onClick}) => {
  const {title, selected, category} = info;
  console.log(info);
  const onSelected = (e) => {
    e.preventDefault();
    onClick(title);
  }

  return (
    <li className={`${styles.item} ${selected ? styles.selected : ''} `}>
      <a className={styles[`category-${category}`]} href="#a" onClick={onSelected}>
        {title}
      </a>
    </li>
  );
};

export default UtilNavItem;