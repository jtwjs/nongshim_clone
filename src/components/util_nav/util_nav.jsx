import React, {useState} from 'react';
import UtilNavItem from '../util_nav_item/util_nav_item';
import styles from './util_nav.module.css';

const UtilNav = () => {
  const [itemInfo, setItemInfo] = useState({
  '농심': { 
    title: '농심',
    category: 'nongshim',
    selected: true
   },
  '브랜드': {
   title: '브랜드',
   category: 'brand',
   selected: false
  },
  '누들푸들': { 
    title: '누들푸들',
    category: 'noodlefoodle',
    selected: false
  },
  '농심채용': {
    title: '농심채용',
    category: 'recruit',
    selected: false
  }
  });
  
  const onClick = (title) => {
    setItemInfo(itemInfo => {
      const update = Object.keys(itemInfo).map(key => {
        if(itemInfo[key].title === title) {
           itemInfo[key].selected = true;
        } else {
         itemInfo[key].selected = false;
        }
        return itemInfo[key];
      })
      return update;
    })
  }

  return (
    <nav className={styles.unv}>
      <ul className={styles.list}>
        {
          Object.keys(itemInfo).map(key => {
            return <UtilNavItem 
                  key={key} 
                  info={itemInfo[key]}
                  onClick={onClick}
                  />
          })  
        }
      </ul>
    </nav>
  );
};

export default UtilNav;