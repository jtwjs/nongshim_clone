import React, {useEffect, useState, useRef, useCallback} from 'react';
import styles from './home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SwiperItem from '../swiper_item/swiper_item';
import SwiperDot from '../swiper_dot/swiper_dot';

const SWIPER_SPEED = 3000;
const Home = () => {
  const swiperRef = useRef();
  const [swiperItemWidth, setSwiperItemWidth] = useState(window.innerWidth);
  const [currentSwiper, setCurrentSwiper] = useState(0);
  const [isSwiperState, setIsSwiperState] = useState(true);
  const [swiper, setSwiper] = useState({
  
   0: {
      index: 0,
      title: '',
    },
   1: {
      index: 1,
      title: '일상의 가치를 더합니다',
    },
   2: {
      index: 2,
      title: '행복한 가치를 더합니다',
    },
   3: {
      index: 3,
      title: '인생을 맛있게, 농심',
    },
   4: {
      index: 4,
      title: 'Spice Up Your Life',
      subTitle: '인생을 맛있게, 농심',
    },
  });

  useEffect(() => {
    const setWidth = () => {
      setSwiperItemWidth(window.innerWidth);
    };
    window.addEventListener('resize', setWidth);

    return () => {
      window.removeEventListener('resize', setWidth);
    }
  }, [])

useEffect(() => {
  setSwiper(state => {
      const update = {...state};
      const length = Object.keys(update).length;
      update[length + 1] = update[0];
      return update;
  });
}, [])

useEffect(() => {
  swiperRef.current.style.width = `${Object.keys(swiper).length * swiperItemWidth}px`;
},[swiperItemWidth, swiper])

useEffect(() => {
  const length = Object.keys(swiper).length;  
  const nextSwiper = () => {
      setCurrentSwiper(currentSwiper => currentSwiper + 1);
  };
  if(isSwiperState) {
  const interval = setInterval(nextSwiper, SWIPER_SPEED);
  return () =>  clearInterval(interval);
  }
  
},[currentSwiper, swiper, isSwiperState]);

useEffect(() => {
  const length = Object.keys(swiper).length;
  const ratio = 100 / length;
  swiperRef.current.style.transform = `translateX(-${currentSwiper * ratio}%)`;
  if(currentSwiper === length - 1) {
    console.log(currentSwiper);
    setTimeout(() => {
      swiperRef.current.style.transition = '0ms';
      swiperRef.current.style.transform = `translateX(0%)`;
    },300);
    setCurrentSwiper(0);
  } else {
    swiperRef.current.style.transition = `.3s ease-in-out`;
  }
  

}, [currentSwiper, swiper])

const changeCurrentSwiper = useCallback((index) => {
  setCurrentSwiper(index);
}, []);


const pauseSwiper = () => {
  setIsSwiperState(false);
}

const playSwiper = () => {
  setIsSwiperState(true);
}

  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles[`swiper-container`]}>
          <ul ref={swiperRef}
          className={styles.swiper}>
            {
              Object.keys(swiper).map(key => (
                <SwiperItem key={key} item={swiper[key]}/>
              ))
            }            
          </ul>
        </div>
        <div className={styles[`swiper-pagination`]}>
          <ul className={`${styles.pagination} ${styles.active}`}>
            {
              Object.keys(swiper).map(key => {
                if(key === swiper[key].index.toString()) {
                  return (
                    <SwiperDot key={key} 
                    currentSwiper={currentSwiper}
                    swiper={swiper[key]}
                    onClick={changeCurrentSwiper}
                    />
                    )
                }
                return null;
              })
            }
          </ul>
          {
            isSwiperState ? (
            <button className={styles[`swiper-btn`] } onClick={pauseSwiper}>
              <FontAwesomeIcon icon={["fas", "pause"]}/>
            </button>)
            : 
            (<button className={styles[`swiper-btn`]} onClick={playSwiper}>
              <FontAwesomeIcon icon={["fas", "play"]}/>
            </button>)}
        </div>
      </div>
    </section>
  );
};

export default Home;