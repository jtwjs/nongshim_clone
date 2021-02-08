import React, {useState, useEffect} from 'react';
import GlobalNav from '../global_nav/global_nav';
import SearchBox from '../search_box/search_box';
import UtilNav from '../util_nav/util_nav';
import styles from './header.module.css';

const Header = () => {
  const [pageY, setPageY] = useState(0);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [isShowSearchBox, setIsShowSearchBox] = useState(false);
  const closeSearchBox = () => {
    setIsShowSearchBox(false);
  }

  const openSearchBox = () => {
    setIsShowSearchBox(true);
  }
  console.log(pageY);
  console.log(isScrollUp);
  const onScroll = () => {
    setPageY(pageY => {
      pageY > window.pageYOffset ? setIsScrollUp(true) : setIsScrollUp(false);
      return window.pageYOffset;
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);


  return (
    <header className={`${styles.header}
     ${pageY > 125 ? styles.unfixed : '' }
     ${pageY > 125 && isScrollUp ? styles[`hide-unb`] : ''}
     `}>
      <div className={styles.container}>
        <UtilNav/>
        <GlobalNav
        isShowSearchBox={isShowSearchBox}
          openSearchBox={openSearchBox}/>
        <SearchBox 
          isShowSearchBox={isShowSearchBox}
          closeSearchBox={closeSearchBox}
          />
      </div>
    </header>
  );
};

export default Header;