import React, {useState,useRef, useEffect} from 'react';
import styles from './map.module.css';
import issueImg from '../../assets/img/main/map/map_product.png';
import ArticleButton from '../article_button/article_button';

const Map = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mapScrollRef = useRef();
  const tabList = [
    {
      index: 0,
      title: 'china'
    },
    {
      index: 1,
      title: 'united states'
    },
    {
      index: 2,
      title: 'japan'
    },
    {
      index: 3,
      title: 'australia'
    },
    {
      index: 4,
      title: 'vietnam'
    },
    {
      index: 5,
      title: 'canada'
    }
  ];

  const mapPinList = [
    {
      index: 0,
      category: 'china',
      title: '중국 현지인을 감동시킨 농심의 매운 맛',
      desc: '품질에 대한 자부심을 바탕으로 중국 전역에 농심의 맛 그대로 프리미엄 이미지를 뿌리내리고 있습니다.',
      issue1: '2019년 중국지역 매출',
      issue2: '2억 7천만',
      issue3: '달러 돌파',
      issueIMG: issueImg,
    },
    {
      index: 1,
      category: 'us',
      title: '미국시장 최고의 브랜드를 목표로',
      desc: '미국 내에서 농심 제품들은 이제 한인 사회를 넘어 미국 소비자들이 먼저 알고 찾는 글로벌 브랜드에 반열에 올라섰습니다.',
      issue1: '2019년 미국지역 매출',
      issue2: '2억 7천만',
      issue3: '달러 돌파',
      issueIMG: issueImg,
    },
    {
      index: 2,
      category: 'japan',
      title: '일본 매운맛 라면 시장을 선도하는 농심',
      desc: '신라면을 중심으로 브랜드 파워를 강화하여 경쟁이 치열한 일본 라면시장에 매운맛 No.1으로 도약하고자 노력하고 있습니다.',
      issue1: '2019년 일본지역 매출',
      issue2: '6.5천만',
      issue3: '달러 돌파',
      issueIMG: issueImg,
    },
    {
      index: 3,
      category: 'australia',
      title: '오세아니아를 매료시킨 농심의 매운 맛',
      desc: '호주 법인을 통한 오세아니아 공략에 박차를 가하고 있으며, 현재 호주 양대 소매유통기업인 Woolworths와 Coles에 辛라면을 입점시켜 판매하고 있습니다.',
      issue1: '2019년 호주지역 매출',
      issue2: '3천만',
      issue3: '달러 돌파',
      issueIMG: issueImg,
    },
    {
      index: 4,
      category: 'vietnam',
      title: '동남아지역의 HUB,베트남법인 설립',
      desc: '호치민 법인을 통해 베트남 전 지역에 농심의 맛을 알리고 있습니다. 더 나아가 동남아시아 지역의 허브로 도약할 것입니다.',
      issue1: '2019년 1월',
      issue2: '베트남법인',
      issue3: '설립',
      issueIMG: issueImg,
    },
    {
      index: 5,
      category: 'canada',
      title: '미국을 넘어서 북미전역으로 농심의 맛 전파',
      desc: '2018년 기준, 캐나다 라면 시장 점유율 2위에 등극했습니다. 국내를 넘어 해외에서도 인정 받는 농심의 라면은 캐나다에서도 사랑을 받고 있습니다.',
      issue1: '2020년 1월',
      issue2: '캐나다법인',
      issue3: '설립',
      issueIMG: issueImg,
    },
  ]

  useEffect(() => {
    mapScrollRef.current.style.transform = `translateY(${60 * currentIndex}px)`;
  }, [currentIndex]);

  const buttonInfo = {
    title: '세계속의 농심',
    link: '',
  };
  
  return (
    <article className={styles.map}>
      <h2>국경을 뛰어넘는 농심의 맛</h2>
      <div className={styles.content}>
        <div className={styles[`map-tab`]}>
          <div className={styles[`map-scroll`]} ref={mapScrollRef}>
          </div>
          <div className={styles[`map-scroll_m`]}>
          </div>
          
          <ul className={styles[`map-category`]}>
            {tabList.map(item => (
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
              {mapPinList.map(item => (
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
                      <img src={item.issueIMG} alt='라면 이미지'/>
                      <figcaption>
                        {item.issue1}<span className={styles.enter}><strong>{item.issue2}</strong>{item.issue3}</span>
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
};

export default Map;