
import { useState, useEffect, useRef } from 'react';
import styles from'./App.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  const [pageY, setPageY] = useState(0);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const homeSection = useRef();
  console.log(homeSection);
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
    <div className={styles.app}>
      <Header pageY={pageY}
        isScrollUp={isScrollUp}/>
      <Main homeSection={homeSection}/>
      <Footer/>
    </div>
      )
}

export default App;
