
import React, {useState, useCallback} from 'react';
import GlobalNavItem from '../global_nav_item/global_nav_item';
import GlobalUtilMenu from '../global_util_menu/global_util_menu';
import styles from './global_nav.module.css';

const GlobalNav = () => {
  const [isShown, setIsShown] = useState('');
  const [isShowUtilSubMenu, setIsShowUtilSubMenu] = useState('');
  
  const showCategory = useCallback((title) => {
    setIsShown(title);
  }, []);

  const hideCategory = useCallback(() => {
    setIsShown('');
  }, []);

  
  const selectedUtilMenu = (title) => {
    if(isShowUtilSubMenu) {
      setIsShowUtilSubMenu('');
    } else {
      setIsShowUtilSubMenu(title);
    } 
  };

  const menuList = [{
    title: '농심소개',
    link: '',
    category: [
      {title: 'overview',
        link: '',
        subMenu: []
      },
      {title: '경영이념',
      link: '',
      subMenu: [
          {title: '경영이념', link: ''},
          {title: '농심 WAY', link: ''}
        ]
      },
      {title: '연혁',
      link: '',
        subMenu: []
      },
      {title: '세계속의 농심',
      link: '',
        subMenu: []
      },
      {title: 'CI 소개',
      link: '',
        subMenu: []
      },
      {title: '농심그룹',
      link: '',
        subMenu: [
          {title: '농심홀딩스', link: ''},
          {title: '율촌화학', link: ''},
          {title: '메가마트', link: ''},
          {title: '태경농산', link: ''},
          {title: '농심엔지니어링', link: ''},
          {title: '엔디에스', link: ''},
          {title: '농심기획', link: ''},
          {title: '호텔농심', link: ''},
          {title: '농심개발', link: ''},
          {title: '농심미분', link: ''},
          {title: '율촌재단', link: ''},
        ]
      },      
    ]
    },
    {
      title: '지속가능경영',
      link: '',
      category: [
        {title: 'overview',
        link: '',
          subMenu: []
        },
        {title: '사회공헌',
        link: '',
          subMenu: [
            {title: '사회공헌 활동', link: ''},
            {title: '율촌재단', link: ''}
          ]
        },
        {title: '연구개발',
        link: '',
          subMenu: []
        },
        {title: '환경·안전',
        link: '',
          subMenu: []
        },
        {title: '동반성장',
        link: '',
          subMenu: []
        },
        {title: '준법경영',
        link: '',
          subMenu: []
        },      
        {title: '소비자중심경영',
        link: '',
          subMenu: []
        },      
      ]
      },
      {
        title: '홍보센터',
        link: '',
        category: [
          {title: 'overview',
          link: '',
            subMenu: []
          },
          {title: '농시미 이벤트',
          link: '',
            subMenu: [
              {title: '진행중 이벤트', link: ''},
              {title: '포인트마켓', link: ''}
            ]
          },
          {title: '농심 소식',
          link: '',
            subMenu: []
          },
          {title: '농심 TV',
          link: '',
            subMenu: []
          },
          {title: 'N.서포터즈',
          link: '',
            subMenu: []
          },
          {title: '라면피디아',
          link: '',
            subMenu: []
          },      
        ]
        },
        {
          title: '투자정보',
          link: '',
          category: [
            {title: 'overview',
            link: '',
              subMenu: []
            },
            {title: '주식에 관한 사항',
            link: '',
              subMenu: []
            },
            {title: '주가정보',
            link: '',
              subMenu: []
            },
            {title: 'IR 정보',
            link: '',
              subMenu: [
                {title: '에뉴얼리포트', link: ''},
                {title: '실적발표자료', link: ''},
                {title: '수익성', link: ''},
                {title: '투자자료', link: ''},
                {title: '요약재무재표', link: ''},
              ]
            },
            {title: '공시정보',
            link: '',
              subMenu: [
                {title: '공시사항', link: ''},
                {title: '공고자료', link: ''},
                {title: '공시정보관리규정', link: ''},
                {title: '공고기간안내', link: ''},
              ]
            },
          ]
          },
      {
        title: '고객지원',
        link: '',
        category: [
          {title: 'overview',
          link: '',
            subMenu: []
          },
          {title: '상담접수',
          link: '',
            subMenu: [
              {title: '상담접수', link: ''},
              {title: '상담처리절차', link: ''}
            ]
          },
          {title: '자주 묻는 질문',
          link: '',
            subMenu: []
          },
          {title: '공장견학',
          link: '',
            subMenu: [
              {title: '견학신청', link: ''},
              {title: '견학조회', link: ''},
              {title: '견학후기', link: ''},
            ]
          },
          {title: '오시는길',
          link: '',
            subMenu: []
          },     
        ]
        }, 
  ];

  const utilMenu = [{
    title: '검색',
    icon: 'fas fa-search'
  },
  {
    title: '사용자',
    icon: 'far fa-user',
    subMenu: [{
      title: '로그인',
      link: '',
    },
    {
      title: '회원가입',
      link: '',
      },
    {
      title: '마이페이지',
      link: '',
    }]
  },
  {
    title: '언어',
    icon: 'fas fa-globe-asia',
    subMenu: [{
      title: 'En',
      link: '',
    },{
      title: 'Cn',
      link: '',
    },
    {
      title: 'Jp',
      link: '',
    }
    ]
  }, {
    title: '사이트맵',
    icon: 'fas fa-bars'
  }]

  return (
    <nav className={styles.gnb}  onMouseLeave={() => setIsShowUtilSubMenu('')}>
      <div className={styles[`left-container`]}>
        <h1 className={styles.logo}>
          <a href="#a" title="main으로 가기">
          <svg alt="농심 로고" id="logo-svg" width="120px" height="39px" viewBox="0 0 120 39" version="1.1" xmlns="http://www.w3.org/2000/svg" ><g stroke="none" strokeWidth="1" ><path className={styles[`logo-title`]} d="M65.8643,20.3746 C74.5083,20.3746 81.5133,23.2996 81.5133,26.9056 C81.5133,30.5116 74.5083,33.4356 65.8643,33.4356 C57.2203,33.4356 50.2133,30.5116 50.2133,26.9056 C50.2133,23.2996 57.2203,20.3746 65.8643,20.3746 Z M118.307,21.1481 C119.242,21.1481 120,21.8921 120,22.8101 L120,30.1801 C120,31.0991 119.242,31.8431 118.307,31.8431 L91.502,31.8431 C90.566,31.8431 89.808,31.0991 89.808,30.1801 L89.808,22.8101 C89.808,21.8921 90.566,21.1481 91.502,21.1481 L118.307,21.1481 Z M65.8643,23.5086 C60.8253,23.5086 56.7403,25.0296 56.7403,26.9056 C56.7403,28.7816 60.8253,30.3026 65.8643,30.3026 C70.9023,30.3026 74.9873,28.7816 74.9873,26.9056 C74.9873,25.0296 70.9023,23.5086 65.8643,23.5086 Z M113.469,24.3951 L96.229,24.3951 L96.229,28.5431 L113.469,28.5431 L113.469,24.3951 Z M116.6941,5.816 C118.42141,5.816 119.834561,7.14441855 119.929966,8.8174705 L119.9351,8.998 L119.9351,17.787 C119.9351,19.545 118.4831,20.968 116.6941,20.968 C114.9041,20.968 113.4691,19.544 113.4541,17.787 C110.4561,21.119 102.7541,17.843 99.0101,14.239 C95.4871,17.952 90.8151,19.371 88.4801,19.371 C87.4031,19.371 86.7001,18.778 86.7001,17.879 C86.7001,16.979 87.4041,16.313 88.4421,16.214 C89.7771,16.123 94.0411,14.31 95.8511,8.456 C96.2541,7.113 97.4911,6.199 98.9541,6.199 C100.4301,6.199 101.3821,6.85 102.0661,8.49 C103.9771,13.402 109.2051,16.058 111.1331,15.985 C112.918285,15.9192593 113.400315,14.4311934 113.461932,14.2110999 L113.4691,14.184 L113.4541,8.998 C113.4541,7.241 114.9041,5.816 116.6941,5.816 Z M54.1293,5.38 C55.9193,5.38 57.3353,6.805 57.3353,8.56 L57.3353,11.4 L75.9023,11.4 C77.9873,11.4 78.6243,10.953 79.2853,10.744 C80.2123,10.454 81.2433,10.65 81.6353,11.516 C82.0283,12.382 81.5693,13.248 80.8163,13.726 C80.0633,14.202 78.3773,14.675 75.9023,14.675 L68.8113,14.675 L68.8113,16.423 L81.6583,16.452 C82.5933,16.452 83.3513,17.196 83.3513,18.116 C83.3513,19.033 82.5933,19.777 81.6583,19.777 L50.3483,19.777 C49.4123,19.777 48.6543,19.033 48.6543,18.116 C48.6543,17.196 49.4123,16.452 50.3483,16.452 L62.4713,16.423 L62.4713,14.675 L52.5723,14.701 C51.6373,14.701 50.8793,13.956 50.8793,13.037 L50.8883,8.56 C50.8883,6.805 52.3403,5.38 54.1293,5.38 Z"></path><path className={styles[`logo-fill`]} d="M22.6025,4.109 C19.3655,4.109 16.7315,7.979 16.7315,12.735 C16.7315,17.491 19.3655,21.36 22.6025,21.36 C25.8395,21.36 28.4745,17.491 28.4745,12.735 C28.4745,7.979 25.8395,4.109 22.6025,4.109 M22.6025,37.56 C10.5805,37.56 0.8005,29.315 0.8005,19.18 C0.8005,9.046 10.5805,0.8 22.6025,0.8 C34.6245,0.8 44.4055,9.046 44.4055,19.18 C44.4055,29.315 34.6245,37.56 22.6025,37.56"></path><path className={styles[`logo-line`]} d="M22.6025,20.56 C19.8535,20.56 17.5315,16.976 17.5315,12.735 C17.5315,8.493 19.8535,4.909 22.6025,4.909 C25.3515,4.909 27.6735,8.493 27.6735,12.735 C27.6735,16.976 25.3515,20.56 22.6025,20.56 M22.6025,0 C10.1395,0 -0.0005,8.604 -0.0005,19.181 C-0.0005,29.756 10.1395,38.36 22.6025,38.36 C35.0655,38.36 45.2055,29.756 45.2055,19.181 C45.2055,8.604 35.0655,0 22.6025,0 M22.6025,22.16 C26.2865,22.16 29.2735,17.939 29.2735,12.735 C29.2735,7.529 26.2865,3.309 22.6025,3.309 C18.9175,3.309 15.9315,7.529 15.9315,12.735 C15.9315,17.939 18.9175,22.16 22.6025,22.16 M22.6025,1.6 C34.2015,1.6 43.6055,9.47 43.6055,19.181 C43.6055,28.889 34.2015,36.76 22.6025,36.76 C11.0035,36.76 1.6005,28.889 1.6005,19.181 C1.6005,9.47 11.0035,1.6 22.6025,1.6"></path></g></svg>
          </a>
        </h1>
    </div>
      <div className={styles[`center-container`]}>
        <ul className={styles.list}>
          {
          menuList.map(menu => (
            <GlobalNavItem key={menu.title} 
              menu={menu}
              isShown={isShown}
              showCategory={showCategory}
              hideCategory={hideCategory}

              />
          ))
          }
          <li className={styles[`n-live`]}>
            <a href="#a" >
              <span className={styles[`img-default`]}>
                <img src="/assets/img/header/nlive_w.svg" alt="N.live"/>
              </span>
              <span className={styles[`img-hover`]}>
                <img src="/assets/img/header/nlive_b.svg" alt="N.live"/>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles['right-container']}>
          <ul className={styles.util}>
            {
              utilMenu.map(menu => 
                <GlobalUtilMenu 
                key={menu.title} 
                menu={menu}
                isShowUtilSubMenu={isShowUtilSubMenu}
                onClick={selectedUtilMenu}/>
              )
            }

          </ul>
      </div>
    </nav>
  );
};

export default GlobalNav;