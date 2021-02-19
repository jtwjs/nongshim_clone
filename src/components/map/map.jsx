import React, {useState,useRef, useEffect, memo} from 'react';
import styles from './map.module.css';
import issueImg from '../../assets/img/main/map/map_product.png';
import ArticleButton from '../article_button/article_button';
import mainData from '../../data/main.json';

const Map = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mapScrollRef = useRef();
  const mapScrollRef_m = useRef();
  const tabRef = useRef();

  useEffect(() => {
    const widthRatio = tabRef.current.offsetWidth / mainData.map.tab.length + 3;
    mapScrollRef.current.style.transform = `translateY(${60 * currentIndex}px)`;
    mapScrollRef_m.current.style.transform = `translateX(${widthRatio* currentIndex}px)`;
  }, [currentIndex]);


  const buttonInfo = {
    title: '세계속의 농심',
    link: '',
  };
  
  return (
    <article className={styles.map}>
      <h2>국경을 뛰어넘는 농심의 맛</h2>
      <div className={styles.content}>
        <div className={styles[`map-tab`]} ref={tabRef}>
          <div className={styles[`map-scroll`]} ref={mapScrollRef}>
          </div>
          <div className={styles[`map-scroll_m`]} ref={mapScrollRef_m}>
          </div>
          
          <ul className={styles[`map-category`]}>
            {mainData.map.tab.map(item => (
              <li key={item.index} className={currentIndex === item.index ? styles.active : ''}>
                <span role="button" onClick={() => setCurrentIndex(item.index)}>
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles[`map-content`]}>
          <div className={styles[`map-pin`]}>
              {mainData.map.pin.map(item => (
                <div key={item.index} className={`${styles[`pin-item`]} ${item.index === currentIndex ? styles.active : ''}`}>
                  <div className={`${styles[`pin-wrap`]} ${styles[item.category]}`}>
                    <span className={styles.pin}></span>
                    <dl className={styles[`pin-content`]}>
                      <dt>
                        {item.title}
                      </dt>
                      <dd>
                        {item.desc}
                      </dd>
                    </dl>
                  </div>
                    <figure className={styles.issue}>
                      <img src={issueImg} alt='라면 이미지'/>
                      <figcaption>
                        {item.issue[0]}<span className={styles.enter}><strong>{item.issue[1]}</strong>{item.issue[2]}</span>
                      </figcaption>
                    </figure>
                </div>
                
              ))}
          </div>
        </div>
      </div>
      <ArticleButton info={buttonInfo}/>
    </article>
  );
});

export default Map;