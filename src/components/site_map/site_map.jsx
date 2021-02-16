import React, {useState, memo} from 'react';
import styles from './site_map.module.css';


const SiteMap = memo(({isOpenSiteMap, closeSiteMap}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const gnbList = [
    {
      index: 0, 
      title: '농심',
    },
    {
      index: 1, 
      title: '브랜드',
    },
    {
      index: 2, 
      title: '누들푸들',
    },
    {
      index: 3, 
      title: '농심채용',
    },
  ];

  const gnbCategorys = [ 
    { 
      index: 0,
      title: '농심',
      category1: [
        {
          title: '농심소개',
          link: '',
          subCategorys: [
            {
              title: 'overview',
              link: '',
              subCategorys: [],
            },
            {
              title: '경영이념',
              link: '',
              subCategorys: [
                {title: '경영이념', link:'',},
                {title: '농심way', link: '',}
              ],
            },
            {
              title: '연혁',
              link: '',
              subCategorys: [],
            },
            {
              title: '세계속의 농심',
              link: '',
              subCategorys: [],
            },
            {
              title: 'ci 소개',
              link: '',
              subCategorys: [],
            },
            {
              title: '농심그룹',
              link: '',
              subCategorys: [
                {title: '농심홀딩스', link:''},
                {title: '율촌화학', link:''},
                {title: '메가마트', link:''},
                {title: '태경농산', link:''},
                {title: '농심엔지니어링', link:''},
                {title: '엔디에스', link:''},
                {title: '농심기획', link:''},
                {title: '호텔농심', link:''},
                {title: '농심개발', link:''},
                {title: '농심미분', link:''},
                {title: '율촌재단', link:''},
              ],
            },
          ],
        },
        {
          title: '홍보센터',
          link: '',
          subCategorys: [
            {
              title: 'overview',
              link: '',
              subCategorys: [],
            },
            {
              title: '농시미 이벤트',
              link: '',
              subCategorys: [
                {title: '진행중 이벤트', link: ''},
                {title: '포인트마켓', link: ''},
              ],
            },
            {
              title: '농심소식',
              link: '',
              subCategorys: [],
            },
            {
              title: '농심tv',
              link: '',
              subCategorys: [],
            },
            {
              title: 'n.서포터즈',
              link: '',
              subCategorys: [],
            },
            {
              title: '라면피디아',
              link: '',
              subCategorys: [],
            },
          ]
        },
        {
          title: '고객지원',
          link: '',
          subCategorys: [
            {
              title: 'overview',
              link: '',
              subCategorys: [],
            },
            {
              title: '상담접수',
              link: '',
              subCategorys: [
                {title: '상담접수', link: ''},
                {title: '상담처리절차', link: ''},
              ],
            },
            {
              title: '자주 묻는 질문',
              link: '',
              subCategorys: [],
            },
            {
              title: '공장견학',
              link: '',
              subCategorys: [
                {title: '견학신청', link: ''},
                {title: '견학조회', link: ''},
                {title: '견학후기', link: ''},
              ],
            },
            {
              title: '오시는길',
              link: '',
              subCategorys: [],
            },
          ]
        }
      ],
      category2: [
        {
          title: '지속가능경영',
          link: '',
          subCategorys: [
            {
              title: 'overview',
              link: '',
              subCategorys: [],
            },
            {
              title: '사회공헌',
              link: '',
              subCategorys: [
                {title: '사회공헌 활동', link: ''},
                {title: '율촌재단', link: ''}
              ],
            },
            {
              title: '연구개발',
              link: '',
              subCategorys: [],
            },
            {
              title: '환경·안전',
              link: '',
              subCategorys: [],
            },
            {
              title: '동반성장',
              link: '',
              subCategorys: [],
            },
            {
              title: '준법경영',
              link: '',
              subCategorys: [],
            },
            {
              title: '소비자중심경영',
              link: '',
              subCategorys: [],
            },
          ]
        },
        {
          title: '투자정보',
          link: '',
          subCategorys: [
            {
              title: 'overview',
              link: '',
              subCategorys: [],
            },
            {
              title: '주식에 관한 사항',
              link: '',
              subCategorys: [],
            },
            {
              title: '주가정보',
              link: '',
              subCategorys: [],
            },
            {
              title: 'ir 정보',
              link: '',
              subCategorys: [
                {title: '에뉴얼리포트', link: ''},
                {title: '실적발표자료', link: ''},
                {title: '수익성', link: ''},
                {title: '투자자료', link: ''},
                {title: '요약제무제표', link: ''},
              ],
            },
            {
              title: '공시정보',
              link: '',
              subCategorys: [
                {title: '공시사항', link: ''},
                {title: '공고자료', link: ''},
                {title: '공시정보관리규정', link: ''},
                {title: '공고기간안내', link: ''},
              ],
            },
          ]
        },
        {
          title: 'n.live',
          link: '',
          subCategorys: [],
        },
        {
          title: '기타',
          link: '',
          subCategorys: [
            {
              title: '개인정보처리방침',
              link: '',
              subCategorys: [],
            },
            {
              title: '이용약관',
              link: '',
              subCategorys: [],
            },
            {
              title: '특약점포탈',
              link: '',
              subCategorys: [],
            },
            {
              title: '전자결제',
              link: '',
              subCategorys: [],
            },
            {
              title: '증명서 조회',
              link: '',
              subCategorys: [],
            },
          ]
        }
      ]
    },
    {
      index: 1,
      title: '브랜드',
      category1: [
        {
          title: '전체',
          link: '',
          subCategorys: [
            {title:'전체', link: ''},
          ]
        },
        {
          title: '스낵',
          link: '',
          subCategorys: [
            {title:'감자군것질', link: ''},
            {title:'감자깡', link: ''},
            {title:'고구마깡', link: ''},
            {title:'구운새우칩', link: ''},
            {title:'꿀꽈배기', link: ''},
            {title:'닭다리', link: ''},
            {title:'미니츄러스', link: ''},
            {title:'바나나킥', link: ''},
            {title:'벌집핏자', link: ''},
            {title:'별따먹자', link: ''},
            {title:'새우깡', link: ''},
            {title:'수미칩', link: ''},
            {title:'알새우칩', link: ''},
            {title:'양파깡', link: ''},
            {title:'양파링', link: ''},
            {title:'오징어다리', link: ''},
            {title:'오징어칩', link: ''},
            {title:'인디언밥/에스키모밥', link: ''},
            {title:'자갈치', link: ''},
            {title:'조청유과', link: ''},
            {title:'쫄병스낵', link: ''},
            {title:'포스틱', link: ''},
            {title:'포테토칩', link: ''},
            {title:'프라첼', link: ''},
          ]
        },
        {
          title: '음료',
          link: '',
          subCategorys: [
            {title:"Cambell's V8", link: ''},
            {title:'백산수', link: ''},
            {title:'오이오차', link: ''},
            {title:'웰치', link: ''},
            {title:'이토엔터', link: ''},
            {title:'치치야스', link: ''},
            {title:'카프리썬', link: ''},
            {title:'파워오투', link: ''},
            {title:'폴져스 커피', link: ''},
          ]
        },
        {
          title: '간편식',
          link: '',
          subCategorys: [
            {title:'냉동밥', link: ''},
            {title:'쿡탐 국물라볶이', link: ''},
            {title:'쿡탐 국물요리', link: ''},
            {title:'쿡탐 전골요리', link: ''},
          ]
        },
        {
          title: '기타',
          link: '',
          subCategorys: [
            {title:'건강한쌀 프리믹스', link: ''},
            {title:'라이필', link: ''},
          ]
        },
      ],
      category2: [
        {
          title: '면',
          link: '',
          subCategorys: [
            {title:'감자면', link: ''},
            {title:'감자탕면', link: ''},
            {title:'김치사발면', link: ''},
            {title:'강황쌀국수 볶음면', link: ''},
            {title:'냉라면', link: ''},
            {title:'너구리', link: ''},
            {title:'농심가락(업소용)', link: ''},
            {title:'농심사리면', link: ''},
            {title:'농심쌀국수', link: ''},
            {title:'도토리쫄쫄면', link: ''},
            {title:'둥지냉면', link: ''},
            {title:'드레싱누들', link: ''},
            {title:'마늘면볶이', link: ''},
            {title:'마라고수(高手) 마라탕면', link: ''},
            {title:'맛짬뽕', link: ''},
            {title:'멸치칼국수', link: ''},
            {title:'모듬해물탕면', link: ''},
            {title:'무파마탕면', link: ''},
            {title:'미니컵면', link: ''},
            {title:'보글보글 부대찌개면', link: ''},
            {title:'사리곰탕면', link: ''},
            {title:'새우탕', link: ''},
            {title:'새우탕면', link: ''},
            {title:'생생우동', link: ''},
            {title:'신라면', link: ''},
            {title:'신라면건면', link: ''},
            {title:'신라면블랙', link: ''},
            {title:'안성탕면', link: ''},
            {title:'야채라면', link: ''},
            {title:'양념치킨큰사발', link: ''},
            {title:'얼큰장칼국수', link: ''},
            {title:'오징어짬뽕', link: ''},
            {title:'우육탕', link: ''},
            {title:'육개장', link: ''},
            {title:'우육탕면', link: ''},
            {title:'짐밥감성 고추장찌개면', link: ''},
            {title:'짜왕', link: ''},
            {title:'짜파게티', link: ''},
            {title:'찰비빔면', link: ''},
            {title:'참치마요큰사발', link: ''},
            {title:'콘치즈면', link: ''},
            {title:'튀김우동', link: ''},
            {title:'특육개장사발면', link: ''},
            {title:'해파라면', link: ''},
            {title:'후루룩국수', link: ''},
            {title:'후루룩메밀소바', link: ''},
          ]
        },
        {
          title: '해외브랜드',
          link: '',
          subCategorys: [
            {title:'나토리', link: ''},
            {title:'린트', link: ''},
            {title:'맥코믹', link: ''},
            {title:'멘토스', link: ''},
            {title:'몰튼', link: ''},
            {title:'보노', link: ''},
            {title:'벌링블랑카 오일', link: ''},
            {title:'사우어잭', link: ''},
            {title:'스머커스 잼', link: ''},
            {title:'알쿠니아', link: ''},
            {title:'지프 땅콩버터', link: ''},
            {title:'츄파춥스', link: ''},
            {title:'켈로그', link: ''},
            {title:'튤립햄', link: ''},
            {title:'프링글스', link: ''},
            {title:'하우스 와사비', link: ''},
            {title:'하우스 카레', link: ''},
            {title:'혼다시', link: ''},
          ],
        }
      ]
    },
    {
      index: 2,
      title: '누들푸들',
      category1: [
        {
          title: '레시피',
          link: '',
          subCategorys: [
            {title: '레시피', link: ''},
            {title: '누들푸들TV', link: ''},
          ]
        },
        {
          title: '누들푸들 프렌즈',
          link: '',
          subCategorys: [
            {title: '나만의 레시피', link: ''},
            {title: 'SAY톡', link: ''},
            {title: '주부모니터', link: ''},
          ]
        },
        {
          title: '기타',
          link: '',
          subCategorys: [
            {title: '공지사항', link: ''},
            {title: '상담접수', link: ''},
            {title: '이용약관', link: ''},
            {title: '개인정보처리방침', link: ''},
          ]
        },
      ],
      category2: [
        {
          title: '푸드 매거진',
          link: '',
          subCategorys: [
            {title: '이럴때 이런라면', link: ''},
            {title: '푸드칼럼', link: ''},
          ]
        },
        {
          title: '리뷰 플레이스',
          link: '',
          subCategorys: [
            {title: '누들푸들 체험단', link: ''},
            {title: '나만의 라면 후기', link: ''},
            {title: '생생 고객리뷰', link: ''},
          ]
        },
      ]
    },
    {
      index: 3,
      title: '농심채용',
      category1: [
        {
          title: '농심그룹',
          link: '',
          subCategorys: [
            {title: '농심그룹 소개', link: ''},
            {title: '그룹연혁', link: ''},
            {title: '경영철학', link: ''},
            {title: '찾아오시는 길', link: ''},
          ]
        },
        {
          title: 'Meet 농심',
          link: '',
          subCategorys: [
            {title: '채용가이드', link: ''},
            {title: '농심인이야기', link: ''},
            {title: '농심캠퍼스', link: ''},
            {title: '복리후생', link: ''},
            {title: '자주하는 질문', link: ''},
            {title: '채용 Q&A', link: ''},
          ]
        },
      ],
      category2: [
        {
          title:'채용안내',
          link: '',
          subCategorys: [
            {title: '채용공고', link: ''},
            {title: '인재상', link: ''},
            {title: '채용절차', link: ''},
            {title: '직무소개', link: ''},
            {title: '인재육성', link: ''},
          ]
        },
        {
          title: '지원현황',
          link: '',
          subCategorys: [
            {title: '농심', link: ''},
            {title: '율촌화학', link: ''},
            {title: '메가마트', link: ''},
            {title: '태경농산', link: ''},
            {title: '농심엔지니어링', link: ''},
            {title: '엔디에스', link: ''},
          ]
        },
        
      ]
    },
  ];
  
  return (
    <div className={`${styles[`site-map`]} ${isOpenSiteMap ? styles.open : ''}`}>
      <div className={styles[`site-gnb`]}>
        <div className={styles.container}>
          <ul className={styles[`gnb-list`]}>
            {
              gnbList.map(item => (
                <li key={item.index} className={`${styles[`gnb-list-item`]} ${currentIndex === item.index ? styles.active : ''}`}>
                  <span onClick={() => setCurrentIndex(item.index)}>{item.title}</span>
                </li>
              ))
            }
          </ul>
          <button className={styles[`close-btn`]} onClick={() => closeSiteMap()}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div className={`${styles.recruit} ${styles[`bg${currentIndex}`]}`}>
        <div className={styles.container}>
          <ul className={styles[`gnb-category-list`]}>
            {
              gnbCategorys.map(item => (
                <li key={item.index} className={`${styles[`gnb-category`]} ${currentIndex === item.index ? styles.active : ''}`}>
                    <div className={styles[`category-left`]}>
                      {
                        item.category1.map(category => (
                          <dl key={category.title} className={styles.col}>
                            <dt className={styles[`col-title`]}>
                              <a href={category.link}>
                                {category.title}
                              </a>
                            </dt>
                            <dd>
                              <ul className={styles[`sub-category-list`]}>
                                {
                                  category.subCategorys.map(subCategory => (
                                    <li key={subCategory.title} className={styles[`sub-category`]}>
                                      <a href={subCategory.link}>
                                        {subCategory.title}
                                      </a>
                                      {
                                        subCategory.subCategorys && subCategory.subCategorys.length > 0 &&
                                        <ul className={styles.depth}>
                                          {
                                         subCategory.subCategorys.map(sub => (
                                            <li key={sub.title} className={styles[`depth-item`]}>
                                              <a href={sub.link}>
                                                {sub.title}
                                              </a>
                                            </li>
                                        ))
                                        }
                                      </ul>
                                      }
                                    </li>
                                  ))
                                }
                              </ul>
                            </dd>
                          </dl>
                        ))
                      }
                    </div>
                    <div className={styles[`category-right`]}>
                      {
                        item.category2.map(category => (
                          <dl key={category.title} className={styles.col}>
                            <dt className={styles[`col-title`]}>
                              <a href={category.link}>
                                {category.title}
                              </a>
                            </dt>
                            <dd>
                              <ul className={styles[`sub-category-list`]}>
                                {
                                  category.subCategorys.map(subCategory => (
                                    <li key={subCategory.title} className={styles[`sub-category`]}>
                                      <a href={subCategory.link}>
                                        {subCategory.title}
                                      </a>
                                      {
                                      subCategory.subCategorys && subCategory.subCategorys.length > 0 &&
                                      <ul className={styles.depth}>
                                        {
                                         subCategory.subCategorys.map(sub => (
                                            <li key={sub.title} className={styles[`depth-item`]}>
                                              <a href={sub.link}>
                                                {sub.title}
                                              </a>
                                            </li>
                                        ))}
                                      </ul>
                                      }
                                    </li>
                                  ))
                                }
                              </ul>
                            </dd>
                          </dl>
                        ))
                      }
                    </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
});

export default SiteMap;