import React, {useEffect, useState, useRef} from 'react';
import styles from './home.module.css';
import SwiperItem from '../swiper_item/swiper_item';

const SWIPER_SPEED = 1000;
const Home = () => {
  const swiperRef = useRef();
  const [swiperItemWidth, setSwiperItemWidth] = useState(window.innerWidth);
  const [currentSwiper, setCurrentSwiper] = useState(0);
  const [isSwiperState, setIsSwiperState] = useState(true);
  const [swiper, setSwiper] = useState({

   1: {
      index: 1,
      title: '',
    },
   2: {
      index: 2,
      title: '일상의 가치를 더합니다',
    },
   3: {
      index: 3,
      title: '행복한 가치를 더합니다',
    },
   4: {
      index: 4,
      title: '인생을 맛있게, 농심',
    },
   5: {
      index: 5,
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
      update[update.length + 1] = update[1];
      return update;
  });
}, [])

useEffect(() => {
  swiperRef.current.style.width = `${Object.keys(swiper).length * swiperItemWidth}px`;
},[swiperItemWidth, swiper])

useEffect(() => {
  const length = Object.keys(swiper).length;
  const ratio = 100 / length;
  const nextSwiper = () => {
    if(currentSwiper === length - 1) {
      setTimeout(() => {
        swiperRef.current.style.transition = '0ms';
        swiperRef.current.style.transform = `translateX(0%)`;
      },SWIPER_SPEED);
      setCurrentSwiper(0);
    } else {
      swiperRef.current.style.transition = `.3s ease-in-out`;
      setCurrentSwiper(currentSwiper => currentSwiper + 1);
    }
    swiperRef.current.style.transform = `translateX(-${currentSwiper * ratio}%)`;
  };
  const interval = setInterval(nextSwiper, SWIPER_SPEED);

  return () => clearInterval(interval);
},[currentSwiper, swiper]);

const swiperBtnList = Object.keys(swiper).map(key => (
  <li key={key}>
    <span aria-label={`go to ${swiper[key].index}-slide`} role="button">
    </span>
  </li>
));

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
          <ul className={styles.pagination}>
            {swiperBtnList}
          </ul>
          {
            isSwiperState ? 
            <button className={styles[`swiper-btn`]}>
              <i class="fas fa-pause"></i>
            </button>
             :
            <button button className={styles[`swiper-btn`]}>
              <i class="fas fa-play"></i>
            </button>
          }
        </div>
      </div>
    </section>
  );
};

export default Home;