import React, {useState} from 'react';
import ArticleButton from '../article_button/article_button';
import styles from './story.module.css';
import SwiperCore, {Virtual} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import story_0 from '../../assets/img/main/story/story_0.jpg';
import story_1 from '../../assets/img/main/story/story_1.jpg';
import story_2 from '../../assets/img/main/story/story_2.jpg';
import story_3 from '../../assets/img/main/story/story_3.jpg';
import story_4 from '../../assets/img/main/story/story_4.jpg';
import story_5 from '../../assets/img/main/story/story_5.jpg';
import story_6 from '../../assets/img/main/story/story_6.jpg';
import story_7 from '../../assets/img/main/story/story_7.jpg';
import story_8 from '../../assets/img/main/story/story_8.jpg';
import story_9 from '../../assets/img/main/story/story_9.jpg';

SwiperCore.use([Virtual]);

const Story = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const buttonInfo = {
    title: 'N.LIVE',
    link: '',
  };

  const slides = [
    {
      id: 0,
      img: story_0,
      link: '',
      media: 'home',
    },
    {
      id: 1,
      img: story_1,
      link: '',
      media: 'instagram',
    },
    {
      id: 2,
      img: story_2,
      link: '',
      media: 'instagram',
    },
    {
      id: 3,
      img: story_3,
      link: '',
      media: 'instagram',
    },
    {
      id: 4,
      img: story_4,
      link: '',
      media: 'youtube',
    },
    {
      id: 5,
      img: story_5,
      link: '',
      media: 'instagram',
    },
    {
      id: 6,
      img: story_6,
      link: '',
      media: 'instagram',
    },
    {
      id: 7,
      img: story_7,
      link: '',
      media: 'instagram',
    },
    {
      id: 8,
      img: story_8,
      link: '',
      media: 'instagram',
    },
    {
      id: 9,
      img: story_9,
      link: '',
      media: 'instagram',
    },
  ];

  const storyText = [
    {
      id:0,
      tag: 'home',
      content: ['밤이 깊어질수록 더욱더 진국으로 변하는 숯불 위의 두부 전골',
    "'천년 고도'와 '금수강산'이라 자랑하는 저장 서부 넨바두고진세계자연유산 중 한 곳 중국의 단하 지형 강랑산에서 즐기는 여행과 음식을 소개한다."],
      date: '2021.02.09',
    },
    {
      id:1,
      tag: 'instagram',
      content: [`「#질문 : 짬뽕 VS. 짬뽕밥🍜」
      짬뽕과 짬뽕밥의 각각의 매력은 무엇일까요???
      
      그리고
      여러분은 어떤 걸 더 좋아하세요?
      
      #건면 #짬뽕 #짬뽕건면 #짬뽕밥 #라면 #농심 #nongshim`],
      date: '2021.02.09',
    },
    {
      id:2,
      tag: 'instagram',
      content: [`『새해 福 많이 받으소🐮~』
      2021년 신축년 구정 맞이 신제품을 준비했소🐮
      
      신제품 맛타입을 맞히면 출시 후 바로 드리겠소🐮
      어떤 맛일지 궁금하지 않소🐮?
      
      　① 소고기장국
      　② 순댓국
      　③ 콩나물국
      　④ 미역국
      
      ⏰기간: ~2/15일까지ㅣ댓글로 발표: 2/17(수)
      🎁선물: 신제품 6입 1박스 (20명)
      
      #농심이벤트`],
      date: '2021.02.09',
    },
    {
      id:3,
      tag: 'instagram',
      content: [`📣 「포테토칩 엣지 '인정샷' 이벤트」
      맛도 모양도 식감도 '엣.지.있.다' 🥔
      
      ☝ Event. 1
      소리까지 엣지있다 '식감 인정샷 이벤트'
      
      📌 이벤트 참여 방법
      씹을 때 느껴지는 '뽀드득' 소리 인정?
      먹는 순간을 영상으로 찍고 해시태그와 함께
      인스타그램에 업로드하면 참여 완료!
      
      ✌ Event. 2
      발견했다! '구매 인증샷 이벤트'
      
      📌 이벤트 참여 방법
      엣지있는 감자칩, '포테토칩 엣지' 구매 후 
      해시태그와 함께 인스타그램에 사진을 올려주세요
      
      📌 필수해시태그: #엣지인정 #포테토칩엣지 #농심
      
      ⏰기간: ~3/7일까지ㅣ댓글로 발표: 3/12(금)
      🎁선물 
      　- 애플 에어팟 맥스 (5명) 
      　- 감톨이 굿즈 세트 (100명) 
      
      2가지 이벤트 중 1가지만 참여해도 이벤트에 응모됩니다`],
      date: '2021.02.08',
    },
    {
      id:4,
      tag: 'youtube',
      content: [`짬뽕보다 맛있는 농심 '짬뽕건면'으로 만드는 '마늘차돌 짬뽕건면' 레시피!`],
      date: '2021.02.08',
    },
    {
      id:5,
      tag: 'instagram',
      content: [`「면식범(麵食犯)을 공개합니다!」 
      모든 범죄는 흔적을 남깁니다. 
      
      양손잡이에 수족냉증으로 땀이 없는 송과장
      그는 영문과 출신 답게 영자신문을 보며
      느긋하게 너구리를 즐겼죠.
      
      게다가 자신이 범인이라는 증거까지 남기는
      대범함을 보여주기도 했네요.. (like 라이코패스)
      
      송과장은 "과자 + O = 과장"이라는
      흔적을 남겼습니다...😱`],
      date: '2021.02.08',
    },
    {
      id:6,
      tag: 'instagram',
      content: [`「짬뽕 건면」 출시 #농심이벤트 
      짬뽕보다 맛있는 '짬뽕건면' 출시! 
      
      시원하고 개운한 짬뽕국물, 
      쫄깃쫄깃한 중국집 면발 그대로! 
      홍합볼, 오징어 어묵, 청경채 등 푸짐한 건더기~ 
      
      리얼 짬뽕의 맛을 한 봉에 담았다! 
      
      '짬뽕건면'으로 만드는 마늘차돌 짬뽕건면 레시피를 
      친구에게 소개하고 선물 받으세요~ 
      
      ⏰기간: ~2/15(월)까지ㅣ댓글로 발표: 2/17(수) 
      🎁선물: 신제품 '짬뽕건면' (10명) 
      
      🍜 마늘차돌 짬뽕건면 레시피 🍜 
      　1. 마늘을 얇게 썰어준다. 
      　2. 차돌박이와 편 마늘을 달궈진 팬에 2분간 볶는다. 
      　(마늘은 타기 쉬우니 약불에서 천천히 볶아주세요!) 
      　3. 물이 끓으면 면, 짬뽕스프, 후레이크를 넣고 5분간 조리한다. 
      　4. 후첨소스를 넣고 잘 섞어주면 완성!`],
      date: '2021.02.08',
    },
    {
      id:7,
      tag: 'instagram',
      content: [`「#3. '오일'은 빌라블랑카」
      2월 #5일 에 드리는 프리미엄 '#오일' 이벤트!
      
      📌 "나의 오일 MBTI 유형은?"
      빌라블랑카에서 개발한 프리미엄 오일 MBTI!
      
      여러분의 오일 MBTI 유형은 무엇인가요?
      댓글로 여러분의 오일 사용 유형을 남겨주세요.
      
      20명에게 빌라블랑카 오일과 신제품 알쿠니아 황도(200g)을 선물로 드립니다!
      
      🔍문항 1. 내가 더 자주 사용하는 오일은?
      　본연의 '맛'을 살려주는 해바라기유 (H) vs 은은~한 향의 포도씨유 (G)
      
      🔍문항 2. 내가 에어프라이어 요리를 더 맛있게 즐기고 싶을 때?
      　간편하게 오일스프레이! (S) vs 정성스럽게 오일 붓질! (B)
      
      🔍문항 3. 내가 엑스트라버진 올리브유를 즐기는 법은?
      　발사믹 식초와 함께 샐러드 드레싱으로 (D) vs 파스타, 감바스 등 다양한 요리에 (C)
      
      🔍문항 4. 내가 선호하는 병 타입은?
      　안전하고 고급진 유리병! (Y) vs 간편하고 실용적인 페트병! (P)
      
      @_____ 친구야 너의 유형은? 👫
      
      ⏳기간: ~2/14일까지ㅣ발표: 2/16(화) 댓글로 발표
      🎁선물: (20명)
      　+ 빌라블랑카 오일(포도, 해바라기 中 1)
      　+ 알쿠니아 황도 200g 3입팩`],
      date: '2021.02.05',
    },
    {
      id:8,
      tag: 'instagram',
      content: [`「라면에 달걀 넣을 때...」
      "파송송 계란탁~" 아시죠?
      
      어떤 이는 라면의 완성을 달걀이라고 하는데요.
      여러분은 어떤 스타일인가요?
      
      🔍 라면에 '달걀'을 넣을 때
      　① NO달걀: 튜닝의 끝은 순정이다
      　② 반숙: 노른자 맛으로 먹는다
      　③ 완숙: 국물은 건드리지 않는 게 국룰
      　④ 스크램블: 달걀을 풀어서 부드러움을 극대화
      
      달걀프라이 올리는 사람도 분명 있죠?`],
      date: '2021.02.05',
    },
    {
      id:9,
      tag: 'instagram',
      content: [`『면식범(麵食犯)이 나타났다!!』

      아침 일찍 출근한 이 대리는 탕비실에서
      충격적인 현장을 목격하게 되는데...😱
      
      박 부장, 송 과장, 강 대리, 배 사원...
      과연 "누가 라면🍜을 먹었을까?"
      
      사건 현장과 용의자 정보를 활용하여 범인을 추리해보세요
      ⚠정답은 다음 주 월요일에 공개합니다
      
      #면식범_내려온다 #면식범 #면탐정 #추리소설 #추리 #라면 #농심 #nongshim`],
      date: '2021.02.05',
    },
  ];


  return (
    <article className={styles.story}>
      <h2>m.live로 즐기는 농심이야기</h2>
      <div className={styles[`story-view`]}>
        <Swiper
          slidesPerView={'auto'}
          initialSlide={0}
          loop={true}
          centeredSlides={true}
          onSlideChange={(e) => setCurrentSlide(e.activeIndex % 10)}
          className={styles[`swiper-container`]}>
            {
              slides.map((content,index) => (
                <SwiperSlide key={content.id} virtualIndex={index} className={styles[`swiper-slide`]}>
                  <figure className={`${styles.media} ${styles[content.media]}`}>
                    <a href={content.link} target="_blank" rel="noreferrer">
                      <img src={content.img} alt='media title img'/>
                    </a>
                  </figure>
                </SwiperSlide>
              ))
            }
        </Swiper>
        <div className={styles.text}>
          <div className={styles[`text-wrap`]}>
            {
              storyText.map(content => (
                <div key={content.id} className={`${styles[`text-item`]} ${currentSlide === content.id ? styles.active : ''}`}>
                  <strong className={styles.tag}>
                    #{content.tag}
                  </strong>
                  {
                    content.content.map((item,index) => (
                      <p key={index} className={styles.desc}>{item}</p>
                    ))
                  }
                  <span className={styles.date}>{content.date}</span>
                </div>
              ))              
            }
          </div>
        </div>
        <div className={styles.phone}>
        </div>
      </div>
      <ArticleButton info={buttonInfo}/>
    </article>
  );
};

export default Story;