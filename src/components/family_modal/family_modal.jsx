import React from 'react';
import styles from './family_modal.module.css';


const FamilyModal = ({closeModal, isOpenModal}) => {
  const familySite = [{
      title: '그룹사',
      category: [
        {
          title: '농심홀딩스',
          link: '',
        },
        {
          title: '율촌화학',
          link: '',
        },
        {
          title: '메가마트',
          link: '',
        },
        {
          title: '태경농산',
          link: '',
        },
        {
          title: '농심엔지니어링',
          link: '',
        },
        {
          title: 'NDS',
          link: '',
        },
        {
          title: '농심기획',
          link: '',
        },
        {
          title: '호텔농심',
          link: '',
        },
        {
          title: '농심개발',
          link: '',
        },
        {
          title: '농심미분',
          link: '',
        },
        {
          title: '율촌재단',
          link: '',
        },
        {
          title: '',
          link: '',
        },
        {
          title: '농심미국',
          link: '',
        },
        {
          title: '농심중국',
          link: '',
        },
        {
          title: '농심일본',
          link: '',
        },
      ]
    },
    {
      title: '브랜드',
      category: [
        {
          title: '새우깡',
          link: '',
        },
        {
          title: '신라면',
          link: '',
        },
        {
          title: '백산수',
          link: '',
        },
        {
          title: '코코이찌방야',
          link: '',
        },
        {
          title: '식문화연구',
          link: '',
        },
        {
          title: '식문화전문도서관',
          link: '',
        },
      ]
    }];

    const familySiteList = familySite.map(item => (
      <dl key={item.title}>
        <dt>{item.title}</dt>
        <dd>
          <ul>
            {item.category.map(category => 
              <li key={category.title}>
                <a href={category.link} title={category.title}>
                  {category.title}
                </a>
              </li>
              )}
          </ul>
        </dd>
      </dl>
    ))

  return (
    <div className={`${styles[`family-modal`]}  ${isOpenModal ? styles.active : '' }`}>
      <button className={styles.closeBtn}
        aria-label="popup close button"
        onClick={closeModal}>
        <i></i>
      </button>
      <div className={styles[`family-modal-box`]}>
        <div className={styles.content}>
          {familySiteList}
        </div>
      </div>
    </div>
  );
};

export default FamilyModal;