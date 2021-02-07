import React, {useEffect, useState, useRef} from 'react';
import styles from './home.module.css';
import SwiperItem from '../swiper_item/swiper_item';

const Home = () => {
  const swiperRef = useRef();
  const [swiperItemWidth, setSwiperItemWidth] = useState(window.innerWidth);
  const [currentSwiper, setCurrentSwiper] = useState(0);
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
    const nextSwiper = () => {
      console.log(currentSwiper);
      if(currentSwiper >= Object.keys(swiper).length) {
        setCurrentSwiper(0);
      } else {
        setCurrentSwiper(currentSwiper + 1);
      }
    };
    const interval = setInterval(nextSwiper, 5000);
    const setWidth = () => {
      setSwiperItemWidth(window.innerWidth);
    }    
    window.addEventListener('resize', setWidth);
    
    return () => {
      window.removeEventListener('resize', setWidth);
      clearInterval(interval);
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
  const ratio = 100 / Object.keys(swiper).length;
  swiperRef.current.style.transition = `all .3s ease-in-out`;
  swiperRef.current.style.transform = `translateX(-${currentSwiper * ratio}%)`;
},[currentSwiper])




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
            {}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;