import React ,{memo} from 'react';
import styles from './global_util_menu.module.css';

const GlobalUtilMenu = memo(({menu, isShowUtilSubMenu, onClick}) => {

  const {title, icon, link, subMenu} = menu;

  return (
    <li className={`${styles[`util-item`]} ${styles.user} ${isShowUtilSubMenu === title ? styles.show : ''}`}>
      <a href={link} aria-label={title} onClick={() => onClick(title)}> 
      <span>
        <i className={icon}></i>
        </span>
      </a>
      {
        subMenu && 
        <div className={styles[`util-subMenu`]}>
          <ul>
          {subMenu.map(item => (
            <li key={item.title}>
              <a href={item.link}>
                <span>
                  {item.title}
                </span>
              </a>
            </li>
          ))}
          </ul>  
        </div>
      }
  </li>
  );
});

export default GlobalUtilMenu;