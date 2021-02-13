
import { useState, useEffect } from 'react';
import styles from'./App.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import SiteMap from './components/site_map/site_map';

function App() {
  const [pageY, setPageY] = useState(0);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [isShowButtonTop, setIsShowButtonTop] = useState(false);
  const [isOpenSiteMap, setIsOpenSiteMap] = useState(false);

  const onScroll = () => {
    window.pageYOffset > 125 && !isShowButtonTop ? setIsShowButtonTop(true) : setIsShowButtonTop(false);

    setPageY(pageY => {
      pageY > window.pageYOffset ? setIsScrollUp(true) : setIsScrollUp(false);
      return window.pageYOffset;
    });
    
  }
  const openSiteMap = () => {
    setIsOpenSiteMap(true);
  }
  const closeSiteMap = () => {
    setIsOpenSiteMap(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  useEffect(() => {
    isOpenSiteMap ? document.documentElement.style.overflow =  'hidden' : document.documentElement.style.overflow = '';
  }, [isOpenSiteMap]);
  

  return (
    <div className={styles.app}>
      <Header pageY={pageY}
        isScrollUp={isScrollUp}
        openSiteMap={openSiteMap}/>
      <SiteMap isOpenSiteMap={isOpenSiteMap}
      closeSiteMap={closeSiteMap}
      />
      <Main/>
      <Footer isShowButtonTop={isShowButtonTop}/>
    </div>
      )
}

export default App;
