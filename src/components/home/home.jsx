import React, {useEffect, useState, useRef, useCallback} from 'react';
import styles from './home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SliderItem from '../slider_item/slider_item';
import SliderDot from '../slider_dot/slider_dot';

const SLIDER_SPEED = 5000;
const SLIDER_DELAY = 300;
const Home = () => {
  const sliderRef = useRef();
  const [sliderItemWidth, setSliderItemWidth] = useState(window.innerWidth);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [isSliderState, setIsSliderState] = useState(true);
  const [slider, setSlider] = useState({
  
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
      setSliderItemWidth(window.innerWidth);
    };
    window.addEventListener('resize', setWidth);

    return () => {
      window.removeEventListener('resize', setWidth);
    }
  }, [])

useEffect(() => {
  setSlider(state => {
      const update = {...state};
      const length = Object.keys(update).length;
      update[length + 1] = update[0];
      return update;
  });
}, [])

useEffect(() => {
  sliderRef.current.style.width = `${Object.keys(slider).length * sliderItemWidth}px`;
},[sliderItemWidth, slider])

useEffect(() => {
  const nextslider = () => {
      setCurrentSlider(currentSlider => currentSlider + 1);
  };
  if(isSliderState) {
  const interval = setInterval(nextslider, SLIDER_SPEED);
  return () =>  clearInterval(interval);
  }
  
},[currentSlider, slider, isSliderState]);

useEffect(() => {
  const length = Object.keys(slider).length;
  const ratio = 100 / length;
  
  

  sliderRef.current.style.transform = `translateX(-${currentSlider * ratio}%)`;
  if(currentSlider === length - 1) {
    setTimeout(() => {
      sliderRef.current.style.transition = '0ms';
      sliderRef.current.style.transform = `translateX(0%)`
      setTimeout(() => {
        setCurrentSlider(0);
      },10);
    },SLIDER_DELAY * 2);  


  } else {
    sliderRef.current.style.transition = `${SLIDER_DELAY}ms ease-in-out`;
  }
  

}, [currentSlider, slider])

const changeCurrentSlider = useCallback((index) => {
  setCurrentSlider(index);
}, []);


const pauseSlider = () => {
  setIsSliderState(false);
}

const playSlider = () => {
  setIsSliderState(true);
}

  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles[`slider-container`]}>
          <ul ref={sliderRef}
          className={styles.slider}>
            {
              Object.keys(slider).map(key => (
                <SliderItem key={key} 
                  item={slider[key]} 
                  currentSlider={currentSlider}/>
              ))
            }            
          </ul>
        </div>
        <div className={styles[`slider-pagination`]}>
          <ul className={`${styles.pagination} ${styles.active}`}>
            {
              Object.keys(slider).map(key => {
                if(key === slider[key].index.toString()) {
                  return (
                    <SliderDot key={key} 
                    currentSlider={currentSlider}
                    slider={slider[key]}
                    onClick={changeCurrentSlider}
                    />
                    )
                }
                return null;
              })
            }
          </ul>
          {
            isSliderState ? (
            <button className={styles[`slider-btn`] } onClick={pauseSlider}>
              <FontAwesomeIcon icon={["fas", "pause"]}/>
            </button>)
            : 
            (<button className={styles[`slider-btn`]} onClick={playSlider}>
              <FontAwesomeIcon icon={["fas", "play"]}/>
            </button>)}
        </div>
      </div>
    </section>
  );
};

export default Home;